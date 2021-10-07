window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tabcontent'),
        tabsSelectors = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTubs() {
        tabs.forEach(item => {
            item.style.display = 'none';
        });

        tabsSelectors.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTubs(i = 0) {
        tabs[i].style.display = 'block';
        tabsSelectors[i].classList.add('tabheader__item_active');
    }

    hideTubs();
    showTubs();
    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabsSelectors.forEach((item, i) => {
                if (target == item) {
                    hideTubs();
                    showTubs(i);
                }
            });
        }
    });


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
    function changeBtnOnClick(btn) {
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
    btns.forEach(item => {
        item.addEventListener('click', () => {
            changeBtnOnClick(item);
        });
    });

    //Шаблонизируем карточки
    class MenuCard {
        constructor(src, alt, title, description, price, parent, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer = 71;
            this.transferPrice();
            this.parent = document.querySelector(parent);
            this.classes = classes;
        }
        getElement() {
            return this.parent;
        }
        transferPrice() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            if (!this.classes.length) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML =
                `<img src= ${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>`;
            this.parent.append(element);
        }
    }
    const menu = new MenuCard(
        "img/menu/fitness_vec.svg",
        "vegy",
        'Меню “Фитнес”',
        'Меню “Фитнес” - это верный путь к здоровой и активной жизни: в качестве ингредиентов только самые свежие овощи и фрукты. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.',
        9,
        '.menu__field .container'
    );
    menu.render();

    new MenuCard(
        "img/menu/premium_vec.svg",
        "elite",
        'Меню “Премиум”',
        'В Меню “Премиум” мы используем не только роскошный дизайн упаковки, но и самые качественные ингредиенты. Морепродукты во всевозможных сочетаниях с гарнирами окунут Вас в мир высокой кухни!',
        12,
        '.menu__field .container'
    ).render();
    new MenuCard(
        "img/menu/post_vec.svg",
        "post",
        'Меню “Постное”',
        'Главный смысл поста – это не ограничение в еде, а очищение души. Однако здоровье души и телесное здоровье тесно связаны между собой. Наше “Постное” меню поможет хрестианину нести свой крест.',
        10,
        '.menu__field .container'
    ).render();

    //Timer
    const deadline = '2021-10-14';

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
    //element appear
    const offerText = document.querySelector('.offer__text'),
        offerAdvantages = document.querySelector('.offer__advantages'),
        titleCal = document.querySelector('[data-title_cal]'),
        calc = document.querySelector('.calculating__field'),
        offerSlider = document.querySelector('.offer__slider'),
        offerBtn = document.querySelector('[data-offer_btn]'),
        arrow = document.querySelector('.arrow'),
        menuTitle = document.querySelector('[data-meny_title]'),
        menuItem = document.querySelectorAll('.menu__item'),
        titlePromotion = document.querySelectorAll('.promotion .title'),
        promotionDescription = document.querySelector('.promotion__descr');


    // в разработке
    // function flatten(array) {
    //     let  flattend = [];
    //     (function flat(array) {
    //         array.forEach(function (el) {
    //             if (el.length > 1){ flat(el);}
    //             else {flattend.push(el);}
    //         });
    //     })(array);
    //     return flattend;
    // }
    // function apperensFromBottom(scroll, sec, setTimeoutStart, ...elements) {
    //     let timeStart = null;
    //     const elementsList = flatten(elements);
    //     if (document.documentElement.scrollTop > scroll) {
    //         elementsList.forEach((item, i) => {
    //             if (i < setTimeoutStart) {
    //                 item.classList.add('tracking-in-expand-fwd-bottom');
    //             } else {
    //                 timeStart = setTimeout(() => {
    //                     item.classList.add('tracking-in-expand-fwd-bottom');
    //                 }, sec);
    //             }
    //         });
    //     } else {
    //         elementsList.forEach(item => {
    //             item.classList.remove('tracking-in-expand-fwd-bottom');
    //         });
    //         console.log(timeStart);
    //         clearTimeout(timeStart);
    //     }
    // }
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

    //Modal

    const btnCloseModal = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });
    btnCloseModal.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
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
});