/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let ary = time.split(":")
  debugger
  if (parseInt(ary[0]) < 12) {
    return "Good Morning"
  }
  else if (12 <= parseInt(ary[0]) && parseInt(ary[0]) <= 16) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(arg) {
  document.querySelector("#greeting").innerText = arg
}