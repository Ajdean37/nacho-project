// document.getElementsByClassName('love').addEventListener("click", turnColor);

// function turnColor() {
//    let els = document.getElementsByClassName('love');
//    for (const el of els) {
//     el.style.backgroundColor = 'red';  
//    }
// }

function handleClick(event) {
    console.log("inHandleClick");
    let el = event.target;
    if (el.classList.contains("active")) {
        console.log("active class found");
        el.classList.remove("active");
        // el.style.color = 'red';
    }else {
        el.classList.add("active");
        console.log(el);
    }
        console.log(el.classList.contains("active"));
}

function readyDOM () {
    let els = document.querySelectorAll('.love');
   for (const el of els) {
       el.addEventListener("click", handleClick)
   }
   console.log(els);
}

readyDOM();
