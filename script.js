/* === Part 2: JavaScript Functions === */

// Global variable (accessible by all functions)
let clickCount = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b;
}

// Function demonstrating local scope
function increaseClickCount() {
  let localMessage = "Button clicked!";
  clickCount++; // modifies global variable
  console.log(localMessage + " Total clicks: " + clickCount);
}

// Reusable function with return value
function doubleValue(num) {
  return num * 2;
}

/* === Part 3: Combining CSS + JS === */

// Get elements from DOM
const button = document.getElementById("magicBtn");
const box = document.getElementById("box");
const popup = document.getElementById("popup");

// Event listener: Button click triggers animations
button.addEventListener("click", () => {
  increaseClickCount(); // demonstrate scope + global usage
  box.classList.toggle("animate"); // add/remove bounce animation class

  // Show function reuse with return values
  console.log("Double clicks so far: " + doubleValue(clickCount));

  // Every 3rd click, open the popup
  if (clickCount % 3 === 0) {
    openPopup();
  }
});

// Function to open popup (removes hidden class)
function openPopup() {
  popup.classList.remove("hidden");
}

// Function to close popup (adds hidden class)
function closePopup() {
  popup.classList.add("hidden");
}
