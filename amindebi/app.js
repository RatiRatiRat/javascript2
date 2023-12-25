var container = document.querySelector('.main');

if (container.scrollHeight > container.clientHeight) {
    console.log('Scrollbar is present.');
} else {
    console.log('No scrollbar.');
}
