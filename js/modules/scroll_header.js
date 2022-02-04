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
export default scrollHeader;