/*function navigationButton(){
    $('#nav-button').click(function(){
        $("#sm-nav-list-wrapper").slideToggle(400);
    });

}*/

function heroSection(){
    let window_width = window.outerWidth;
    let window_height = window.outerHeight;
    let parent_section = document.getElementById("hero-section-parent");
    let hero_mask = document.getElementById("bg-mask");
    let cta_wrapper = document.getElementsByClassName("cta-wrapper");
    let services_btn = document.getElementById("services-btn");


    
    if(window_width <= 320 && window_height <= 568){
        parent_section.style.height = "100vh";
        hero_mask.style.height = "100vh";
    }  
    if(window_width <= 384 && window_height <= 812){
        parent_section.style.background = "url('/images/bg.jpg')";
        parent_section.style.height = "90vh";
        hero_mask.style.height = "90vh";
        services_btn.style.paddingTop = "0px";
        cta_wrapper[0].style.display ="flex";
        cta_wrapper[0].style.columnGap = "5px";
    }
    if(window_width <= 398 && window_height <= 812){
        parent_section.style.background = "url('/images/bg.jpg')";
        parent_section.style.height = "100vh";
        hero_mask.style.height = "100vh";
        services_btn.style.paddingTop = "0px";
        cta_wrapper[0].style.display ="flex";
        cta_wrapper[0].style.columnGap = "5px";
    }
    if(window_width <= 360 && window_height <= 650){
        parent_section.style.height = "90vh";
        hero_mask.style.height = "90vh";
    }
    if(window_width <= 412 && window_height <= 750){
        parent_section.style.height = "100vh";
        hero_mask.style.height = "100vh";
    }
    if(window_width <= 360 && window_height <= 750){
        parent_section.style.height = "90vh";
        hero_mask.style.height = "90vh";
    }
    if(window_width <= 375 && window_height <= 750){
        parent_section.style.height = "100vh";
        hero_mask.style.height = "100vh";
    }
    //coding for iphones?
    if(window_width <= 414 && window_height <= 750){
        parent_section.style.height = "110vh";
        hero_mask.style.height = "110vh";
    }
    if(window_width <= 414 && window_height <= 915){
        parent_section.style.height = "90vh";
        hero_mask.style.height = "90vh";
    }

    if(window_width <= 375 && window_height <= 750){
        parent_section.style.height = "100vh";
        hero_mask.style.height = "100vh";
    }
    if(window_width == 384 && window_height == 640){
        parent_section.style.height = "110vh";
        hero_mask.style.height = "110vh";
    }
}

function readMore(){
    let button = document.getElementById("read-more-btn");
    let read_one = document.getElementById("read-one");
    let read_two = document.getElementById("read-two");
    button.onclick = function(){
        read_one.style.display = "block";
        read_two.style.display = "block";
        button.style.display = "none";
    }
}
function readLess(){
    let button = document.getElementById("read-less-btn");
    let button_two = document.getElementById("read-more-btn");
    let read_one = document.getElementById("read-one");
    let read_two = document.getElementById("read-two");
    button.onclick = function(){
        read_one.style.display = "none";
        read_two.style.display = "none";
        button_two.style.display = "block";
    }
}

//navigationButton();
heroSection();
readMore();
readLess();