$(function () {


$('.step').hide();
$('.step').first().show();
$("#enviar").hide();



var passoexibido = function(){
    var index = parseInt($(".step:visible").index());
    if(index == 0){

        $("#voltar").hide();
    }else if(index == (parseInt($(".step").length)-1)){

        $("#avanca").hide();
        $("#enviar").show();
    }else{
        $("#avanca").show();
        $("#voltar").show();
    }


};

passoexibido();

$("#avanca").click(function(){
    $(".step:visible").hide().next().show();
    passoexibido();
});

$("#voltar").click(function(){
    $(".step:visible").hide().prev().show();
    passoexibido();
});

$('#telefone').mask('(00) 0000-0000');
$('#cnpj_empresa').mask('00.000.000/0000-00', {reverse: true});
$('#cpf_devedor').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
});