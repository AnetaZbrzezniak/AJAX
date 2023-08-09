$(document).ready(function(){

    $("button").click(function(){
        test();
    })

});


function test(){

    $.ajax({

        type: "POST",
        url: "test.php",
        dataType: "json",
        data : {
            "imie" : $("#imie").val(),
            "lastName" : $("#nazwisko").val(),
        },

        success : function(dane){
            console.log(dane);
        },
        beforeSend : function(){
            $("#preloader").css("display", "block");
        },
        complete : function(){
            $("#preloader").css("display", "none");
        },
        error : function(xhr){
            console.log(xhr.responseText);
        }

    })

}