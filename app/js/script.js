const n = document.querySelectorAll('.number');
const t = document.querySelectorAll('.top');
const b = document.querySelectorAll('.bottom');


function animate(h,q){

    function doflip(h){
        
        n[h].classList.remove('flip');
        

        setTimeout(function(){
            n[h].classList.add('flip');
        }, 150);
        
    }
    doflip(h);
    /* if(h == 3){
        setInterval(function(){
            doflip(h);
        }, 505);
    }
    else{
        doflip(h);
    }  */ 
    function counterchange(h,q){
        
        let x = n[h].children;

        if(x[0].dataset.number < 1){
            setTimeout(function(){
                x[0].dataset.number = q;
                x[3].dataset.number = q;
            }, 500);
            
        }
        else{
            setTimeout(function(){
                let hh = x[0].dataset.number - 1;
                let gg = x[3].dataset.number - 1;
                x[0].dataset.number = (hh).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                x[3].dataset.number = (gg).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            }, 500);
            
        }
    }
    counterchange(h,q);
    /* if(h == 3){
        setInterval(function(){
            counterchange(h,q);
        }, 1000);
    }
    else{
        counterchange(h,q);
    }   */
} 


function cardSelector(){
    animate(3,59);
    
    if(n[3].children[0].dataset.number == 0){
        animate(2,59);
    }
    
    
    if(n[2].children[0].dataset.number == 0){
        animate(1,23);
    }
    
    if(n[1].children[0].dataset.number == 0){
        animate(0,29);
    }
    
}
setInterval(function(){
    cardSelector();
}, 1000);             



/* function doflip(counterElement){
    if(n[counterElement].classList.contains('flip')){
        n[counterElement].classList.remove('flip');
    }
    else{
        n[counterElement].classList.add('flip');
    }
} */
/*
function counterchange(index){
    let x = n[index].children;

    for (let j of x){
        j.dataset.number--;
    }
}


function tiktock(s){
    if (s == 3){
        setInterval(function(){
            doflip(s);
        },500);
        setInterval(function(){
            counterchange(s);
        },1000);
    }
    else if(s == 2){
        setInterval(function(){
            doflip(s);
        },500);
        setInterval(function(){
            counterchange(s);
        },1000);
    }
    else if(s == 1){
        setInterval(function(){
            doflip(s);
        },500);
        setInterval(function(){
            counterchange(s);
        },1000);
    }
    else{
        setInterval(function(){
            doflip(s);
        },500);
        setInterval(function(){
            counterchange(s);
        },1000);
    }
} */


