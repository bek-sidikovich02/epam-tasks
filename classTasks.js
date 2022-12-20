// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   move(speed) {
//     this.speed = speed;
//     console.log(`${this.name} moves with speed ${this.speed}.`);
//   }
// }

// class Cat extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }

//   stop() {
//     super.move(); // call parent stop
//     this.hide(); // and then hide
//   }
// }

// let cat = new Cat('White Catty');

// cat.move(5);
// cat.stop();
