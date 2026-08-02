import type { DataRecord } from "../../types/data-registry";
import { getSourceForRecord } from "../../lib/dataRegistry";

const labels = {
  verified: "Verified Evidence",
  illustrative: "Illustrative",
  "management-assumption": "Management Assumption",
  "future-vision": "Future Vision",
};

export function DataProvenance({
  record,
}: {
  record: DataRecord;
}) {
  const source = getSourceForRecord(record.id);

  return (
    <aside className="data-provenance">
      <span className={`data-status data-${record.status}`}>
        {labels[record.status]}
      </span>

      <dl>
        <div>
          <dt>Geography</dt>
          <dd>{record.geography}</dd>
        </div>

        <div>
          <dt>Period</dt>
          <dd>{record.period}</dd>
        </div>

        {source ? (
          <div>
            <dt>Source</dt>
            <dd>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
              >
                {source.publisher} ↗
              </a>
            </dd>
          </div>
        ) : null}
      </dl>

      {record.methodology ? (
        <p>
          <strong>Methodology:</strong>{" "}
          {record.methodology}
        </p>
      ) : null}

      {record.limitations ? (
        <p>
          <strong>Limitations:</strong>{" "}
          {record.limitations}
        </p>
      ) : null}
    </aside>
  );
}
