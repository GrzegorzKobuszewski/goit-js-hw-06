const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const itemsList = ingredients
      .forEach (e => {
        const lastElement = document.createElement("li");
        lastElement.textContent = e;
        lastElement.classList.add("item");
        list.append(lastElement);
    });

console.log(list);