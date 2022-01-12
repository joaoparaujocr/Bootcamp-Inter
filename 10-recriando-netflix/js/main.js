const btnSearch = document.querySelector('#btn-search');
const inputSearch = document.querySelector('.box-search input');

btnSearch.addEventListener('click', e => {
    console.log('seacr')
    inputSearch.classList.toggle('active');
    inputSearch.classList.toggle('animation-target');
    btnSearch.classList.toggle('active');
    inputSearch.focus();
    e.stopImmediatePropagation();
});

inputSearch.addEventListener('click', e => e.stopPropagation())

document.body.addEventListener('click', e => {
    console.log('body')
    inputSearch.classList.remove('active');
    inputSearch.classList.remove('animation-target');
    btnSearch.classList.remove('active');
    e.stopImmediatePropagation();
})