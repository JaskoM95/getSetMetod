//get i set metode
//text(),val(),html(),css(),attr()


var dugme = $('.dugme');



//#1
dugme.eq(0).on ('click',function() {

    alert ($('p').eq(0).text()  );




})

dugme.eq(1).on ('click',function() {

    $('p').eq(1).text("Ovo je dodani novi tekst!")  ;




})


//#2 
dugme.eq(2).on ('click',function () {


           alert ($ ('input').eq (0).val());



})

dugme.eq(3).on ('click',function () {


    $ ('input').eq (1).val("Ovo je get vrijednost");



})

//3

dugme.eq (4).on ('click', function () {


    alert( $('.treci').html());



})

dugme.eq (5).on ('click', function () {


    alert( $('.treci').html("<h1>Vazno<h1> <p>Ovo je set html,ostali prosli html je zamijenjen sa ovim</p>"));



})


//4 

dugme.eq(6).on ('click',function () {


    alert ($('p').eq(6).css ('font-size'));




})

dugme.eq(7).on ('click',function () {


    $('p').eq(7).css ('font-size','60px');




})

//5
dugme.eq(8).on ('click',function () {

    var atribut =$('p').eq(8).attr('style');
    alert (atribut);




})

dugme.eq(9).on ('click',function () {

    $('p').eq(9).attr('style','background-color:red');
    




})






