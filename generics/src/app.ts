// Code goes here!
const names: Array<string | number> = [];
names.push(1);
names.push("yow");

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("hola");
  }, 500);
});

promise.then((data) => {
  const a = data.toUpperCase();
  console.log("a", a);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "John" }, { age: 21 });
console.log("merged", merged.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";

  if (element.length > 0) {
    descriptionText = `Got ${element.length} element`;
  }
  return [element, descriptionText];
}

console.log(countAndPrint([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value of " + obj[key];
}

console.log(extractAndConvert({ name: "Mat" }, "name"));

const playah: Readonly<string[]> = ["Matt", "LM"];
