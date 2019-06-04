var inputTitle = document.getElementById('voca-title');
inputTitle.addEventListener('click', titleOnClick);

function titleOnClick() {
    inputTitle.value = '';
    inputTitle.style.color = 'black';
}

window.onclick = function() {
    if (event.target != inputTitle) {
        if (inputTitle.value == '') {
            inputTitle.value = '단어장 제목';
            inputTitle.style.color = 'gray';
        }
    }
}