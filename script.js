const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const title = document.getElementById("title");
const zone = document.querySelector(".elf-hangout-zone");
let count = 1;


function duplicateElf(){
    if(count < 10){
        elf.textContent += "🧝"; 
        count++;
    } else {
        btn.disabled = true;
        title.textContent = "House is Full!";
        elf.textContent = "";
        zone.style.backgroundImage = "url('images/card.png')";
        zone.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "repeat-x";
    }
}

btn.addEventListener("click", duplicateElf);