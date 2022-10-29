function display(id){
    let listElements = document.querySelectorAll(".label-info");
    for(let i=0;i<listElements.length;i++){
        if(listElements[i].classList.contains("hidden-element")==false){
            listElements[i].classList.add("hidden-element");
        }
    }
    let element = document.querySelector(id);
    element.classList.remove("hidden-element");
}

function close_info(id){
    let element = document.querySelector(id);
    element.classList.add("hidden-element");
}