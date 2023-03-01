const check = document.querySelector('.checkbox');

check.addEventListener('click', function () {
    if (send.classList.contains('disable')) {
        send
            .classList
            .remove('disable');
    } else {
        send
            .classList
            .toggle('disable');
    }
});

const send = document.getElementById('send');

send.addEventListener('click', function (event) {
    event.preventDefault();
});