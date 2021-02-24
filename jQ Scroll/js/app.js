


function efectoScroll( $elemento , $clase , $medida ) {
    
    let pixel
    let distanciaVertical
   
   
    $(window).on({
    'scroll' : function () {
        
        let alturaVentana = $(window).height()
            pixel = $(window).scrollTop()
            distanciaVertical = $($elemento).offset().top

            let chivato = $('.chivato')
            chivato.html(pixel)

        if (pixel >= distanciaVertical - (alturaVentana / $medida )) {
            $($elemento).addClass($clase)
            
        }else{
            $($elemento).removeClass($clase)
        }
        console.log(pixel, distanciaVertical, alturaVentana);
    }    
    })

    $(window).on({
        'resize' : function () {
            distanciaVertical   = $($elemento).offset().top
            alturaVentana       = $(window).height()
        }
    })

}

efectoScroll('.cuadrado' , 'ver' , 1.3)







// $(window).on({
//     'scroll' : function () {
        
//         let pixel = $(window).scrollTop()
//         let distanciaVertical = $('.cuadrado').offset().top
//         let alturaVentana = $(window).height()

//         let chivato = $('.chivato')
//         chivato.html(pixel)


//         // Añadir la clase al border TOP 

//             // if (pixel >= distanciaVertical - (alturaVentana/1.3) ) {
//             //     $('.cuadrado').addClass('ver')
//             // }else{
//             //     $('.cuadrado').removeClass('ver')

//             // }

//         // Añadir la clase en el border bottom de la ventana 

//             // if (pixel >= distanciaVertical - alturaVentana ) {
//             //     $('.cuadrado').addClass('ver')
                
//             // }else{
//             //     $('.cuadrado').removeClass('ver')
//             // }

//         // Añadir la clase en mitad  de la ventana 

//         if (pixel >= distanciaVertical - (alturaVentana / 2 )) {
//             $('.cuadrado').addClass('ver')
            
//         }else{
//             $('.cuadrado').removeClass('ver')
//         }





//         console.log(pixel, distanciaVertical, alturaVentana);
//     }
    
// })


// $(window).on({
//     'resize' : function () {
//         distanciaVertical       = $('.cuadrado').offset().top
//         alturaVentana       = $(window).height()
//     }
// })