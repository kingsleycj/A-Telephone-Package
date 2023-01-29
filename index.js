// a telephone class to store the three methods: add, remove, dial
class Telephone {
  constructor() {
    this.observers = new Set();
    this.dialer = new Set();
  }

  addPhoneNumber(number) {
    this.dialer.add(number);
  }

  removePhoneNumber(number) {
    this.dialer.delete(number);
  }

  dialPhoneNumber(number) {
    if (this.dialer.has(number)) {
      this.notifyObserver(number);
    } else {
      this.notifyObserver(number + " not found on Telephone! ");
    }
  }

  // updating the observer pattern to have the methods: add, remove and notify
  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObserver(number) {
    this.observers.forEach((observer) => {
      observer.update(number);
    });
  }
}

// instantiating the Telephone class
const telephone = new Telephone();

// the first observer class to to be updated when the telephone class is called
class Observer1 {
    constructor (observer){
    this.observer = observer;
    }
    update(number){
        console.log(`\nWould you like to dial ${number} ?\n`);
    }
}

// the second observer class to to be updated when the telephone class is called
class Observer2 {
    constructor(observer){
    this.observer = observer;
    }
    update(number1){
        console.log(`Now dialing ${number1}...\n`);
    }
}

// instantiating the two observer classes
const kingsley = new Observer1()
const michael = new Observer2();

// adding the observers to the telephone class
telephone.addObserver(kingsley)
telephone.addObserver(michael);

// assigning a number to be dialed to the telephone class
telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");


