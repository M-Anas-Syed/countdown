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
    
} 


function cardSelector(){
    animate(3,59);
    
    if(n[3].children[0].dataset.number == 0){
        animate(2,59);
    }
    
    
    if(n[2].children[0].dataset.number == 0 && n[3].children[0].dataset.number == 0){
        animate(1,23);
    }
    
    if(n[1].children[0].dataset.number == 0 && n[2].children[0].dataset.number == 0 && n[3].children[0].dataset.number == 0){
        animate(0,29);
    }
    
}
setInterval(function(){
    cardSelector();
}, 1000);                 



