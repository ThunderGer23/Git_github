'use strict';

$(document).ready(function() {
    //Selectores por etiqueta
    let Span = $('span');
    Span.css('font-size', '2em');
    //Selectores de atributo
    let Atributo = $('[title="nombre"]');
    Atributo.css('border', '1px solid blue');
    //Selectores por clase
    let Clase = $('.parrafo');
    Clase.css('text-align', 'center');
    let ID = $('#Mostrar');

    let cont = 0;
    $('#Mostrar').click(function() {
        cont += 1;
        $('#texto').html('Has precionado el boton mostrar ' + cont + ' veces').show(100);
    })
    $('#Ocultar').click(function() {
        cont -= 1;
        $('#texto').html('Has precionado el boton mostrar ' + cont + ' veces').hide(500);
    })




});