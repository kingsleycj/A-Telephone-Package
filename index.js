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

const telephone = new Telephone();


class Observer1 {
    constructor (observer){
    this.observer = observer;
    }
    update(number){
        console.log(`\nWould you like to dial ${number} ?\n`);
    }
}

class Observer2 {
    constructor(observer){
    this.observer = observer;
    }
    update(number1){
        console.log(`Now dialing ${number1}...\n`);
    }
}

const kingsley = new Observer1()
const michael = new Observer2();

telephone.addObserver(kingsley)
telephone.addObserver(michael);


telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");


