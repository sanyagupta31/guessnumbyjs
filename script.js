document.addEventListener("DOMContentLoaded",function(){
    let secretnum=Math.floor(Math.random()*10)+1;
    let attempt=3;
    while(attempt>0){
        let guess=parseInt(prompt("guess a number between 1 and 10:"));
        if (guess=secretnum) {
            alert("congratulations! you guessed it right.");
            break;
    }
    else {
        attempt--;
        if(attempt>0){
            alert(` wrong guess! try again.you have ${attempt} attempts left.`);

        }
        else{
            alert(`sorry, you have no more attempts. the correct number was ${secretnum}`);
        }
    }
}
});