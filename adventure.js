//W4Day1 - Homework - Adventure of Dougie the Donut

class Hero {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['i\'m fresher than day old pizza','you can\'t count my calories'];
  };

  talkSass(){
    const quoteEl = document.querySelector('#random-quote');
    quoteEl.textContent = `"${this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]}"`
  };

  annouceHealth(){
    console.log(this.health);
  }

  fight(){
    console.log(`I\'m ready to rumble!`);
    const fightQuoteEl = document.querySelector('#fight-quote');
    fightQuoteEl.textContent = "I'm ready to rumble!";
  }

};
const Dougie = new Hero("Dougie");
Dougie.talkSass();
Dougie.annouceHealth();
Dougie.fight();

class Enemy {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer'];
  };
  talkSmack(){
      console.log(`"${this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]}"`);
  }
  annouceHealth(){
    console.log(this.health);
  }
  fight(){
    console.log("I\'m gonna flatten you like a slice of pepperoni!");
  }
}
const PizzaRat = new Enemy("Pizza Rat");
PizzaRat.talkSmack();
PizzaRat.annouceHealth();
PizzaRat.fight();
