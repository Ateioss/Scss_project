    /* librairie javascript pour le Carousel */
    const img_fond = ["block-titre-fond-1","block-titre-fond-2","block-titre-fond-3"];
    const puce_fond = ["#puce-1","#puce-2","#puce-3"];

    let img_current = 1;

    function init_puces(){
        let puces = document.querySelectorAll(".puce-slide");
        for(let i = 0; i<puces.length; i++){
            puces[i].classList.remove("puce-orange");
            puces[i].classList.remove("puce-blanc");
            puces[i].classList.add("puce-blanc");
        }
    }

    function carousel_prev(){
        if (img_current >= 0 && img_current < img_fond.length){
            init_puces();
            let fond = document.querySelector(".block-title");
            fond.classList.remove ("block-titre-fond-1");
            fond.classList.remove ("block-titre-fond-2");
            fond.classList.remove ("block-titre-fond-3");
            fond.classList.add (img_fond[img_current]);

            let puce = document.querySelector(puce_fond[img_current]);
            puce.classList.add("puce-orange");
            img_current = img_current - 1;
        }else{
            img_current = img_fond.length - 1;
            carousel_prev();
        }
    }

  function carousel_next(){
     if (img_current >= 0 && img_current < img_fond.length){
        init_puces();
        let fond = document.querySelector(".block-title");
        fond.classList.remove ("block-titre-fond-1");
        fond.classList.remove ("block-titre-fond-2");
        fond.classList.remove ("block-titre-fond-3");
        fond.classList.add (img_fond[img_current]);

        let puce = document.querySelector(puce_fond[img_current]);
        puce.classList.add("puce-orange");
        img_current ++;
     }else{
        img_current = 0;
        carousel_next();
     }
  }
