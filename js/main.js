$(window).ready(function () {


    // active class for th nav
    $("nav .navbar-nav .nav-item ").each(function () {
        $(this).click(function (e) {
                e.preventDefault();
            $(this).addClass("active").siblings().removeClass("active")
        })
    });
    //active class for button
    $(".people .container .button-group button").each(function () {
        $(".people .container .button-group button").click(function (e) {
            e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active")
        })
        
    })
    
    
    //scroll it
    $(function(){
        $.scrollIt({
            topOffset: -50 
        });
      });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            
            $(" nav").addClass("background");
            $("nav .nav-link,  .navbar-light .navbar-brand").addClass("color")
        } 
        else {
            $(" nav").removeClass("background");
            $("nav .nav-link, .navbar-light .navbar-brand ").removeClass("color");

        }
        
    });
    //popup
    $(".memories .container .row .gallery").click(function () {
       $($(this).data("pop")).fadeIn(500)
        
    });
    $(".popup-memory .inner-popup i").click(function () {
        $(this).parents(".popup-memory").fadeOut()
         
     });
     // focus of placeholder
     var placeattr="";
     $("[placeholder]").focus(function () {
         placeattr=$(this).attr("placeholder");
         $(this).attr("placeholder","");
     }).blur(function () {
      
        $(this).attr("placeholder",placeattr);
    });
    //fixed menue
    $(".menue i ").click(function() {
     $(this).toggleClass("is-visible");
        if ($(this).hasClass("is-visible")) {
            $(this).parents(".menue").animate({
                right:0
           },500)
       } 
        else {
            $(this).parents(".menue").animate({
                right:-300
           },500)
            
        }
    });
   /////change color of the page
        const color=[{
            name:"pink",
            code:"#fb839e",
            url:"css/pink.css"
        },
        {
            name:"light-blue",
            code:"#3e99f4",
            url:"css/light-blue.css"
        },
        {
            name:"light-green",
            code:"#0dcebd",
            url:"css/light-green.css"
        },
        {
            name:"red",
            code:"#cc3a3b",
            url:"css/red.css"
        },
        {
            name:"yellow",
            code:"#ff9801",
            url:"css/yellow.css"
        },
    
    ]
    setcolors();
    function setcolors() {
        for(let i=0; i<color.length; i++){
            const span= document.createElement("span");
            span.style.background =color[i].code;
            $(".colors").append(span);
        }
        $(".colors span").click(function(){
            const index=$(this).index();
            $(".alternate").attr("href",color[index].url)
        })
        
    }
    ///dark and light mode

    $(".theme-mode").change(function(){
        if($(this).val()=="light"){
            $("body").removeClass("dark")

        }
        else{
            $("body").addClass("dark")
        }
    })
  
  
   









    
})