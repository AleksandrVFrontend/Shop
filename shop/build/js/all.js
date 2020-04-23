
$(function() {
    
    let $btnOpenCatalog = $('.btn-open__catalog'),
        $catalog = $('.catalog'),
        $btnCloseCatalog = $('.catalog__btn'),
        $btnOpenAbout = $('.btn-open__about'),
        $about = $('.about'),
        $btnAboutClose = $('.about__btn'),
        $li = $('.li__header'),
        $li__header = $('.li__header a'),
        $btnOpenPopup = $('.btn-open__popup'),
        $popup = $('.popup '),
        $popupHelpClose = $('.popup__help__btn'),
        $callback = $('.section-nav__telephone__callback'),
        $flame = $('.flame-btn'),
        $tel = $('#input__tel'),
        $menu = $('.up-bar__left li a'),
        $menuLeft = $('.up-bar__left'),
        $menuButton = $('.up-bar__button'),
        $cabinetIn = $('.section-nav__cabinet__btn__comeIn'),
        $popupHelp = $('.popup__help'),
        $popupEnter = $('.popup-enter'),
        $popupEnterClose = $('.popup__enter__close'),
        $cabinetIn2 = $('.section-nav__cabinet__btn__cabinet'),
        $contactsOpen = $('.btn-open__contacts'),
        $nameHelp = $('#name'),
        $phomeHelp = $('#phone'),
        $mailHelp = $('#mail'),
        $btnSumbitHelp = $('.popup__help__submit'),
        $autnPopupEnter = $('.popup-enter__form__autn'),
        $btnInEnter = $('.popup-enter__form__in'),
        $autn = $('.autn '),
        $in = $('.in'),
        $btnOn1 = $('.btnOn1'),
        $btnOn2 = $('.btnOn2'),
        $btnOn3 = $('.btnOn3'),
        $btnOn4 = $('.btnOn4'),
        $popupText = $('.popup__text'),
        $btnCloseHelp = $('.popup__text__btn'),
        $btnSearch = $('.section-nav__seach__form__btn'),
        $panel = $('.section-nav-panel div span'),
        $h3__news = $('.section-main__rigth__text__h3 a'),
        $btnAs = $('.section-main__left__slider__text__btn'),
        $btnHeaderHidden = $('.header__bar__nav__list__hidden__btn'),
        $navList = $('.header__bar__nav__list'),
        $btnBuy = $('.section-menu__products-new__insite__btn'),
        $swiperContainer = $('.swiper-container'),
        $buttonPrev = $('.swiper-button-prev'),
        $buttonNext = $('.swiper-button-next');            

    $btnOpenCatalog.on('click', function () {
        $catalog.slideToggle()
        $about.slideUp()	
    })
    $btnCloseCatalog.on('click', function () {
        $catalog.slideToggle()
    })
    $btnOpenAbout.on('click', function () {
        $about.slideToggle();
        $catalog.slideUp()
    })
    $btnAboutClose.on('click', function () {
        $about.slideToggle();
    })
    $li__header.on('mouseout', function () {
        $li__header.addClass('inherit__color')
    })
    $btnOpenPopup.on('click', function () {
        $popup.addClass('not__display-none')
        $btnHeaderHidden.removeClass('hidden-open')
        $li__header.removeClass('display-inline')
        $li__header.removeClass('li__header-style')
        $navList.removeClass('not__display-none')
        $navList.removeClass('not__display-none')
        $navList.removeClass('position-centerAbc')
        $li.removeClass('li-style')
    })
    $popupHelpClose.on('click', function () {
        $popup.removeClass('not__display-none')
    })
    $callback.on('mouseover', function () {
        $flame.addClass('left-drive')
        $flame.removeClass('right-drive')
    })
    $callback.on('mouseout', function () {
        $flame.addClass('right-drive')
        $flame.removeClass('left-drive')
    })
    $contactsOpen.on('mouseover', function () {
        $flame.addClass('left-drive')
        $flame.removeClass('right-drive')
    })
    $contactsOpen.on('mouseout', function () {
        $flame.addClass('right-drive')
        $flame.removeClass('left-drive')
    })
    $cabinetIn.on('click', function () {
        $popup.addClass('not__display-none')
        $popupHelp.addClass('display-none')
        $popupEnter.addClass('not__display-none')
    })
    $cabinetIn2.on('click', function () {
        $popup.addClass('not__display-none')
        $popupHelp.addClass('display-none')
        $popupEnter.addClass('not__display-none')
    })
    $popupEnterClose.on('click', function () {
        $popup.removeClass('not__display-none')
        $popupHelp.removeClass('display-none')
        $popupEnter.removeClass('not__display-none')
    })
    $autnPopupEnter.on('click', function (){
        $autnPopupEnter.addClass('active-btn')
        $btnInEnter.removeClass('active-btn')
        $autn.removeClass('display-none')
        $in.addClass('display-none')
    })
    $btnInEnter.on('click', function (){
        $autnPopupEnter.removeClass('active-btn')
        $btnInEnter.addClass('active-btn')
        $autn.addClass('display-none')
        $in.removeClass('display-none')
    })
    $btnOn1.on('click', function () {
        $btnOn1.addClass('backGround-none')
        $btnOn2.removeClass('backGround-none') 
        $btnOn3.removeClass('backGround-none') 
        $btnOn4.removeClass('backGround-none') 
    }) 
    $btnOn2.on('click', function () {
        $btnOn1.removeClass('backGround-none')
        $btnOn2.addClass('backGround-none') 
        $btnOn3.removeClass('backGround-none') 
        $btnOn4.removeClass('backGround-none') 
    }) 
    $btnOn3.on('click', function () {
        $btnOn1.removeClass('backGround-none')
        $btnOn2.removeClass('backGround-none') 
        $btnOn3.addClass('backGround-none') 
        $btnOn4.removeClass('backGround-none') 
    })
    $btnOn4.on('click', function () {
        $btnOn1.removeClass('backGround-none')
        $btnOn2.removeClass('backGround-none') 
        $btnOn3.removeClass('backGround-none') 
        $btnOn4.addClass('backGround-none') 
    })  
    $btnCloseHelp.on('click', function () {
        $popupText.removeClass('not__display-none')
        $popup.removeClass('not__display-none')
    })
    $btnSearch.on('mouseout', function () {
        $btnSearch.addClass('inherit__background')
    })
    $panel.on('mouseout', function () {
        $panel.addClass('color-none')
    })
    $h3__news.on('mouseover', function () {
        $h3__news.addClass('inherit__color')
    })
    $btnAs.on('mouseout', function () {
        $btnAs.addClass('inherit__background__2')
    })
  
    $btnHeaderHidden.data('counter', 0).click(function() {
        let counter = $(this).data('counter'); 
        $(this).data('counter', counter + 1);        
        let b = $(this).data('counter');
        if (b % 2 !== 0) {
            $btnHeaderHidden.addClass('hidden-open')
            $li__header.addClass('display-inline')
            $li__header.addClass('li__header-style')
            $navList.addClass('not__display-none')
            $navList.fadeIn()
            $navList.addClass('position-centerAbc')
            $li.addClass('li-style')
        } else {
            $btnHeaderHidden.removeClass('hidden-open')
            $li__header.removeClass('display-inline')
            $li__header.removeClass('li__header-style')
            $navList.removeClass('not__display-none')
            $navList.removeClass('not__display-none')
            $navList.removeClass('position-centerAbc')
            $li.removeClass('li-style')
        }
    })
    $btnBuy.on('mouseout', function () {
        $btnBuy.addClass('inherit__background')
    })
 
    $btnSumbitHelp.on('click', function () {
        let $nameHelpValue = $nameHelp.val(),
            $phomeHelpValue = $phomeHelp.val(),
            $mailHelpValue = $mailHelp.val();
        if ($mailHelp.hasClass('error-border') && $nameHelpValue.length == 0) {
            $mailHelp.addClass('error-border');
            $nameHelp.addClass('error-border');
            $phomeHelp.addClass('error-border')
        } else if ($mailHelpValue > 0 && $nameHelpValue > 0) {
            $popupText.addClass('not__display-none')
            $nameHelpValue = '';
            $mailHelpValue = '';
        }
    })
    
    
    $('form').each(function() {
        $(this).validate({
            focusinvalid: false,
            rules: {
                Телефон: {
                    required: true,
                    minlength: 10,
                },
                Имя: {
                    required: true,
                    minlength: 2,
                },   
            },  
            messages: {
                Имя: {
                    required: 'Введите Имя',
                    minlength: 'Введите полное Имя',
                },  
                Телефон: {
                    required: 'Введите телефон',
                    minlength: 'Введите полный номер телефона',
                },  
            },
            submitHandler(form) {
                let th = $(form)

                $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: th.serialize(),
                }).done(() => {

                    console.log('Отправлено')

                th.trigger('reset');
                });

                return false;
                }             
        });
    });

    var mySwiper = new Swiper ($swiperContainer, {
        loop: true,
        slidesPerView:3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
              breakpoints: {
            0: {
                slidesPerView: 1,
                },
            526: {
                slidesPerView: 2,
                },
                
            720: {
                slidesPerView: 3,
            },
            908: {
                slidesPerView: 4,
            },
        }
    });
    

    $modalButton.data('counter', 0).click(function(event) {
        event.preventDefault();
            let counter = $(this).data('counter'); 

            $(this).data('counter', counter + 1);        
            
            let b = $(this).data('counter');

            if(b%2 !== 0) {

                $body.toggleClass('not_scroll');
                $menuLeft.toggleClass('up-bar__left_display');
                $menuLeft.toggleClass('fon-open');
                $menuLeft.toggleClass('fon-open__li');
                $menuButton.toggleClass('up-bar__button__ul__off');

            } else {
                
                $menuLeft.toggleClass('up-bar__left_display');
                $menuButton.toggleClass('up-bar__button__ul__off');
                $body.toggleClass('not_scroll');
                $menuLeft.toggleClass('fon-open');
                $menuLeft.toggleClass('fon-open__li');
            };      
        });  
        
    function newRequest() {
        let name = $text.val(),
            phone = $tel.val();
    
        if(name.length >2 && phone.length >2) {
            

            $modal.addClass('b-popup_display');
            $littleModal.removeClass('a-popup_display');
            
            name = $text.val('');
            phone = $tel.val('');

        }  else {

            $burger.on('click', function(event) {
                event.preventDefault()
            });
            $text.addClass('error');
            $tel.addClass('error');  
        }; 
    };

     
    $burger.on('click', newRequest);
    
   
    $call.on('click', function(event) {
        event.preventDefault();
        $modal.removeClass('b-popup_display');
        $modal.addClass('b-popup_not_display');
    });
});

