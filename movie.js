class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(objArr) {
    let mArr = [];
    for (let i in objArr) {
      if (objArr[i].rating === "PG") {
        mArr.push(objArr[i].title);
      }
    }
    return mArr;
  }
}

const ob1 = new movie("Sagaar", "ynot");
const ob2 = new movie("gajni", "red", "A");
const ob3 = new movie("vanakkam", "Ynot");
const ob4 = new movie("Casino Royale", "Eon Productions", "PG13");
console.log(ob3.getPG([ob1, ob2, ob3,ob4]));
