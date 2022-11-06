// Create the Dog class here
import dogs from "./data.js"

class Dog{
    constructor(data){
        Object.assign(this, data)
        this.name = data.name
    }
    setDogHtml(){
       // {name, avatar,age,bio, hasBeenSwiped,hasBeenLiked} = this
        return `
            <div class="main-pic" style="background-image: url('${this.avatar}');">
                <img class="badge" id="like" src="/images/badge-like.png" hidden>
                <img class="badge" id="nope" src="/images/badge-nope.png" hidden>
                <div class="text">
                <h1>${this.name}, ${this.age}</h1>
                <p>${this.bio}</p>
                </div>
            </div>
          `
    }

    setLiked(e){
        const nopeImage = document.getElementById('nope')
        const likeImage = document.getElementById('like')
        if(e.target.id==='cross'||e.target.id==='redcross'){
            nopeImage.hidden= false
            likeImage.hidden = true
        } else if(e.target.id==='heart'||e.target.id==='greenheart'){
            nopeImage.hidden=true
            likeImage.hidden = false
            this.hasbeenLiked=true
        }
        
    }


}



export default Dog