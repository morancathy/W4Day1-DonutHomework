//W4Day1 - Homework - Adventure of Dougie the Donut

class Hero {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['I\'m fresher than day old pizza','You can\'t count my calories'];
  };

  talkSass(){
    const quoteEl = document.querySelector('#random-quote');
    quoteEl.textContent = `Dougie: ${this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]}`
    console.log(`Dougie: ${this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]}`);
  };

  annouceHealth(){
    console.log(`Dougie's Health: ${this.health}`);
  }

  fight(opponent){
    console.log(`Dougie: I\'m ready to rumble!`);
    const fightQuoteEl = document.querySelector('#fight-quote');
    fightQuoteEl.textContent = "Dougie: I'm ready to rumble!";

    opponent.health -= this.weapons.sprinkleSpray;
    console.log(`Pizza Rat was hit with sprinkle spray! His health is now ${opponent.health}.`);
    // console.log(`sugar shock hitpoints: ${this.weapons.sugarShock}`);
  }
};
const Dougie = new Hero("Dougie");

class Enemy {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = ['I\'m youtube famous', 'I\'m more dangerous than an uncovered sewer'];
  };

  talkSmack(){
      console.log(`Pizza Rat: ${this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]}`);
  }

  annouceHealth(){
    console.log(`Pizza Rat's health: ${this.health}`);
  }

  fight(opponent){
    console.log("Pizza Rat: I\'m gonna flatten you like a slice of pepperoni!");
    opponent.health -= this.weapons.pepperoniStars;
    console.log(`Dougie got hit with pepperoni stars! His health is now ${opponent.health}.`);
    // console.log(`cheese grease hitpoints: ${this.weapons.cheeseGrease}`);
    // console.log(Object.keys[1][this.weapons]);
  }
}
const PizzaRat = new Enemy("Pizza Rat");

function walkingDownTheStreet(){
  Dougie.talkSass();
  PizzaRat.talkSmack();
  Dougie.annouceHealth();
  PizzaRat.annouceHealth();
}
walkingDownTheStreet();

PizzaRat.fight(Dougie);
Dougie.fight(PizzaRat);
PizzaRat.annouceHealth();
Dougie.annouceHealth();
