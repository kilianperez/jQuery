'use strict'

// cuando hago hago mouseover sobre char__li[i]
//     añado clase ver a char__img[i]

//     cuando no hago hago mouseover sobre la clase char__li
//         quito clase ver a TODOS los char__img



// $(document).ready(function () {

//     const $h3       = $('.contenedor__h3')

//     const $linea    = $('.contenedor__linea')
//     const $p        = $('.contenedor__p')
//     const $abs      = $('.contenedor__abs')
//     const $img      = $('.contenedor__img')


//     $h3.on({
//         'click' : function () {
            
//         let $i = $h3.index($(this))

//         $linea.removeClass('ver')   
//         $p.removeClass('ver')               
//         $abs.removeClass('ver')     
//         $img.removeClass('ver')     
        
//         $linea.eq($i).addClass('ver')
//         $p.eq($i).addClass('ver')        
//         $abs.eq($i).addClass('ver')
//         $img.eq($i).addClass('ver')        



//         console.log($linea.eq($i));
//         }
//     })

// })




$(document).ready(function () {
    const $char__li       = $('.char__li')
    const $char__img    = $('.char__img')
    $char__li.on({
        'mouseover' : function () {        
            let $i = $char__li.index($(this))
            $char__li.eq($i).addClass('ver')
            $char__img.eq($i).addClass('ver')
        },
        'mouseout' : function () {
            $char__li.removeClass('ver')
            $char__img.removeClass('ver')
        }
    })

})



// let char__li    = document.querySelectorAll('.char__li')
// let char__img   = document.querySelectorAll('.char__img')


//     char__li.forEach(function (char__liItem, i) {
//         char__li[i].addEventListener('mouseover', function () {
//         char__li.forEach(function (char__liItem, i) {
//             char__img[i].classList.remove('ver')
            
//         });
//         char__img[i].classList.add('ver')
//         console.log(char__img[i]);

//         })
//         char__li[i].addEventListener('mouseout', function () {

//             char__li.forEach(function (char__liItem, i) {
//                 char__img[i].classList.remove('ver')
                
//             });

//         })
        
//     });

//     // char__li.forEach(function (char__liItem, i) {
//     //     char__img[i].classList.remove('ver') 
//     // });







