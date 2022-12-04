import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import data from '../DATA.json'

// HAMBURGER 
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
}));

// MENAMPILKAN MELALUI DATA.JSON
function getRestaurants(data){
    let datas = '';

    data.restaurants.forEach((data) => {
        datas += `
        <article class="post-item">
          <img src="${data['pictureId']}" alt="${data['name']}" class="post-item__thumbnail" tabindex="0">
          <div class="post-item__content">
            <h3 class="post-item__title" tabindex="0">${data['name']}</h3>
            <div class="post-item__category" tabindex="0">
              <p class="post-item__location" tabindex="0">Location: ${data['city']}</p>
              <span class="post-item__rating" tabindex="0">Rating: ${data['rating']}⭐️</span>
            </div>
            <p class="post-item__description" tabindex="0">${data['description'].slice(0, 200)}...</p>
          </div>
        </article>
        `
    });

    document.querySelector('.content__posts').innerHTML = datas;
}

getRestaurants(data);