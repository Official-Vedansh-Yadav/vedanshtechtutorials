var testwords = document.querySelector(".words");  // The boc which will show the words
const spans = document.querySelectorAll("span"); // All words as an array
var audio = new Audio("media/keysound.mp3"); // Sound called when Key is pressed

// Script to check typed key is right or not
var wrongword = 0;
var a = 1;
document.onkeypress = (e)=>{
        audio.play();
        var print = spans[a].innerHTML;
        var charcode = e.charCode;
        var keyvalue = String.fromCharCode(charcode);
        if (keyvalue == print){
            spans[a].classList.add("green");
            spans[a].classList.remove("red");
            a++;
        }else{
            spans[a].classList.add("red");
            spans[a].classList.add("green");
            wrongword++;
        }
        // a++;
}

//script when user click enter
document.onkeydown = (e)=>{
    if (e.keyCode == 13) {
        // testwords.style.display = "none";
        acc = Math.floor(((a-wrongword)/a)*100);
        testwords.innerHTML = `Your accuracy is ${acc} %`;
    }
}
