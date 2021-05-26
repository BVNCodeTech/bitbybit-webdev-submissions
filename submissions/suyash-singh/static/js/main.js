const burgerSlider = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })
}

window.addEventListener('scroll', ()=>{
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
    console.log(window.scrollY)

    var why = document.querySelector('.why');
    why.classList.toggle('active', window.scrollY > 400);

    var feature1 = document.querySelector('#feature1');
    var feature2 = document.querySelector('#feature2');
    var feature3 = document.querySelector('#feature3');
    var feature4 = document.querySelector('#feature4');
    
    feature1.classList.toggle('active', window.scrollY > 2300);
    feature2.classList.toggle('active', window.scrollY > 2900);
    feature3.classList.toggle('active', window.scrollY > 3400);
    feature4.classList.toggle('active', window.scrollY > 3900);

    var testimonials = document.querySelector('.testimonials');
    testimonials.classList.toggle('active', window.scrollY>=4900);

    var contact = document.querySelector('.contact-form');
    contact.classList.toggle('active', window.scrollY > 7100)
})

burgerSlider()