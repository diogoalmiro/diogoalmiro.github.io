function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if( location.hash === `#${modalId}` ) {
        modal.style.display = 'block';
        document.body.classList.add('dialog-open');
    } else {
        modal.style.display = 'none';
        document.body.classList.remove('dialog-open');
    }
}

window.addEventListener('hashchange', (e) => {
    toggleModal('extended-cv-modal');
});

window.onload = () => {
    toggleModal('extended-cv-modal');
};
