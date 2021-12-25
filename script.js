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
        zone.style.overflowY = "hidden";
        document.body.style.backgroundRepeat = "repeat-x";
        btn.style.display = "none";
    }
}

btn.addEventListener("click", duplicateElf);