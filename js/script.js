import MenuService from './menu_service.js';
import showOffer from './element_appear.js';
import TabsAction from './tabs.js';
import changeBtnOnClick from './btn_click.js';

window.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll('.tabcontent'),
        tabsSelectors = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');
    const menuService = new MenuService();
    const tabsAction = new TabsAction(tabs, tabsSelectors, tabsParent);
    tabsAction.hideTubs()
    tabsAction.showTubs();
    tabsAction.addTabEvent();

    // Scroll header
    const header = document.querySelector('.header');
    function addHeaderBackground() {
        header.classList.add('heder_active');
    }
    function removeHeaderBackground() {
        header.classList.remove('heder_active');
    }
    function floatHeader() {
        if (document.documentElement.scrollTop > 90) {
            addHeaderBackground();
        } else {
            removeHeaderBackground();
        }

    }
    window.addEventListener('scroll', floatHeader);

    //btn click
    const btns = document.querySelectorAll('.btn');
    btns.forEach(item => {
        item.addEventListener('click', () => {
            changeBtnOnClick(item, header);
        });
    });


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


    menuService.getMenu("http://127.0.0.1:5000/menu").then(
        result => {
            result.forEach(data => render(data));
        },
        error => {
            // вторая функция - запустится при вызове reject
            alert("Rejected: " + error); // error - аргумент reject
        });

    //Timer
    const deadline = '2022-01-28';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor(t / 1000 % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    let timer = null;
    function setClock(endtime, element) {
        timer = document.querySelector(element);
        const days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTime, 1000);
        updateTime();
        function updateTime() {
            const time = getTimeRemaining(endtime);
            days.innerHTML = setZero(time.days);
            hours.innerHTML = setZero(time.hours);
            minutes.innerHTML = setZero(time.minutes);
            seconds.innerHTML = setZero(time.seconds);

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock(deadline, '.timer');

    window.addEventListener('scroll', showOffer);

    //Modal

    const modal = document.querySelector('.modal');

    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });
    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    function openModal() {
        modal.classList.add('show');
    }
    function closeModal() {
        modal.classList.remove('show');
    }
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });


    // Form
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'Загрузка',
        success: 'Успех',
        failure: 'Что-то пошло не так'
    };
    forms.forEach(item => {
        bindPostdata(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Contant-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    function bindPostdata(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('submit');
            const statusMessage = document.createElement('div');
            const formData = new FormData(form);

            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            //loading
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
            // 

            postData("http://127.0.0.1:5000/user", JSON.stringify(obj))
                .then(data => {
                    console.log(data);
                    showCallbackModal(message.success);
                    form.reset();
                    statusMessage.remove();
                }).catch(() => {
                    showCallbackModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }

    function showCallbackModal(message) {
        const modalDialog = document.querySelector('.modal__dialog');
        modalDialog.classList.add('hide');
        openModal();

        const thxModal = document.createElement('div');
        thxModal.classList.add('modal__dialog');
        thxModal.innerHTML = `
        <div class = "modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>`;
        modal.append(thxModal);
        setTimeout(() => {
            thxModal.remove();
            modalDialog.classList.add('show');
            modalDialog.classList.remove('hide');
            closeModal();
        }, 2000);
    }

    //slider
    const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'), 
          total = document.querySelector('#total');
    let slideIndex = 1;
    showSlides(slideIndex);

    if (slides.length < 10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        
        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
    }
    function changeSlide(n) {
        showSlides(slideIndex += n);
    }
    prev.addEventListener('click', () => {
        changeSlide(-1);
    });
    next.addEventListener('click', () => {
        changeSlide(1);
    });
});