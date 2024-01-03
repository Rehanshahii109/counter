let counter = 0;

function increment() {
  counter++;
  document.getElementById('display').innerText = counter;
}

function decrement() {
  counter--;
  document.getElementById('display').innerText = counter;
}

function reset() {
  counter = 0;
  document.getElementById('display').innerText = counter;
}



