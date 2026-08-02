import assert from "node:assert/strict";
import test from "node:test";

test("verified records include source identifiers", async () => {
  const source = await import(
    "../data/sourceRegistry.ts"
  );

  for (const record of source.countyData) {
    if (record.status === "verified") {
      assert.ok(
        record.sourceId,
        `${record.id} requires a sourceId`,
      );
    }
  }
});
