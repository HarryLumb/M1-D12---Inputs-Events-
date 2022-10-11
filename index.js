/* EXERCISE 1
       Write a function for changing the title of the document in something else.

      */
const title = document.querySelector("h1");
const changeTitle = function (newTitle) {
  title.innerHTML = "This is a new title.";
};
changeTitle();
/* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
     */

const addClassToTitle = function () {
  title.classList.add("myHeading");
};
addClassToTitle();

/* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
     */

const changePcontent = function () {
  children = document.querySelectorAll(".ptag");
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = "this text has changed";
  }
};
// changePcontent();
/* EXERCISE 4
      Write a function for changing the href property of every link to https://www.google.com
     */

const changeUrls = function () {
  document.getElementById("epicode").href = "https://www.google.com";
};
// changeUrls();

/* EXERCISE 5
      Write a function for adding a new list item in the second unordered list.
     */

const addToTheSecond = function (content) {
  const ul = document.getElementById("secondList");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("4th"));
  ul.appendChild(li);
};

// addToTheSecond();

/* EXERCISE 6
      Write a function for adding a second paragraph to the first div.
     */

const addParagraph = function (content) {
  const firstDiv = document.getElementById("first-div");

  const p = document.createElement("p");
  p.innerText = "Second paragraph added to the first div";

  firstDiv.appendChild(p);
};

// addParagraph();

/* EXERCISE 7
      Write a function for making the first unordered list disappear.
     */

const firstUlDisappear = function () {
  const firstUl = document.getElementById("firstList");
  firstUl.classList.toggle("hidden");
  //
};
//firstUlDisappear()

/* EXERCISE 8
      Write a function for making the background of every unordered list green.
     */

const paintItGreen = function () {
  const allUls = document.querySelectorAll("ul");
  for (let i = 0; i < allUls.length; i++) {
    allUls[i].style.backgroundColor = "green";
  }
};

// paintItGreen()

/* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
     */

const makeItClickable = function () {
  const myColors = ["red", "purple", "black", "blue", "orange", "pink"];
  let cnt = 0;

  document.querySelector("h1").addEventListener("click", function () {
    if (cnt >= myColors.length) cnt = 0; // reset
    this.style.color = myColors[cnt];
    cnt++;
  });
};

makeItClickable();

/* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
     */

const changeFooterText = function () {
  const footer = document.getElementById("footer");
  footer.addEventListener("click", function () {
    footer.innerHTML = "You have changed the footer bruv";
  });
};

changeFooterText();

/* EXERCISE 11
      Attach an event listener to the input field in the page that changes the text of the page's subtitle
     */

const inputField = document.getElementById("input-field");
const subby = document.getElementById("subtitle");

document.getElementById("input-field").addEventListener("input", (e) => {
  subby.innerHTML = e.target.value;
});

/* EXERCISE 12
      set welcome alert message when page is reloaded 
     */
function pageAlert() {
  window.onload = function () {
    alert("This page has succesfully loaded ");
    //
  };
}
// pageAlert();

/* EXERCISE 13
      Use HTML5 tags to properly provide semantic meaning to the different portions of the page.
     */

//   done

/* ### EXTRA ###  EXERCISE 14
      Create an input of type "color" and use it to change the color of the subtitle
     */

const inputcolor = document.getElementById("input-color");
const body = document.body;

inputcolor.addEventListener("input", (e) => {
  body.style.backgroundColor = e.target.value;
});
