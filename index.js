import Dog from "./Dog.js"
import dogs from "./data.js"

const indexArr = [1,2,3]

function handleLike(e){
    dog.setLiked(e) 
    setTimeout(getNextDog,1000)
}

function getNextDog(){
    const nextDog =  dogs[indexArr.shift()]
    if (nextDog){
        dog= new Dog(nextDog)
        render()
    }
    
}

let dog = new Dog(dogs[0])


document.body.addEventListener('click', handleLike)

function render(){
    document.querySelector('#main').innerHTML = dog.setDogHtml()
}

render()