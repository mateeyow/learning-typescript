function Logger(logString: string) {
  return function (constructor: Function) {
    console.log("logging... " + logString);
    console.log("constructor", constructor);
  };
}

@Logger("Logging a person object")
class Person {
  name = "Matt";

  constructor() {
    console.log("Creating new object");
  }
}

const p = new Person();

// Decorator for methods
function Autobind(_: any, __: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjMethod;
}

class Printer {
  message = "It works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const btn = document.querySelector("button")!;

// Without decorator it will not print this.message
btn.addEventListener("click", printer.showMessage);
