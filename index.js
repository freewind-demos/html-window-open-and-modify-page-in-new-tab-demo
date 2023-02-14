const button = document.getElementById('button');

button.addEventListener('click', () => {
    const newTab = window.open('/page2.html');
    newTab.addEventListener('load', () => {
        newTab.document.body.style.border = "10px solid red";
    })
})