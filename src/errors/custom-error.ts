// What is an abstract class?
// An abstract class is a class that cannot be instantiated.
// An abstract method is a method declared within an abstract class, but without any implementation in the abstract class.
// NB: An abstract class can also have normal methods just like normal classes do
// https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
