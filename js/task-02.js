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
      .map (e => {
        const lastElement = document.createElement("li");
        lastElement.textContent = e;
        lastElement.classList.add("item");
        return lastElement;
      });
    
list.append(...itemsList);

console.log(list);



/* Wersja wcześniejsza dodawała poszczególne elementy, 
/* ale można też za jednym razem dodać wszystko

const list = document.querySelector("ul#ingredients");

const itemsList = ingredients
      .forEach (e => {
        const lastElement = document.createElement("li");
        lastElement.textContent = e;
        lastElement.classList.add("item");
        list.append(lastElement);
    });

console.log(list);

*/