function handleChangeForm(props) {
    if (props == '#mail') {
        let isValid = (document.querySelector(props).value.match(/.+?\@.+/g)) ? true : false;
        if (!isValid) {
            document.querySelector(props).classList.add('border-error')
        } else {
            document.querySelector(props).classList.remove('border-error')
        }
    } else {
        if (document.querySelector(props).value.length <= 0) {
            document.querySelector(props).classList.add('error-border')
        } else {
            document.querySelector(props).classList.remove('error-border')
        }
    }
}


function clickForm(props) {
    if (props.length == 4) {
        let a = document.querySelector(props[0]).value.length > 0 ? true : false,
        b = document.querySelector(props[1]).value.length > 0 ? true : false, 
        c = document.querySelector(props[2]).value.length > 0 ? true : false,
        d = document.querySelector(props[3]).value.length > 0 ? true : false;

        if (a && b && c && d) {
            document.querySelector('.popup__text').classList.add('not__display-none')
            document.querySelector('.popup__help').classList.add('display-none')
            document.querySelector(props[0]).value = '';
            document.querySelector(props[1]).value = '';
            document.querySelector(props[2]).value = '';
            document.querySelector(props[3]).value = '';
        } else {
            document.querySelector(props[0]).classList.add('error-border');
            document.querySelector(props[1]).classList.add('error-border');
            document.querySelector(props[2]).classList.add('error-border');
            document.querySelector(props[3]).classList.add('error-border');
        }
    } 
    if (props.length == 3) {
        let a = document.querySelector(props[0]).value.length > 0 ? true : false,
        b = document.querySelector(props[1]).value.length > 0 ? true : false, 
        c = document.querySelector(props[2]).value.length > 0 ? true : false,
        d =  document.querySelector(props[1]).value == document.querySelector(props[2]).value ? true : false;

        if (a && b && c && d) {
            document.querySelector('.popup__enter__close').classList.remove('not__display-none')
            document.querySelector('.popup-enter').classList.remove('not__display-none')
            document.querySelector('.popup').classList.remove('not__display-none')
            document.querySelector(props[0]).value = '';
            document.querySelector(props[1]).value = '';
            document.querySelector(props[2]).value = '';
        } else {
            document.querySelector(props[0]).classList.add('error-border');
            document.querySelector(props[1]).classList.add('error-border');
            document.querySelector(props[2]).classList.add('error-border');
        }
    }
    if (props.length == 2) {
        let a = document.querySelector(props[0]).value.length > 0 ? true : false,
        b = document.querySelector(props[1]).value.length > 0 ? true : false; 

        if (a && b) {
            document.querySelector('.popup__enter__close').classList.remove('not__display-none')
            document.querySelector('.popup-enter').classList.remove('not__display-none')
            document.querySelector('.popup').classList.remove('not__display-none')
            document.querySelector(props[0]).value = '';
            document.querySelector(props[1]).value = '';
        } else {
            document.querySelector(props[0]).classList.add('error-border');
            document.querySelector(props[1]).classList.add('error-border');
        }
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
