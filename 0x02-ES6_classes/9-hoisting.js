export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

const cls2019 = new HolbertonClass(2019, 'San Francisco');
const cls2020 = new HolbertonClass(2020, 'San Francisco');
const student1 = new StudentHolberton('Guillaume', 'Salva', cls2020);
const student2 = new StudentHolberton('John', 'Doe', cls2020);
const student3 = new StudentHolberton('Albert', 'Clinton', cls2019);
const student4 = new StudentHolberton('Donald', 'Bush', cls2019);
const student5 = new StudentHolberton('Jason', 'Sandler', cls2019);

export default [student1, student2, student3, student4, student5];
