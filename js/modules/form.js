import {closeModal, openModal} from './modal';
import {postData} from '../services/service';
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
        openModal(modalSelector);

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
            closeModal(modalSelector);
        }, 2000);
    }
}
export default form;