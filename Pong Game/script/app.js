document.addEventListener('DOMContentLoaded', () =>{
    const squares = document.querySelectorAll('.grid div');
    const score = document.querySelector('#score');
    const width = 15;
    const height = 10;
    let padIndex1 = 0;
    let padIndex2 = 0;
    let ballIndex = 112;
    let direction_h = -1;
    let direction_v = -1;
    let scoreLeft = 0;
    let scoreRight = 0;
    let gameTimer;

    const padLeft = [46, 61, 76];
    const padRight = [73, 88, 103];

    squares[ballIndex].classList.add('ball');

    padLeft.forEach(pad => squares[padIndex1 + pad].classList.add('box'));
    padRight.forEach(pad => squares[padIndex2 + pad].classList.add('box'));

    function moveLeftPad(e){
        const leftEdge  = padLeft[0] + padIndex1;
        const rightEdge = padLeft[2] + padIndex1;

        switch(e.keyCode){
            case 87:
                if (leftEdge >= width) {
                    padLeft.forEach(pad => squares[padIndex1 + pad].classList.remove('box'));
                    padIndex1 -= width;
                    padLeft.forEach(pad => squares[padIndex1 + pad].classList.add('box'));
                } 
                break;
            case 83:
                if (rightEdge <= width * height - width){
                    padLeft.forEach(pad => squares[padIndex1 + pad].classList.remove('box'));
                    padIndex1 += width;
                    padLeft.forEach(pad => squares[padIndex1 + pad].classList.add('box'));    
                }
                break;
        }
    }
    document.addEventListener('keydown', moveLeftPad);
    
    function moveRightPad(e){
        const leftEdge  = padRight[0] + padIndex2;
        const rightEdge = padRight[2] + padIndex2;
    
        switch(e.keyCode){
            case 38:
                if (leftEdge >= width) {
                    padRight.forEach(pad => squares[padIndex2 + pad].classList.remove('box'));
                    padIndex2 -= width;
                    padRight.forEach(pad => squares[padIndex2 + pad].classList.add('box'));
                } 
                break;
            case 40: 
                if (rightEdge <= width * height - width){
                    padRight.forEach(pad => squares[padIndex2 + pad].classList.remove('box'));
                    padIndex2 += width;
                    padRight.forEach(pad => squares[padIndex2 + pad].classList.add('box'));    
                }
                break;
        }
    }
    document.addEventListener('keydown', moveRightPad);
    
    
    function moveBall(){
        squares[ballIndex].classList.remove('ball');
        if (squares[ballIndex + direction_h].classList.contains('box', 'ball')){
            direction_h *= -1;
        }
    
        if (ballIndex + width >= width * height){
            direction_v *= -1;
        }

        if (ballIndex - width <= 0){
            direction_v *= -1;
        }

        ballIndex += direction_h + (direction_v * width);

        if (direction_h === 1){
            squares[ballIndex].classList.add('ball');
        }
        else if (direction_h === -1){
            squares[ballIndex].classList.add('ball');
        }

        // end game conditions
        if (ballIndex % width === 0 ){
            scoreRight += 1;
            score.innerHTML = scoreLeft + ':' + scoreRight;
            clearInterval(gameTimer);
        }

        if ((ballIndex+1) % width === 0){
            scoreLeft += 1;
            score.innerHTML = scoreLeft + ':' + scoreRight;
            clearInterval(gameTimer);
        }
    }
    gameTimer = setInterval(moveBall, 500);
})