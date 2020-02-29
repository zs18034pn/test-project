function buttonClicked(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    
    const header = document.getElementById("header-title");
    header.textContent = "Changed";
    header.style.color = "black";
}

const button = document.querySelector("#button");
button.addEventListener("click", buttonClicked);
