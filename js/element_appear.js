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

export default function showOffer() {
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