// © github.com/zyfrefrenzy

// Preloader
let messagePhase = 1;
const preloader = document.querySelector('.preloader');
const button_next = document.querySelector('.next')
const message = document.querySelector('.message')

if (button_next) {
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
}

// No button hover

const button_area = document.querySelector('.buttons-area');
const button_no = document.querySelector('.answer-no');
const button_yes = document.querySelector('.answer-yes');
const image = document.querySelector('.content-image');
const question = document.querySelector('.question');
let imagePhase = 1;

function changeImage() {
    if (image && question) {
      image.classList.add('fade');
      if (imagePhase == 1) {
          question.textContent = "Please no, don't say no!";
      }
      else if (imagePhase == 2) {
          question.textContent = "Don't break my heart...";
      }
      else if (imagePhase == 3) {
          question.textContent = "You're my only hope...";
      }
      else if (imagePhase == 4) {
          question.textContent = "Please, I'm begging you...";
      }
      else if (imagePhase == 5) {
          question.textContent = "You're all I want...";
      }
      else if (imagePhase == 6) {
          question.textContent = "Please, don't leave me hanging...";
      }
      setTimeout(() => {
          image.src = 'assets/images/content-pics/img-2.jpg';
          image.classList.remove('fade');
      }, 180); 
    }
}

function backtoImage() {
    if (image && question) {
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
              question.textContent = "I'll do anything, just say yes!";
          }
          image.classList.remove('fade');
      }, 180); 
    }
}

// Next Phase
let noClicks = 0;

const noImages = [
  "assets/images/content-pics/img-2.jpg",
  "assets/images/content-pics/img-3.jpg",
  "assets/images/content-pics/img-4.jpg",
  "assets/images/content-pics/img-5.jpg",
  "assets/images/content-pics/img-6.jpg",
  "assets/images/content-pics/img-7.jpg"
];

const noTexts = [
  "Hey... don't say no 🥺",
  "That hurts 💔",
  "Pleaseee 😢",
  "You're breaking my heart 😭",
  "Last chance 😘",
  "Okay you're mean 😤"
];

if (button_no) {
  button_no.addEventListener("click", () => {
    noClicks++;

    // FIRST CLICK → Change image + text
    if (noClicks === 1) {
      if (image) {
        image.classList.add("fade");

        setTimeout(() => {
          image.src = noImages[0];
          if (question) question.textContent = noTexts[0];
          image.classList.remove("fade");
        }, 150);
      }

      return;
    }

    // SECOND CLICK AND ABOVE → Run away + vibrate
    runAwayButton();

    // Phone vibration (if supported)
    if (navigator.vibrate) {
      navigator.vibrate([120, 60, 120]);
    }

    // Change image + text progressively
    let i = Math.min(noClicks - 1, noImages.length - 1);

    if (image) {
      image.classList.add("fade");
      setTimeout(() => {
        image.src = noImages[i];
        if (question) question.textContent = noTexts[i];
        image.classList.remove("fade");
      }, 150);
    }
  });
}

//make button run away

function runAwayButton() {
  if (button_area && button_no) {
    const area = button_area.getBoundingClientRect();

    const maxX = area.width - button_no.offsetWidth;
    const maxY = area.height - button_no.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button_no.style.position = "absolute";
    button_no.style.left = x + "px";
    button_no.style.top = y + "px";
  }
}


// She said yes

if (button_yes) {
  button_yes.addEventListener('click', () =>{
      if (image && button_area && question) {
        image.classList.add('fade');
        button_area.innerHTML = '';
        button_area.textContent = "Let's meet on saturday babe, See you! <3";
        question.textContent = "YAY!"
        setTimeout(() => {
            image.src = 'assets/images/content-pics/img-8.jpg';
            image.classList.remove('fade');
        }, 180 )
      }
  });
}
