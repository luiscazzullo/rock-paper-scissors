let userPoints = document.getElementById('user_points').innerText;
let cpuPoints = document.getElementById('cpu-points').innerText;
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const initGameBtn = document.getElementById('init_game');
const userImg = document.getElementById('user');
const cpuImg = document.getElementById('cpu');

let menuOption = 'Espera...';
let userOption;
let cpuOption;

loadingImages();

initGameBtn.addEventListener('click', () => {
  menuOption = 'Inicio';
  console.log(userOption);
  cpuOption = randomNumber();
  displayCpuOption(cpuOption);
  game(userOption, cpuOption);
})

rockBtn.addEventListener('click', () => {
  userOption = 0;
  userImg.src = './images/rock.png';
})

paperBtn.addEventListener('click', () => {
  userOption = 1;
  userImg.src = './images/papel.png';
})

scissorBtn.addEventListener('click', () => {
  userOption = 2;
  userImg.src = './images/tijera.png';
})

switch(menuOption) {
  case 'Espera...':
    console.log('Esperando...');
    break;
  case 'Inicio':
    console.log('Iniciando el juego...');
    break;
}

function loadingImages() {
  rockBtn.style.backgroundImage = " url('./images/rock.png')";
  paperBtn.style.backgroundImage = " url('./images/papel.png')";
  scissorBtn.style.backgroundImage = " url('./images/tijera.png')";
}

function randomNumber() {
  return parseInt(Math.random() * 3);
}

function game(userOption, cpuOption) {
  let scene1;
  let scene2;
  let scene3;
  let tie;
  if(userOption === cpuOption) {
    tie = true
  } else if(userOption === 0 && cpuOption === 2) {
    scene1 = true;
  } else if(userOption === 1 && cpuOption === 0) {
    scene2 = true;
  } else if(userOption === 2 && cpuOption === 1) {
    scene3 = true;
  }

  if(scene1 || scene2 || scene3) {
    alert('El usuario ganó');
    userPoints++
    document.getElementById('user_points').innerText = userPoints;
  } else if(tie) {
    alert('EMPATE');
  } else {
    alert('CPU GANA!');
    cpuPoints++;
    document.getElementById('cpu-points').innerText = cpuPoints;
  }
}

function displayCpuOption(option) {
  if(option === 0) {
    cpuImg.src = './images/rock.png';
  } else if(option === 1) {
    cpuImg.src = './images/papel.png';
  } else {
    cpuImg.src = './images/tijera.png';
  }
}