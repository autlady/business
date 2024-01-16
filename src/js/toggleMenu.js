const toggleMenu = document.querySelector('.menu-toggle');

if (toggleMenu){
    toggleMenu.addEventListener('click', function(){

        console.log("click!!!")
        
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }else{
            this.classList.add('active');
        }
    })
};