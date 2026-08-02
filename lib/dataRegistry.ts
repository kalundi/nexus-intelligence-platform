import {
  countyData,
  dataSources,
} from "../data/sourceRegistry";

export function getDataRecord(id: string) {
  return countyData.find((record) => record.id === id);
}

export function getSourceForRecord(recordId: string) {
  const record = getDataRecord(recordId);

  if (!record?.sourceId) {
    return undefined;
  }

  return dataSources.find(
    (source) => source.id === record.sourceId,
  );
}

export function getVerifiedRecords() {
  return countyData.filter(
    (record) => record.status === "verified",
  );
}

export function validateDataRegistry() {
  const errors: string[] = [];

  for (const record of countyData) {
    if (
      record.status === "verified" &&
      !record.sourceId
    ) {
      errors.push(
        `${record.id}: verified records require a sourceId`,
      );
    }

    if (
      record.sourceId &&
      !dataSources.some(
        (source) => source.id === record.sourceId,
      )
    ) {
      errors.push(
        `${record.id}: source ${record.sourceId} does not exist`,
      );
    }
  }

  return errors;
}
