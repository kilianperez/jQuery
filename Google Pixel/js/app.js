'use strict'

// Cuando hago click en contenedor__h3[i] 
//     elimino la clase 'ver' a TODOS los contenedor__linea y contenedor__p 
//     añado la clase a 'ver' a los contenedor__linea contenedor__linea[i] y contenedor__p[i] 

// let contenedor__h3    = document.querySelectorAll('.contenedor__h3')
// let contenedor__linea = document.querySelectorAll('.contenedor__linea') 
// let contenedor__p     = document.querySelectorAll('.contenedor__p') 
// let contenedor__abs     = document.querySelectorAll('.contenedor__abs') 

// let contenedor__img     = document.querySelectorAll('.contenedor__img') 
// let ver     = document.querySelectorAll('.ver') 

// console.log(contenedor__h3);
// console.log(contenedor__linea);
// console.log(contenedor__p);
// console.log(contenedor__img);
// console.log(ver);



// contenedor__h3.forEach(function (contenedor__h3Item, i ) {

//     contenedor__h3Item.addEventListener('click', function () {
        
//         contenedor__h3.forEach(function(contenedor__h3Item,i){

//             contenedor__linea[i].classList.remove('ver')
//             contenedor__p[i].classList.remove('ver')
//             contenedor__img[i].classList.remove('ver')
//             contenedor__abs[i].classList.remove('ver')
//             console.log('for');


//         })
        
//         contenedor__linea[i].classList.add('ver')
//         contenedor__p[i].classList.add('ver')
//         contenedor__img[i].classList.add('ver')
//         contenedor__abs[i].classList.add('ver')

        
        
        
//         console.log('click');

        
//     })
    
// });



// $(document).ready(function(){
        
//     const $li        = $('.tabs__li') 
//     const $contn = $('.tabs__contenido') 

//     $li.on({
//         'click' : function () {
//             let $i = $li.index($(this))
//             console.log($li.index($(this)));
//             $contn.removeClass('ver')
//             $li.removeClass('ver')
//             $(this).addClass('ver')
//             $contn.eq($i).addClass('ver')
//         }
//     })
// })




// Cuando hago click en contenedor__h3[i] 
//     elimino la clase 'ver' a TODOS los contenedor__linea y contenedor__p 
//     añado la clase a 'ver' a los contenedor__linea contenedor__linea[i] y contenedor__p[i] 




$(document).ready(function () {

    const $h3       = $('.contenedor__h3')

    const $linea    = $('.contenedor__linea')
    const $p        = $('.contenedor__p')
    const $abs      = $('.contenedor__abs')
    const $img      = $('.contenedor__img')


    $h3.on({
        'click' : function () {
            
        let $i = $h3.index($(this))

        $linea.removeClass('ver')   
        $p.removeClass('ver')               
        $abs.removeClass('ver')     
        $img.removeClass('ver')     
        
        $linea.eq($i).addClass('ver')
        $p.eq($i).addClass('ver')        
        $abs.eq($i).addClass('ver')
        $img.eq($i).addClass('ver')        



        console.log($linea.eq($i));
        }
    })

})
