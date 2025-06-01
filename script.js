let parent = document.querySelector(".container");

parent.addEventListener("click", function(e){
    e.stopPropagation();
    let box = e.target;
    console.log(box);
    if(box.classList.contains("box")){
        document.body.style.backgroundColor = `${box.id}`;
}
}, false)