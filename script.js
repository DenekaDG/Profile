// ===============typing animation

let typed=new Typed('.typing',{
    strings:['','Web Designer',  'Graphic Designer', 'Web Developer','YouTuber'],
    typeSpeed: 80,
    BackSpeed:60,
    loop:true
} )
//  =============== Active asideLink ======================

const asideLink=document.querySelectorAll('.asideLink');

function activeLink() {
    asideLink.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
asideLink.forEach((item) =>
item.addEventListener('click', activeLink));

















