import {getData} from '../services/service';
function menu_service() {

    function render(data) {
        const parent = document.querySelector('.menu__field .container');
        const element = document.createElement('div');
        element.classList.add("menu__item", "tracking-in-expand-fwd-bottom");
        element.innerHTML =
        `<img src= ${data.src} alt=${data.alt}>
        <h3 class="menu__item-subtitle">${data.title}</h3>
        <div class="menu__item-descr">${data.description}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${data.price}</span> руб/день</div>
        </div>`;
        parent.append(element);
    }
    getData("http://127.0.0.1:5000/menu").then(
        result => {
            result.forEach(data => render(data));
        },
        error => {
            // вторая функция - запустится при вызове reject
            alert("Rejected: " + error); // error - аргумент reject
        });
}
export default menu_service;