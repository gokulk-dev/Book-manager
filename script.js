var poverlay=document.querySelector(".popup-overlay")
var pbox=document.querySelector(".popup-box")
var addpbutton=document.getElementById("add-popup-button")
addpbutton.addEventListener("click",function(){
    poverlay.style.display="block"
    pbox.style.display="block"
})
var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
     poverlay.style.display="none"
    pbox.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var title=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h5>${author.value}</h5>
        <p>${description.value}
        </p>        
        <button onclick="deletebook(event)">Delete</button>`
        
        container.append(div)
        poverlay.style.display="none"
        pbox.style.display="none"

})
function deletebook(event){
    event.target.parentElement.remove()
}
