


const box1 =  document.querySelector('.first_box');
const box2 =  document.querySelector('.second_box');
const box3 =  document.querySelector('.third_box');
const box4 =  document.querySelector('.forth_box');
const messageToUser = document.querySelector('.message-to-user');
const boxes = [box2,box3,box4];
const scoreScope = document.querySelector('.scores-scope');
const scores = document.querySelector('#score');


// const intervalID = setInterval(() => {
//     scores.textContent = parseInt(scores.textContent)-2;
//     messageToUser.textContent = `You Just loose ${2} scores! Hurry Up`;
//     messageToUser.style.display= 'block';
// }, 3000);
setInterval(motionOfBox(boxes),1000);

function motionOfBox(boxes){
 const width = document.body.clientWidt-100;
 const height = document.body.clientHeight-100;
 let x,y;
 
 for(box of boxes){
   
    x =  Math.floor(Math.random()*width);
    y = Math.floor(Math.random()*height);
    Velocity(box,'jello',{duration:500});
    Velocity(box,{left:x,top:y},{duration:200});

 }


}





function switchBoxesPosition(){

    // clearInterval(intervalID);
    const nextPos = Math.floor(Math.random()*boxes.length);
    const leftToRandomBox = getComputedStyle(box1).left;
    const leftToBoxOne = getComputedStyle(boxes[nextPos]).left;
    box1.style.left = leftToBoxOne;
    boxes[nextPos].style.left = leftToRandomBox;
    // location.reload();
    // scores.textContent = sessionStorage.getItem('score');
    
    
  
}
function scoreCalc(boxType){
    
    if(boxType.localeCompare('first_box')==0){
        scores.textContent = parseInt(scores.textContent)+5;
        sessionStorage.setItem('score',scores.textContent);
    }
    else{
        scores.textContent = parseInt(scores.textContent)-2;
        sessionStorage.setItem('score',scores.textContent);
    }
}

box1.addEventListener('click',(e)=>{  
    scoreScope.classList.add("animate__bounce");
    const className = e.target.classList[0];
    console.log(className);
    switchBoxesPosition(); 
    scoreCalc(className);
    
});
box2.addEventListener('click',(e)=>{
    const className = e.target.classList[0];
    switchBoxesPosition();
    scoreCalc(className);
});
box3.addEventListener('click',(e)=>{
    const className = e.target.classList[0];
    switchBoxesPosition();
    scoreCalc(className);
    
});
box4.addEventListener('click',(e)=>{
    const className = e.target.classList[0];
    switchBoxesPosition();
    scoreCalc(className);
    
});