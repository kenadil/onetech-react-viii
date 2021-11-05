// eslint-disable-next-line @typescript-eslint/no-unused-vars
type StringOfLength<Max> = string & {
  readonly StringOfMaxLength: unique symbol;
};

const isIdOfLength = <Max extends number>(
  id: string,
  max: Max
): id is StringOfLength<Max> => id.length <= max;

export const idOfLength = <Max extends number>(
  input: string,
  max: Max
): StringOfLength<Max> => {
  if (!isIdOfLength(input, max)) {
    throw new Error("Too long");
  }
  return input;
};
