//SET VARIABLES

//Zone cliquable
let counter = document.getElementById("counter");
//Compteur visuel
let cookieCounter = document.getElementById("cookieCounter");
//Compte actuel
let actualCount = Number(cookieCounter.innerHTML)

//Normal Clicker
let normal = document.getElementById("normal");
let normalCount = Number(normal.innerHTML.replace('Add NORMAL Clicker <br> 50🍪 Actual: ', ''))
//Bigger Clicker
let bigger = document.getElementById("bigger");
let biggerCount = Number(bigger.innerHTML.replace('Add BIGGER Clicker 1000🍪 Actual: ', ''))
//Heavyest Clicker
let heavyest = document.getElementById("heavyest");
let heavyestCount = Number(heavyest.innerHTML.replace('Add HEAVYEST Clicker 10000🍪 Actual: ', ''))

//Contains all automatics
let automatic = [];


//SET ACTIONS

//Add cookie when user click on cookie
counter.addEventListener('click', () => {
  actualCount += 1;
  cookieCounter.innerHTML = actualCount;
})

//Create class for automatic with type [normal, super, insane]
class Automatic {
  constructor(type) {
    this.type = type;
  }

  giveCookie() {
    if (this.type === 'normal') {
      setInterval(() => {
        actualCount += 1;
        cookieCounter.innerHTML = actualCount;
        console.log('new cookie');
      }, 1000);
    } else if (this.type === 'bigger') {
      setInterval(() => {
        actualCount += 100;
        cookieCounter.innerHTML = actualCount;
        console.log('new  big cookie');
      }, 5000);
    } else if (this.type === 'heavyest') {
      setInterval(() => {
        actualCount += 1000;
        cookieCounter.innerHTML = actualCount;
        console.log('new  ultra cookie');
      }, 25000);
    }
  }
} 

//Create an instance when user click on corresponding button
normal.addEventListener('click', () => {
  if (actualCount >= 50) {
    automatic.push(new Automatic('normal'));
    actualCount -= 50;
    cookieCounter.innerHTML = actualCount;
    normalCount += 1;
    normal.innerHTML = 'Add NORMAL Clicker <br> 50🍪 Actual: ' + normalCount;
    automatic[automatic.length-1].giveCookie();
  } else {
    console.log('Pas assez de cookies');
  }
})

bigger.addEventListener('click', () => {
  if (actualCount >= 1000) {
    automatic.push(new Automatic('bigger'));
    actualCount -= 1000;
    cookieCounter.innerHTML = actualCount;
    biggerCount += 1;
    bigger.innerHTML = 'Add BIGGER Clicker 1000🍪 Actual: ' + biggerCount;
    automatic[automatic.length-1].giveCookie();
  } else {
    console.log('Pas assez de cookies');
  }
})

heavyest.addEventListener('click', () => {
  if (actualCount >= 10000) {
    automatic.push(new Automatic('heavyest'));
    actualCount -= 10000;
    cookieCounter.innerHTML = actualCount;
    heavyestCount += 1;
    heavyest.innerHTML = 'Add HEAVYEST Clicker 10000🍪 Actual: ' + heavyestCount;
    automatic[automatic.length-1].giveCookie();
  } else {
    console.log('Pas assez de cookies');
  }
})