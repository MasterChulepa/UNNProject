/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/btn_click.js":
/*!*********************************!*\
  !*** ./js/modules/btn_click.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function btn_click(){
    const btns = document.querySelectorAll('.btn');
    const header = document.querySelector('.header');
    btns.forEach(item => {
        item.addEventListener('click', () => {
            changeBtnOnClick(item, header);
        });
    });
    function changeBtnOnClick(btn, header) {
        if (btn.classList.contains('btn_dark')) {
            btn.classList.add('jello-horizontal', 'btn_dark_active');
        } else {
            if (!header.classList.contains('heder_active')) {
                btn.classList.add('jello-horizontal', 'btn_active');
            }
        }
        setTimeout(() => {
            btn.classList.remove('jello-horizontal', 'btn_active', 'btn_dark_active');
        }, 600);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btn_click);

/***/ }),

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator(){
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;
    if (localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else{
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
        }

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }
        if (sex == "female") {
            result.textContent = Math.round(((9.2 * weight) + (3.1 * height) - (4.3 * age) + 447.6) * ratio);
        } else {
            result.textContent = Math.round(((13.4 * weight) + (4.8 * height) - (5.7 * age) + 88.36) * ratio);
        }
    }
    function initLocalSettings(selector, activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        });
    }

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                calcTotal();
                e.target.classList.add(activeClass);
            });
        });
    }

    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);
        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)){
                input.style.border ='1px solid red';
            }else{
                input.style.border ='none';
            }
            switch (input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }
            calcTotal();
        });

    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');
    calcTotal();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/element_apper.js":
/*!*************************************!*\
  !*** ./js/modules/element_apper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function element_appear(){
    const  offerText = document.querySelector('.offer__text'),
    offerAdvantages = document.querySelector('.offer__advantages'),
    titleCal = document.querySelector('[data-title_cal]'),
    calc = document.querySelector('.calculating__field'),
    offerSlider = document.querySelector('.offer__slider'),
    offerBtn = document.querySelector('[data-offer_btn]'),
    arrow = document.querySelector('.arrow'),
    menuTitle = document.querySelector('[data-meny_title]'),
    menuItem = document.querySelectorAll('.menu__item'),
    titlePromotion = document.querySelectorAll('.promotion .title'),
    timer = document.querySelector('.timer'),
    promotionDescription = document.querySelector('.promotion__descr');

function showOffer() {
if (document.documentElement.scrollTop > 300) {
    offerBtn.classList.add('fade-in-left');
    offerSlider.classList.add('fade-in-right');
    setTimeout(() => {
        offerText.classList.add('fade-in-right');
        offerAdvantages.classList.add('fade-in-left');
    }, 400);
    setTimeout(() => {
        arrow.classList.add('fade-in');
    }, 5000);
} else {
    offerText.classList.remove('fade-in-right');
    offerAdvantages.classList.remove('fade-in-left');
    offerSlider.classList.remove('fade-in-right');
    offerBtn.classList.remove('fade-in-left');
    arrow.classList.remove('fade-in');
}
if (document.documentElement.scrollTop > 1300) {
    setTimeout(() => {
        calc.classList.add('tracking-in-expand-fwd-bottom');
    }, 400);
    titleCal.classList.add('tracking-in-expand-fwd-bottom');
} else {
    calc.classList.remove('tracking-in-expand-fwd-bottom');
    titleCal.classList.remove('tracking-in-expand-fwd-bottom');
}
if (document.documentElement.scrollTop > 2000) {
    menuTitle.classList.add('tracking-in-expand-fwd-bottom');
    setTimeout(() => {
        menuItem.forEach(item => {
            item.classList.add('tracking-in-expand-fwd-bottom');
        });
    }, 300);
} else {
    menuTitle.classList.remove('tracking-in-expand-fwd-bottom');
    menuItem.forEach(item => {
        item.classList.remove('tracking-in-expand-fwd-bottom');
    });
}
if (document.documentElement.scrollTop > 2800) {
            titlePromotion.forEach(item => {
                item.classList.add('tracking-in-expand-fwd-bottom');
            });
            setTimeout(() => {
                timer.classList.add('tracking-in-expand-fwd-bottom');
                promotionDescription.classList.add('tracking-in-expand-fwd-bottom');
            }, 300);
        } else {
            titlePromotion.forEach(item => {
                item.classList.remove('tracking-in-expand-fwd-bottom');
            });
            promotionDescription.classList.remove('tracking-in-expand-fwd-bottom');
            timer.classList.remove('tracking-in-expand-fwd-bottom');
        }
    }
    
    window.addEventListener('scroll', showOffer);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element_appear);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service */ "./js/services/service.js");


