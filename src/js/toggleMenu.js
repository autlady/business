const toggleMenu = document.querySelectorAll('.menu-toggle');
const asideMenu = document.querySelector('.aside-menu-wrapper');

for (let item of toggleMenu) {
    item.addEventListener('click', function(){

        console.log("click!!!")
        
        if(this.classList.contains('active')){
            this.classList.remove('active');
            asideMenu.classList.remove('active');
        }else{
            this.classList.add('active');
            asideMenu.classList.add('active');
        }
    })
};

