import { AtlasMap } from "../../components/atlas/AtlasMap";
import { facilities } from "../../components/atlas/facilities";

export default function AtlasPage() {
  return (
    <main className="atlas-page">
      <section className="atlas-hero">
        <div>
          <p className="eyebrow">Montgomery County Atlas</p>
          <h1>Facility access planning map</h1>
          <p>
            Review illustrative care facilities and corridor opportunities in a
            network view built for mobility planning.
          </p>
        </div>
      </section>

      <AtlasMap facilities={facilities} />
    </main>
  );
}
