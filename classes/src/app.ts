// Code goes here!
class Department {
  private employees: string[] = [];
  static year = 2020;

  constructor(private readonly id: string, public name: string) {
    console.log(Department.year);
  }

  describe(this: Department) {
    console.log(`Department: ${this.name} with department id: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    return "";
  }

  constructor(id: string, report: string[]) {
    super(id, "Information Technology");
    this.lastReport = report[0];
  }
}

const employee1 = Department.createEmployee("Joe");
console.log("employee1", employee1);

const mathDepartment = new ITDepartment("d5c1a", ["something"]);

console.log("mathDepartment.mostRecentReport", mathDepartment.mostRecentReport);

mathDepartment.describe();

mathDepartment.addEmployee("PJ");
mathDepartment.addEmployee("Matthew");

mathDepartment.printEmployeeInformation();
// const mathCopy = { name: "Computer", describe: mathDepartment.describe };

// mathCopy.describe();
