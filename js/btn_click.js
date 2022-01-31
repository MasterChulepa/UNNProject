export default function changeBtnOnClick(btn, header) {
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
