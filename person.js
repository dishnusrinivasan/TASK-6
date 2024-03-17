class person {
  constructor(name, age, gender, major = false) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.major = major;
  }
}

const Dishnu = new person("Dishnu", 20, "male", true);
console.log(Dishnu);
