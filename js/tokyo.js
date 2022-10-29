function display(id){
    let listElements = document.querySelectorAll(".label-info");
    for(let i=0;i<listElements.length;i++){
        if(listElements[i].classList.contains("hidden-element")==false){
            listElements[i].classList.add("hidden-element");
        }
    }
    let element = document.querySelector(id);
    element.classList.remove("hidden-element");
    localStorage.setItem("idBlockInfo", id);
}

function close_info(id){
    let element = document.querySelector(id);
    element.classList.add("hidden-element");
    localStorage.setItem("idBlockInfo", -1);
}

function load_page(){
    let idBlockInfo = localStorage.getItem("idBlockInfo");
    if (idBlockInfo!=null && idBlockInfo!=-1){
        display(idBlockInfo);
    }

}