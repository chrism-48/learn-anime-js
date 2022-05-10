



anime({
    targets: 'div.pageTitle',   
    scale:0,      
});

anime({
    targets: 'div.pageTitle',   
    scale:3,   
    easing: 'easeInOutExpo',
    duration:4000,
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      }   
});


anime({
    targets: 'div.pageTitle2',   
    scale:0,      
});

anime({
    targets: 'div.pageTitle2',   
    scale:3,   
    easing: 'easeInOutExpo',
    duration:4000,
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      }   
});


const myStart = document.querySelector('#start');
myStart.addEventListener('click', spin);
const myReset = document.querySelector('#reset');
myReset.addEventListener('click', reset);
const myReset2 = document.querySelector('#reset2');
myReset2.addEventListener('click', reset2);
const myStart2 = document.querySelector('#start2');
myStart2.addEventListener('click', animation2);


function spin() {
    
    anime({
        targets:'div.boxes.two',
        translateY:    
        [
            {value: 900, duration: 2000},
            {value: 0, duration: 2000},
            {easing: 'easeInOutExpo'},
        ],
        translateX:    
        [
            {value: -200, duration: 2000},
            {value: 0, duration: 2000},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '15turn',
        scale: 1,
        delay: 100,
        loop: true,
        
       
    }),
    anime({
        targets:'div.boxes.one', 
        translateX:    
        [
            {value: -400, duration: 1500},
            {value: 0, duration: 2000},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '5turn',
        scale: 1,
        delay:300,
        // skew: [10, 0],
        loop: true,
        
        
       
    }),
    anime({
        targets:'div.boxes.three',
        translateY:    
        [
            {value: -400, duration: 3000},
            {value: 0, duration: 2000},
            {easing: 'easeInOutExpo'},
        ],
        translateX:    
        [
            {value: 160, duration: 1000},
            {value: 0, duration: 2000},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '10turn',
        scale: 1,
        delay: 300,
        loop: true,
        
       
    }),
    anime({
        targets:'div.boxes.four',
        translateX:    
        [
            {value: 400, duration: 1800},
            {value: 60, duration: 1000},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '25turn',
        scale: 1,
        delay: 0,
        loop: true,
        
       
    });
    

}




function animation2() {
    anime({
        targets: 'div.boxes.five',   
        scale:0,   
        easing: 'easeInOutExpo',
        duration:2000,
        delay:4000,
        translateX: -50,  
        rotate: {
            value: 360,
            duration: 900,
            delay:0,
            easing: 'easeInOutSine', 
                         
        }          
    });
    
    anime({
        targets: 'div.boxes.six',   
        scale:0,   
        easing: 'easeInOutExpo',
        duration:2000,
        delay:4000,
        translateY: 50, 
        rotate: {
            value: 360,
            duration: 900,
            delay:1000,
            easing: 'easeInOutSine'
        }          
    });
    anime({
        targets: 'div.boxes.seven',   
        scale:0,   
        easing: 'easeInOutExpo',
        duration:2000,
        delay:4000,
        translateY: 100,
        translateX:100,
        rotate: {
            value: 360,
            duration: 900,
            delay:2000,
            easing: 'easeInOutSine'
        }          
    });
    anime({
        targets: 'div.boxes.eight',   
        scale:0,   
        easing: 'easeInOutExpo',
        duration:2000,
        delay:4000,
        translateY:-50,
        translateX:25,
        rotate: {
            value: 360,
            duration: 900,
            delay:3000,
            easing: 'easeInOutSine'
        }          
    });
}




function reset() {
    location.reload();
}





function reset2() {
    location.reload();
}



