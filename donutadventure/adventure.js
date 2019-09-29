/////////////////////RANDOM FUNCTIONS////////////////////////
const randomPhrase = arr => Math.floor(Math.random() * arr.length);
const randomWeapon = () => Math.round(Math.random() * 1);

/////////////////////CLASSES////////////////////////
class Hero {
    constructor (name) {
        this.name = name; 
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 10,
            sugarShock: 20
        };
        this.catchPhrases = [
            "I'm fresher than day old pizza!",
            "You can't count my calories!"
        ];
    }
    fight (enemy) {
        if (randomWeapon() === 0) {
            alert(`${this.name} says: I'm ready to rumble!\n${enemy.name} got hit by Sprinkle Spray!\nHis health is now at ${enemy.health -= this.weapons.sprinkleSpray}.`);
        } else {
            alert(`${this.name} says: I'm ready to rumble!\n${enemy.name} got hit by Sugar Shock!\nHis health is now at ${enemy.health -= this.weapons.sugarShock}.`);
        } 
    }
    talkSass () {
        return `${this.name} says: ${this.catchPhrases[randomPhrase(this.catchPhrases)]}`;
    }
    announceHealth () {
        return `${this.name}'s health is ${this.health}.`;
    }
}

class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100; 
        this.weapons = {
            pepperoniStars: 10,
            cheeseGrease: 20
        };
        this.catchPhrases = [
            "I'm YouTube famous!",
            "I'm more dangerous than an uncovered sewer!"
        ];
    }
    fight (hero) {
        if (randomWeapon() === 0) {
            alert(`${this.name} says: I'm gonna flatten you like a slice of pepperoni!\n${hero.name} got hit by Pepperoni Stars!\nHis health is now at ${hero.health -= this.weapons.pepperoniStars}.`);
        } else {
            alert(`${this.name} says: I'm gonna flatten you like a slice of pepperoni!\n${hero.name} got hit by Cheese Grease!\nHis health is now at ${hero.health -= this.weapons.cheeseGrease}.`);
        }
    }
    talkSmack () {
        return(`${this.name} says: ${this.catchPhrases[randomPhrase(this.catchPhrases)]}`);
    }
    announceHealth () {
        return `${this.name}'s health is ${this.health}.`;
    }
}

/////////////////////INSTANCES///////////////////////
const dougie = new Hero("Dougie the Donut");
const pizzaRat = new Enemy("Pizza Rat");

/////////////////////ALERT VARIABLES////////////////////////
const dougieWins = () => alert("Pizza Rat has been defeated for now... dance Dougie dance!");
const pizzaRatWins = () => alert ("Looks like Dougie's dream of dancing in Time Square has to wait.");

/////////////////////GAME FUNCTIONS////////////////////////
const sassOrFight = () =>  {
    let userChoice = prompt(`${dougie.announceHealth()}\n${pizzaRat.announceHealth()}\nDo you want to sass or fight Pizza Rat?`,"sass/fight");
    while ((userChoice !== "sass") && (userChoice !== "fight")) {
            userChoice = prompt('Please type either "sass" or "fight".',"sass/fight");
        }
    userChoice === "sass" ? sassInteraction() : fightInteraction(); 
};

const reloadGame = () => {
    let userChoice = prompt("Do you want to play again?","yes/no");
    while ((userChoice !== "yes") && (userChoice !== "no")) {
            userChoice = prompt("Please type either `yes` or `no`","yes/no");
        }
    userChoice === "yes" ? document.location.reload(true) : alert("Thank you for playing!"); 
}

const checkForEnd = () => {
    if (pizzaRat.health <= 0) {
        document.body.setAttribute("style", 'background-image: url("donut.gif")');
        setTimeout(dougieWins, 500);
        setTimeout(reloadGame, 501);
    } else if (dougie.health <= 0) {
        document.body.setAttribute("style", 'background-image: url("rat.png")');
        setTimeout(pizzaRatWins, 500);
        setTimeout(reloadGame, 501);
    } 
}

const sassInteraction = () => {
    alert(`${dougie.talkSass()}\n${pizzaRat.talkSmack()}`)
    sassOrFight();
}

const fightInteraction = () => {
    if (randomWeapon() === 0) {
        dougie.fight(pizzaRat);
        pizzaRat.health > 0 ? pizzaRat.fight(dougie) : checkForEnd();
        dougie.health <= 0 ? checkForEnd() : false; 
    } else {
        pizzaRat.fight(dougie);
        dougie.health > 0 ? dougie.fight(pizzaRat) : checkForEnd();
        pizzaRat.health <= 0 ? checkForEnd() : false; 
    }
}

const start = () => { 
    sassInteraction();
    while((dougie.health > 0) && (pizzaRat.health > 0)) {
        sassOrFight();
    }
}

/////////////////////START////////////////////////
setTimeout(start, 500);






