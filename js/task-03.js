const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const newGallery = document.querySelector("ul.gallery");

const newGalleryImages = images
  .forEach(e => {
    newGallery.insertAdjacentHTML("afterbegin", `
    <li class="picture">
      <img src="${e.url}" alt="${e.alt}" width="300"/>
    </li>`);
    });

console.log(newGalleryImages);

newGallery.style.listStyle = "none";
newGallery.style.padding = "0px";
newGallery.style.gap = "20px";
newGallery.style.display = "flex";
newGallery.style.flexDirection = "column-reverse";
newGallery.style.alignItems = "baseline";
newGallery.style.justifyContent = "center";

const newGalleryLi = document.querySelectorAll("ul.gallery>li");
const newGalleryPicture = document.querySelectorAll("ul.gallery>li.picture>img");

newGalleryPicture.forEach(e => {
  e.setAttribute("width", "300px");
  e.setAttribute("alt", `${e.getAttribute("alt")}, Zdjęcie nowej galerii`);
  e.classList.add("newGalleryPicture");
  e.style.borderRadius = "30px";
  
});




const pictureEfektWow = newGalleryPicture.forEach(e => {
  e.style.transition = "1000ms linear";
  e.style.cursor = "pointer";
  e.style.transform = "scale(1.1)";
  
});

const pictureEfektNone = newGalleryPicture.forEach(e => {
  e.style.transition = "1000ms linear";
  e.style.transform = "scale(1.0)";
});

newGalleryPicture.addEventListener("mouseenter", pictureEfektWow);
newGalleryPicture.addEventListener("mauseleave", pictureEfektNone);




