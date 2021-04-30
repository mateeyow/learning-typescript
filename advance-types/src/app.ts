type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
  name: "John",
  privileges: ["start-server"],
  startDate: new Date(),
};

type UnknownEmployee = Admin | Employee;

function printEmployee(emp1: UnknownEmployee) {
  console.log(emp1.name);

  if ("privileges" in emp1) {
    console.log(`Privileges: ${emp1.privileges}`);
  }

  if ("startDate" in emp1) {
    console.log(`Start Date: ${emp1.startDate}`);
  }
}

printEmployee({ name: "John Doe", privileges: ["escalation"] });

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  groundSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.groundSpeed;
      break;
  }

  console.log(`Moving at the speed of ${speed}`);
}

movingAnimal({ type: "horse", groundSpeed: 500 });

const userInput = document.getElementById("input-text");

if (userInput) {
  (userInput as HTMLInputElement).value = "Hi there,,,";
}
