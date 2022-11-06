// Create the Dog class here
import dogs from "./data.js"

class Dog{
    constructor(data){
        Object.assign(this, data)
    }

    setDogHtml(){
        console.log(this.avatar)
        return `
        <div class="main-pic" style="background-image: url('${this.avatar}');">
                <h1>${this.name}, ${this.age}</h1>
                <p>How you doin?</p>
            </div>
        `
    }
}



export default Dog