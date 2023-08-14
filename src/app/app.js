// forms by default refresh the page so ill be able to see console.log for a sec before it goes away
// so we need to preventDefault

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  // select all class with class with shape in the shapes array
  const x = event.clientX * scaleFactor; // x position of mouse and getting it from event
  const y = event.clientY * scaleFactor;
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * 10}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  contrastToggle ? document.body.classList += " dark-theme" : document.body.classList.remove("dark-theme");
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  const input = document.querySelectorAll(".input");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_qgofg12",
      "template_qd2x6tk",
      event.target,
      "LJ_WiUwXTNdQQz2dg"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
      setTimeout(() => {success.classList.remove("modal__overlay--visible")}, 3000);
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on leohchoiapp@gmail.com"
      );
    });
}

function toggleModal(){
  if (isModalOpen) {
    isModalOpen = !isModalOpen;
    return document.body.classList.remove('modal--open');
  }
  isModalOpen = !isModalOpen;
  document.body.classList += ' modal--open';
}