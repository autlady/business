const toggleMenu = document.querySelectorAll('.menu-toggle');
const asideMenu = document.querySelector('.aside-menu-wrapper');
const bodyEl = document.body;

for (let item of toggleMenu) {
    item.addEventListener('click', function(){
       
        if(this.classList.contains('active')){
            this.classList.remove('active');
            asideMenu.classList.remove('active');
            bodyEl.classList.remove('noscroll');
        }else{
            this.classList.add('active');
            asideMenu.classList.add('active');
            bodyEl.classList.add('noscroll');
        }
    });
};

asideMenu.addEventListener('click', function (e) {
    if (e.target === e.currentTarget){
        asideMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
        for (let item of toggleMenu) { item.classList.remove('active'); }
    }
});
