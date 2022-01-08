let arrows = document.querySelector('.glide__arrow');

const checkPosition = el => {
    let indGet = el.getAttribute('data-glide-dir').slice(1);
    if(el.getAttribute('class') === 'glide__arrow glide__arrow--left'){
        let indSet = el.setAttribute('data-glide-dir', `=${indGet < -5 ? 0 : indGet -= 5}`)
        return indSet;
    }
}

arrows.addEventListener('click', e => {
    let el = e.target
    checkPosition(el)
})

let glid = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    peek: {
        before: 55,
        after: 55
    },
    gap: 1,
});

glid.mount()