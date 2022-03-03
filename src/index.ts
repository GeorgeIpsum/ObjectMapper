type Primitive = number | string | Date | boolean | bigint | null | undefined | object;
type Schema<T extends Object> = Record<keyof T, Primitive[]>;
const mapObject = <T>(object: T, schema?: Schema<T>, options?: { depth?: number }): Schema<T> => {
  const keys = Object.keys(object) as Array<keyof typeof object>;
  if(keys.length === 0) {
    return {} as Record<keyof T, Primitive[]>;
  }
  return {} as Record<keyof T, Primitive[]>;
};

const mapArray = <T>(arr: T[], initialSchema?: Schema<T>) => {
  let schema = initialSchema;
  for(let i = 0; i < arr.length; i++) {
    schema = mapObject(arr[i], schema);
  }
  return schema;
};

export { mapArray, mapObject }
