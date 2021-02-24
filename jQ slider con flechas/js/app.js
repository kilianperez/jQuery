'use strict'

$(document).ready(function () {

    const $cir     = $('.ctrl__circle')
    const $img     = $('.slider__img')
    const $izq     = $('.slider__izq')
    const $der     = $('.slider__der')

    let $i = 0
    let $num = 3

    $cir.on({
        'click' : function () {
            $i = $cir.index($(this))
            pasarSlider()
        }
    })

    $izq.on({
        'click' : function () {
        if ($i <= 0) {
            $i = $num
        }
        $i--
        pasarSlider()
        }
    })
    $der.on({
        'click' : function () {
        $i++
        if ($i >= $num) {
            $i = 0
        }
        pasarSlider()
        }
    })
    function pasarSlider() {
        $cir.removeClass('ver')
        $img.removeClass('ver')
        $cir.eq($i).addClass('ver')
        $img.eq($i).addClass('ver')
    }

})





