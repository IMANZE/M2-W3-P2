const SetHeaderToPicked = function(){
    let headerNode = document.getElementById("main-header")
     headerNode.classList.add("Picked")
}
function changeColor(){
        let page = document.getElementsByTagName("body")
        page[0].style.backgroundColor = "red"
}
function changeFooter(){
        let fakeFooter = document.getElementsByClassName("footer")
        fakeFooter[0].innerText = 'fake info'
}
function addClassToLinks(){
    let aTags = document.querySelectorAll("a") 
    for(let i = 0; i <aTags.length; i++) {
     aTags[i].classList.add("newLink")
    }
}
const toggleImagesClass = function () {
    let images = document.querySelectorAll("img")
    for (let i = 0; i < images.length; i++) {
      const singleImg = images[i];
      singleImg.classList.toggle("hidden") 
    }
}
