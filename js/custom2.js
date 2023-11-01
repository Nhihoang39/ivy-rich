$("#review").owlCarousel({
    loop:true, // cho lap lại
    items:2, // xuất hiện 1 ảnh thôi
    smartSpeed:1800, // tốc độ thay đổi ảnh
    autoplay:true, // cho phép tự động chạy
    autoplayTimeout:3200, // thời gian chờ khi chuyển ảnh khi chạy tự động
    nav:false, // cho xuất hiện bộ nút tới lui
    margin:0,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
       
       
        992:{
            items:2,
            
        }
    }

    });

   