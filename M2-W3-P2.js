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
function randomPriceColor() {
    let changePriceColor = document.getElementsByClassName ("price") 
   let randomColor1 = (Math.floor(Math.random()*(256 - 0) +  0))
   let randomColor2 = (Math.floor(Math.random()*(256 - 0) +  0))
   let randomColor3 = (Math.floor(Math.random()*(256 - 0) +  0))
    var year = 25
    console.log("I am year old"); 
    console.log(`I am ${year} old`);
   //    randomColor = randomColor.toString
    for (let i = 0; i < changePriceColor.length; i++) {
        const singlePrice = changePriceColor[i];
     //    singlePrice.style.color = "rgb(234, 234, 234)"
         //  singlePrice.style.color = "rgb("+randomColor1 + ","+randomColor2 + ","+randomColor3 + ")"
         
           singlePrice.style.color = `rgb(${randomColor1},${randomColor2},${randomColor3})`
    } 
   //    randomColor = randomColor.toString 
    
   }
   randomPriceColor()
   // singlePrice.style.color = `rgb (${randomColor},${randomColor},${randomColor})`