function form(formSelector, modalSelector) {
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'Загрузка',
        success: 'Успех',
        failure: 'Что-то пошло не так'
    };
    forms.forEach(item => {
        bindPostdata(item);
    });

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

            (0,_services_service__WEBPACK_IMPORTED_MODULE_1__.postData)("http://127.0.0.1:5000/user", JSON.stringify(obj))
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
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modalSelector);

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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modalSelector);
        }, 2000);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/menu_service.js":
/*!************************************!*\
  !*** ./js/modules/menu_service.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service */ "./js/services/service.js");

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
    (0,_services_service__WEBPACK_IMPORTED_MODULE_0__.getData)("http://127.0.0.1:5000/menu").then(
        result => {
            result.forEach(data => render(data));
        },
        error => {
            // вторая функция - запустится при вызове reject
            alert("Rejected: " + error); // error - аргумент reject
        });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu_service);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
}
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
}

function modal(modalSelector, btnSelector) {
    const modal = document.querySelector(modalSelector);
    const btns = document.querySelectorAll(btnSelector);
    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalSelector);
        });
    });
    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/scroll_header.js":
/*!*************************************!*\
  !*** ./js/modules/scroll_header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function scrollHeader(){
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollHeader);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, prevArrow, nextArrow, currentCounter, totlalCounter, wrapper, field}) {
    const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slider = document.querySelector(container),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totlalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;
    let slideIndex = 1;

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicator');

    slider.append(indicators);
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(item => item.style.width = width);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
        total.textContent = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        indicators.append(dot);
        if (i === 0) {
            dot.style.opacity = '1';
        }
        dots.push(dot);
    }

    const cleanText = str => +str.replace(/\D/g, '')
    next.addEventListener('click', () => {
        if (offset == cleanText(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += cleanText(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = cleanText(width) * (slides.length - 1);
        } else {
            offset -= cleanText(width);
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    });
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = '1';
            if (slideIndex < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        });
    });

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    class TabAction {
        constructor(tabs, tabsContent, tabsParent) {
            this.tabs = tabs;
            this.tabsContent = tabsContent;
            this.tabsParent = tabsParent;
        }
        hideTubs() {
            this.tabs.forEach(item => {
                item.style.display = 'none';
            });

            this.tabsContent.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
        showTubs(i = 0) {
            this.tabs[i].style.display = 'block';
            this.tabsContent[i].classList.add(activeClass);
        }

        addTabEvent() {
            this.tabsParent.addEventListener('click', (e) => {
                const target = e.target;
                if (target && target.classList.contains(tabsSelector.slice(1))) {
                    this.tabsContent.forEach((item, i) => {
                        if (target == item) {
                            this.hideTubs();
                            this.showTubs(i);
                        }
                    });
                }
            });
        }

    }
    const tabsAction = new TabAction(tabs, tabsContent, tabsParent);


    tabsAction.hideTubs();
    tabsAction.showTubs();
    tabsAction.addTabEvent();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
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
    setClock(deadline, id);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/service.js":
/*!********************************!*\
  !*** ./js/services/service.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Contant-type': 'application/json'
        },
        body: data
    });
    return await res.json();
}
async function getData(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();                               //дожидаемся окончания перевода данных из промиса в json
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_btn_click__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/btn_click */ "./js/modules/btn_click.js");
/* harmony import */ var _modules_element_apper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/element_apper */ "./js/modules/element_apper.js");
/* harmony import */ var _modules_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu_service */ "./js/modules/menu_service.js");
/* harmony import */ var _modules_scroll_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll_header */ "./js/modules/scroll_header.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");











window.addEventListener("DOMContentLoaded", () => {
    (0,_modules_element_apper__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_menu_service__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_modules_scroll_header__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabcontent', '.tabheader__item', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2022-03-02');
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        slide: '.offer__slide',
        currentCounter: '#current',
        totlalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])('form', '.modal');
    (0,_modules_btn_click__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_9__["default"])('.modal', '.btn');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map