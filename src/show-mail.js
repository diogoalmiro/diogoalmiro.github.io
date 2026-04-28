window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const mail = document.getElementById("mail");
        mail.href = atob('bWFpbHRvOmRpb2dvLmFsbWlybytjdkBnbWFpbC5jb20=');
        mail.textContent = atob('ZGlvZ28uYWxtaXJvQGdtYWlsLmNvbQ==');
        mail.id = null;
    }, 750);
})