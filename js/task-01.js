const arrayOfCategories = document.querySelectorAll("#categories>li.item");
console.log(`Number of categories: ${arrayOfCategories.length}`);

const categoriesOfItem = document.querySelectorAll("#categories>li")
    .forEach (e => {
        console.log(`Category: ${e.firstElementChild.textContent}`);
        console.log(`Elements: ${e.lastElementChild.children.length}`);
    });