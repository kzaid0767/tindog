import Dog from "./Dog.js"
import dogs from "./data.js"

// Remember to import the data and Dog class!





const rex = new Dog(dogs[2])

document.querySelector('#main').innerHTML = rex.setDogHtml()