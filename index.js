
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        playSound(button.textContent);
        buttonAnima(button.textContent.trim().toUpperCase());
    });
});

document.addEventListener('keydown', (event) => {
    playSound(event.code);
    buttonAnima(event.code);
});

function playSound(key) {
    switch (key) {
        case 'w':
        case 'KeyW':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case 'a':
        case 'KeyA':
            let tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case 's':
        case 'KeyS':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case 'd':
        case 'KeyD':
            let tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case 'j':
        case 'KeyJ':
            let snare= new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case 'k':
        case 'KeyK':
            let crash= new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case 'l':
        case 'KeyL':
            let kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        default:
            
            break;
    }
}

function buttonAnima(key) {
    let activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
        activeButton.classList.add('button-clicked');
        setTimeout(() => {
            activeButton.classList.remove('button-clicked');
        }, 100); // Assuming the CSS animation duration is 100ms
    }
}