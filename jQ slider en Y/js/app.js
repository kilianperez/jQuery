'use strict'

$(document).ready(function () {

    const $circle  = $('.li')
    const $img     = $('.img')
    const $sig     = $('.siguiente')
    const $ant     = $('.anterior') 
    const $cont    = $('.contenedor')

    let $i = 0

    $circle.on({
        'click' : function () {
            $i = $circle.index($(this))
            pasarFoto()
        }
    })
    $sig.on({
        'click' : function () {
            $i++
            if ($i>=3) { $i = 0}
            pasarFoto()
        }
    })
    $ant.on({
        'click' : function () {
            if ($i<=0) { $i = 3}
            $i--
            pasarFoto()
        }
    })
    function pasarFoto() {
        $cont.css({
            'transform' : `translateX(${$i * -33.33}%)`
        })
        $circle.removeClass('ver')
        $img.removeClass('ver')
        $circle.eq($i).addClass('ver')
        $img.eq($i).addClass('ver')
    }
})