// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu   = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function()
{
    hamburger.classList.toggle('hamburger-active2');
    navMenu.classList.toggle('navbar-animasi');
})

// dark mode toggle

const darkToggle = document.querySelector('#mode');
const html = document.querySelector('html');
const imgMode = document.querySelector('#img-mode');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


// more artikel
const showmore = document.querySelector('#show-more');
const artikel = document.querySelector('#more-artikel');

showmore.addEventListener('click', function()
{
    artikel.classList.toggle('hidden',);
    artikel.classList.toggle('flex',);
    if(showmore.innerText === '= SEE MORE'){
        showmore.innerText = '- SEE LESS';
    }else{
        showmore.innerText = '= SEE MORE';
    }
});



// navbar fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
        header.classList.remove('dark:bg-black')
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
        header.classList.add('dark:bg-black')
    }
};


