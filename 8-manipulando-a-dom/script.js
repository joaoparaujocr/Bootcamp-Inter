const tagBody = document.body;
const modeGet = document.getElementById('modo-get');
const btnSet = document.getElementById('btn-set');

btnSet.addEventListener('click', () => {
    (btnSet.checked) ? darkMode() : lightMode()
})

const lightMode = () => {
    modeGet.innerHTML = 'Mode Light'
    modeGet.style.color = 'black'
    tagBody.style.backgroundColor = 'white'
}


const darkMode = () => {
    modeGet.innerHTML = 'Mode Dark'
    modeGet.style.color = 'white'
    tagBody.style.backgroundColor = 'black'
}