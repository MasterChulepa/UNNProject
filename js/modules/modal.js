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
export default modal;
export { openModal };
export { closeModal };