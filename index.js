

// anime({
//     targets: 'div.boxes.two',
//     translateY: 250,
//     rotate: '10turn',
//     backgroundColor: '#FFF',
//     duration: 800
//   });


const myStart = document.querySelector('#start');
myStart.addEventListener('click', spin);
const myReset = document.querySelector('#reset');
myReset.addEventListener('click', reset);



function spin() {
    anime({
        targets:'div.boxes.two',
        translateY:    
        [
            {value: 300, duration: 2000},
            {value: 0, duration: 2000},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '15turn',
        scale: 1,
        
       
    }),
    anime({
        targets:'div.boxes.one', 
        translateY:    
        [
            {value: 400, duration: 1500},
            {value: 0, duration: 1500},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '5turn',
        scale: 1,
        
       
    }),
    anime({
        targets:'div.boxes.three',
        translateY:    
        [
            {value: 400, duration: 1000},
            {value: 0, duration: 1000},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '10turn',
        scale: 1,
        
       
    }),
    anime({
        targets:'div.boxes.four',
        translateX:    
        [
            {value: 400, duration: 1300},
            {value: 0, duration: 1000},
            {easing: 'easeInOutExpo'},
        ],
        rotate: '25turn',
        scale: 1,
        
       
    });
}


function reset() {
    location.reload();
}


