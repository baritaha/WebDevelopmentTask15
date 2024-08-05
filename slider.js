$(document).ready(function(){
    /* ******************************************nav bar*************** */
    const head=document.querySelector('.head');
    $(window).scroll(function(){
        var scrol=$(window).scrollTop();
        if(scrol>50){
            head.classList.add('showbar');
        }
        else{
            head.classList.remove('showbar');
        }
    })
})