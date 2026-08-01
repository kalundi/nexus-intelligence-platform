"use client";

import { useMemo, useState } from "react";
import type { Facility, FacilityCategory } from "./facilities";

const categoryLabels: Record<FacilityCategory, string> = {
  hospital: "Hospitals",
  dialysis: "Dialysis",
  "senior-living": "Senior Living",
  rehabilitation: "Rehabilitation",
  "behavioral-health": "Behavioral Health",
};

export function AtlasMap({ facilities }: { facilities: Facility[] }) {
  const [activeCategories, setActiveCategories] = useState<FacilityCategory[]>([
    "hospital",
    "dialysis",
    "senior-living",
    "rehabilitation",
    "behavioral-health",
  ]);

  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
    facilities[0] ?? null,
  );

  const visibleFacilities = useMemo(
    () => facilities.filter((facility) => activeCategories.includes(facility.category)),
    [activeCategories, facilities],
  );

  function toggleCategory(category: FacilityCategory) {
    setActiveCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  return (
    <section className="atlas-workspace">
      <aside className="atlas-controls">
        <span className="atlas-label">MAP LAYERS</span>

        <h2>Healthcare network</h2>

        <p>
          Turn facility categories on and off to explore the illustrative mobility network.
        </p>

        <div className="layer-list">
          {Object.entries(categoryLabels).map(([category, label]) => {
            const typedCategory = category as FacilityCategory;

            return (
              <label key={category}>
                <input
                  type="checkbox"
                  checked={activeCategories.includes(typedCategory)}
                  onChange={() => toggleCategory(typedCategory)}
                />

                <span className={`layer-symbol category-${category}`} />

                <b>{label}</b>
              </label>
            );
          })}
        </div>

        <div className="atlas-summary">
          <span>VISIBLE PLANNING POINTS</span>
          <strong>{visibleFacilities.length}</strong>
        </div>
      </aside>

      <div className="atlas-map">
        <div className="atlas-map-grid" />

        <div className="county-outline">
          <span>Montgomery County</span>
        </div>

        <div className="regional-route route-one" />
        <div className="regional-route route-two" />
        <div className="regional-route route-three" />

        {visibleFacilities.map((facility) => (
          <button
            key={facility.id}
            type="button"
            aria-label={`Open ${facility.name}`}
            className={`facility-marker category-${facility.category} ${selectedFacility?.id === facility.id ? "selected" : ""}`}
            style={{
              left: `${facility.x}%`,
              top: `${facility.y}%`,
            }}
            onClick={() => setSelectedFacility(facility)}
          >
            <span />
          </button>
        ))}

        <div className="map-location location-germantown">Germantown</div>
        <div className="map-location location-rockville">Rockville</div>
        <div className="map-location location-silver-spring">Silver Spring</div>
        <div className="map-location location-bethesda">Bethesda</div>
      </div>

      <aside className="facility-detail">
        {selectedFacility ? (
          <>
            <span className="atlas-label">SELECTED LOCATION</span>

            <div className={`facility-category category-${selectedFacility.category}`}>
              {categoryLabels[selectedFacility.category]}
            </div>

            <h2>{selectedFacility.name}</h2>

            <p>{selectedFacility.note}</p>

            <dl>
              <div>
                <dt>Area</dt>
                <dd>{selectedFacility.area}</dd>
              </div>

              <div>
                <dt>Strategic status</dt>
                <dd>{selectedFacility.status}</dd>
              </div>

              <div>
                <dt>Evidence status</dt>
                <dd>Illustrative planning point</dd>
              </div>
            </dl>

            <button type="button" className="atlas-action">
              Review corridor →
            </button>
          </>
        ) : (
          <p>Select a location on the map.</p>
        )}
      </aside>
    </section>
  );
}
