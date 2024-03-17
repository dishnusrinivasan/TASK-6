class uber {
  constructor(kms, splride = false) {
    this.kms = kms;
    this.splride = splride;
  }

  price() {
    if (this.splride) return this.kms * 18 * 1.5;
    else return this.kms * 18; // $/km * 18 miles per
  }
}

const user1 = new uber(30, true);
console.log(`The cost of the ride is ${user1.price()}`);
