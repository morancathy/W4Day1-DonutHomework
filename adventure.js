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
Dougie.fight();
console.log("word up");
