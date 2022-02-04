import tabs from './modules/tabs';
import timer from './modules/timer';
import calculator from './modules/calculator';
import slider from './modules/slider';
import form from './modules/form';
import btn_click from './modules/btn_click';
import element_appear from './modules/element_apper';
import menu_service from './modules/menu_service';
import scroll_header from './modules/scroll_header';
import modal from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {
    element_appear();
    menu_service();
    scroll_header();
    tabs('.tabcontent', '.tabheader__item', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-03-02');
    calculator();
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        slide: '.offer__slide',
        currentCounter: '#current',
        totlalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    form('form', '.modal');
    btn_click();
    modal('.modal', '.btn');
});