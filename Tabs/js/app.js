'use strict'

/* 

    Cuando click en tabs__li quito la clase ver a tabs__contenido y añado la clase ver tabs__li con el mismo [i]


    // SABER la posicion dun ITEMMM
    // COLOCAR la posicion dun ITEMMM            
    // elemnto.eq(i).addClass('clase')

*/
$(document).ready(function(){
        
    const $li        = $('.tabs__li') 
    const $contn = $('.tabs__contenido') 

    $li.on({
        'click' : function () {
            let $i = $li.index($(this))
            console.log($li.index($(this)));
            $contn.removeClass('ver')
            $li.removeClass('ver')
            $(this).addClass('ver')
            $contn.eq($i).addClass('ver')
        }
    })
})

    


