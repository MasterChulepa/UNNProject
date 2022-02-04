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
export default btn_click;