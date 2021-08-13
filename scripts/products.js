// PROJECT CARDS
let projects = [
  {
    img: "./images/decoaccessory.jpg",
    imgAlt: "Deco Accessory",
    title: "Deco Accessory",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "R100",
    techStack: "Living Room",
  },
  {
    img: "./images/kettlewithhandle.jpg",
    imgAlt: "Kettle With Handle",
    title: "Kettle With Handle",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "R300",
    techStack: "Living Room",
  },
  {
    img: "./images/roseholdback.jpg",
    imgAlt: "Rose Holdback",
    title: "Rose Holdback",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "R450",
    techStack: "Living Room",
  },
  {
    img: "./images/wallclock.jpg",
    imgAlt: "Wall Clock",
    title: "Wall Clock",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "R250",
    techStack: "Living Room",
  },
];

function createCard(card) {
  let madeCard = `
  <div class="product" techStack="${card.techStack}">
    <img src="${card.img}" alt="${card.imgAlt}" />
    <h2>${card.title}</h2>
    <p>${card.description}</p>
    <h3>${card.price}</h3>
    </div>
  `;
  return madeCard;
}

function addingCards() {
  let projectsContainer = document.querySelector(".products-container");
  for (project of projects) {
    let card = createCard(project);
    projectsContainer.innerHTML += card;
  }
}

addingCards();

// Filtering the project cards
// function filterCards(category) {
//   let cards = document.getElementsByClassName("proj-cards");
//   if (category == "All") {
//     for (card of cards) {
//       card.style.display = "block";
//     }
//     return;
//   }
//   for (card of cards) {
//     console.log(card);
//     card.style.display = "none";
//   }

//   let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

//   for (card of selectedCards) {
//     card.style.display = "block";
//   }
// }

// Active class for Filter Buttons
// let activeButtons = document.querySelectorAll(".active-buttons");

// for (let i = 0; i < activeButtons.length; i++) {
//   activeButtons[i].addEventListener("click", change);
// }

// function change(e) {
//   for (let i = 0; i < activeButtons.length; i++) {
//     activeButtons[i].classList.remove("active");
//   }
//   e.currentTarget.classList.add("active");
// }
