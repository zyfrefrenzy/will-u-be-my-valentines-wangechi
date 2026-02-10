// © github.com/papichans

// Preloader
let messagePhase = 1;
const preloader = document.querySelector('.preloader');
const button_next = document.querySelector('.next')
const message = document.querySelector('.message')

button_next.addEventListener('click', () => {
    messagePhase++;
    if (messagePhase == 2) {
        message.classList.add('fade');
        setTimeout(() => {
            message.textContent = "I have something to ask you..."
            message.classList.remove('fade');
        }, 200); 
    }
    if (messagePhase == 3 ) {
        setTimeout(() => {
            preloader.style.opacity = 0;
        }, 100)
        setTimeout(() => {
            preloader.style.display = 'none';
        },  600)
    }
})

// No button hover

const button_area = document.querySelector('.buttons-area');
const button_no = document.querySelector('.answer-no');
const button_yes = document.querySelector('.answer-yes');
const image = document.querySelector('.content-image');
const question = document.querySelector('.question');
let imagePhase = 1;

function changeImage() {
    image.classList.add('fade');
    if (imagePhase == 1) {
        question.textContent = "Please no, don't say no!";
    }
    else if (imagePhase == 2) {
        question.textContent = "Don't break my heart...";
    }
    else if (imagePhase == 3) {
        question.textContent = "You’re my only hope...";
    }
    else if (imagePhase == 4) {
        question.textContent = "Please, I’m begging you...";
    }
    else if (imagePhase == 5) {
        question.textContent = "You’re all I want...";
    }
    else if (imagePhase == 6) {
        question.textContent = "Please, don’t leave me hanging...";
    }
    setTimeout(() => {
        image.src = 'assets/images/content-pics/img-2.jpg';
        image.classList.remove('fade');
    }, 180); 
}

function backtoImage() {
    image.classList.add('fade');
    setTimeout(() => {
        if (imagePhase == 1) {
            image.src = 'assets/images/content-pics/img-1.jpg';
            question.textContent = "Will you be my valentine?";
        }
        else if (imagePhase == 2) {
            image.src = 'assets/images/content-pics/img-3.jpg';
            question.textContent = "I really like you, please?";
        }
        else if (imagePhase == 3) {
            image.src = 'assets/images/content-pics/img-4.jpg';
            question.textContent = "I can't imagine a day without you!";
        }
        else if (imagePhase == 4) {
            image.src = 'assets/images/content-pics/img-5.jpg';
            question.textContent = "Please, I just need this from you.";
        }
        else if (imagePhase == 5) {
            image.src = 'assets/images/content-pics/img-6.jpg';
            question.textContent = "I promise I'll be the best Valentine ever!";
        }
        else if (imagePhase == 6) {
            image.src = 'assets/images/content-pics/img-7.jpg';
            question.textContent = "I’ll do anything, just say yes!";
        }
        image.classList.remove('fade');
    }, 180); 
}

button_no.addEventListener('click', () => {
    changeImage();
});

button_no.addEventListener('click', () => {
    backtoImage();
});

// Next Phase

button_no.addEventListener('click', () => {
    imagePhase++;
    if (imagePhase == 6) {
        button_no.disabled = true;
        button_no.style.opacity = 0.5;
    }
});

// She said yes

button_yes.addEventListener('click', () =>{
    image.classList.add('fade');
    button_area.innerHTML = '';
    button_area.textContent = "Let's meet on saturday babe, See you! <3";
    question.textContent = "YAY!"
    setTimeout(() => {
        image.src = 'assets/images/content-pics/img-8.jpg';
        image.classList.remove('fade');
    }, 180 )
});
