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
    const quoteEl = document.querySelector('#hero-quotes');
    quoteEl.textContent = `Dougie: ${this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]}`
  };

  annouceHealth(){
    console.log(`Dougie's Health: ${this.health}`);
    document.querySelector(".dougie-health").innerText = `Dougie's Health: ${this.health}`;
  }

  fight(opponent){
    const fightQuoteEl = document.querySelector('#hero-fight-quote');
    fightQuoteEl.textContent = "Dougie: I'm ready to rumble!";

    function sprinkleSpray(){
      document.getElementById('sprinkle-spray').addEventListener('click', attack);
      function attack(){
        opponent.health -= Dougie.weapons.sprinkleSpray; 
        if(opponent.health <= 0){
          endGame();
        } else{
          opponent.annouceHealth();
          alert(`Pizza Rat was hit with sprinkle spray!`)
        }
      }
    }
    sprinkleSpray();

    function sugarShock(){
      document.getElementById('sugar-shock').addEventListener('click', attack);
      function attack(){
        opponent.health -= Dougie.weapons.sugarShock;
        if(opponent.health <= 0){
          endGame();
        } else{
          opponent.annouceHealth();
          alert(`Pizza Rat was hit with Sugar Shock!`)
        }
      }
    }
    sugarShock();
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
      const quoteEl = document.querySelector('#enemy-quotes');
      quoteEl.textContent = `Pizza Rat: ${this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]}`
  }

  annouceHealth(){
    console.log(`Pizza Rat's health: ${this.health}`);
    document.querySelector(".pizza-rat-health").innerText = `Pizza Rat's Health: ${this.health}`;
  }

  fight(opponent){
    const fightQuoteEl = document.querySelector('#enemy-fight-quote');
    fightQuoteEl.textContent = "Pizza Rat: I'm gonna flatten you like a slice of pepperoni!";

    function pepperoniStars(){
      document.getElementById('pepperoni-stars').addEventListener('click', attack);
      function attack(){
        opponent.health -= PizzaRat.weapons.pepperoniStars;
        if(opponent.health <= 0){
          endGame();
        } else{
          opponent.annouceHealth();
          alert(`Dougie got hit with pepperoni stars!`);
        }
      }
    }
    pepperoniStars();

    function cheeseGrease(){
      document.getElementById('cheese-grease').addEventListener('click', attack);
      function attack(){
        opponent.health -= PizzaRat.weapons.cheeseGrease;
        if(opponent.health <= 0){
          endGame();
        } else{
          opponent.annouceHealth();
          alert(`Dougie got hit with cheese grease!`)
        }
      }
    }
    cheeseGrease();
  }
}
const PizzaRat = new Enemy("Pizza Rat");

function endGame(){
  if(Dougie.health <= 0){
    alert("Oh no, Dougie died! Game over.")
  } else if(PizzaRat.health <= 0){
    alert("Yay! Dougie killed Pizza Rat! Game over.");
  }
};

Dougie.talkSass();
PizzaRat.talkSmack();

PizzaRat.fight(Dougie);
Dougie.fight(PizzaRat);

PizzaRat.annouceHealth();
Dougie.annouceHealth();
