var swiper=new Swiper(".default-swiper",{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}}),swiper=new Swiper(".navigation-swiper",{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{clickable:!0,el:".swiper-pagination"}}),swiper=new Swiper(".pagination-dynamic-swiper",{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0,el:".swiper-pagination",dynamicBullets:!0}}),swiper=new Swiper(".pagination-fraction-swiper",{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0,el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper=new Swiper(".pagination-custom-swiper",{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0,el:".swiper-pagination",renderBullet:function(e,i){return'<span class="'+i+'">'+(e+1)+"</span>"}}}),swiper=new Swiper(".pagination-progress-swiper",{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper=new Swiper(".pagination-scrollbar-swiper",{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},scrollbar:{el:".swiper-scrollbar",hide:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper=new Swiper(".vertical-swiper",{loop:!0,direction:"vertical",autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiper=new Swiper(".mousewheel-control-swiper",{loop:!0,direction:"vertical",mousewheel:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiper=new Swiper(".effect-fade-swiper",{loop:!0,effect:"fade",autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiper=new Swiper(".effect-coverflow-swiper",{loop:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"4",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}}),swiper=new Swiper(".effect-flip-swiper",{loop:!0,effect:"flip",grabCursor:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiper=new Swiper(".effect-creative-swiper",{loop:!0,grabCursor:!0,effect:"creative",creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiper=new Swiper(".responsive-swiper",{loop:!0,slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},1200:{slidesPerView:4,spaceBetween:50}}}),lightbox=GLightbox({selector:".image-popup",title:!1});