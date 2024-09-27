import { camelToSnakeCase } from ".";

export function queryBuilder(params?: {
  [key: string]: string | number;
}): string {
  let query = "";
  if (params) {
    if (Object.keys(params).length > 0) {
      query += "?";
    }
    for (const key of Object.keys(params)) {
      if (params[key] || params[key] == 0) {
        query += `&${camelToSnakeCase(key)}=${params[key]}`;
      }
    }
  }
  return query;
}
