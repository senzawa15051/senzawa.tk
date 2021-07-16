//Код написан спаем.
//Creator SpYHAHA tg(https://t.me/guslslakkaakdkabspy4)

$(".asphodels-loves").click(function (){
    var src = $(this).children(".asphodel-img").attr('src');
    alert(src)
    ("#sneaky-src").html("\
    <div class='sneaky-block'>\
        <img src='"+src+"' alt='makofellinlove'>\
        <a href='full/1.png'>\
            Source\
        </a>\
    </div>\
    ")
    ("#sneaky-src").addClass("show")
});

var gl = 0

$(".movement").click(function (){
    var moveto = $(this).attr('data-buttype');
    if (moveto == "forward"){
        if (gl < 1){
            gl++; 
        }
        else{
            gl = 0;
        }
        Galery(gl)
    }
    else if (moveto == "back"){
        if (gl > 0){
            gl--;
        }
        else{
            gl = 1;
        }
        Galery(gl)
    }
});

function Galery(gl){
    data = {
        'glbg':{
            0:{
               "bg":"bg/vm.png",
               "bgp": "bg/vmp.png"
            },
            1:{"bg": "bg/bmv.png", "bgp": "bg/bmvp.png"}
        },
        'gltitle':{
            0:'Черно/Белое',
            1:'Цветное'
        },
        'glblock':{
                0: '<div class="gall-block">\
                <img src="cutted/3.png" data-src="compr/3.jpg" alt="asphodelrisunokhaha" data-text="черно/белый без детализации по плечи/пояс" data-price="3$/5$" data-id="3"  onclick="show(this)">\
            </div>\
            <div class="gall-block">\
                <img src="cutted/1.png" data-src="compr/1.jpg" alt="asphodelrisunokhaha" data-text="черно/белый с детализацией по плечи" data-price="5$" data-id="1" onclick="show(this)">\
            </div>\
            <div class="gall-block">\
                <img src="cutted/2.png" data-src="compr/2.jpg"  alt="asphodelrisunokhaha" data-text="чёрно/белый с детализацией по пояс" data-price="7$" data-id="2"  onclick="show(this)">\
            </div>',
                1: '<div class="gall-block">\
                <img src="cutted/5.png" data-src="compr/7.jpg" title="Цветные" alt="asphodelrisunokhaha" data-text="цветной рисунок без детализации по плечи" data-price="8$" data-id="2"  onclick="show(this)">\
            </div>\
            <div class="gall-block">\
                <img src="cutted/4.png" data-src="compr/6.jpg" title="Цветные" alt="asphodelrisunokhaha" data-text="цветной рисунок без детализации по пояс" data-price="10$" data-id="1" onclick="show(this)">\
            </div>\
            <div class="gall-block">\
                <img src="cutted/6.png" data-src="compr/9.jpg" title="Цветные" alt="asphodelrisunokhaha" data-text="цветной рисунок с детализацией по пояс" data-price="20$" data-id="3"  onclick="show(this)">\
            </div>'
        }
    }
    if (gl == 1){
        $(".gallery").addClass("colorme")
        $(".block").addClass("colorme")
        $("#fullimg").addClass("colorme")
    }
    else if(gl == 0){
        $(".block").removeClass("colorme")
        $(".gall-block").removeClass("colorme")
        $("#fullimg").removeClass("colorme")
    }
    $('.bg').attr("src", data['glbg'][gl]['bg'])
    $('.bg-ph').attr("src", data['glbg'][gl]['bgp'])
    $(".gl-ttl").html(data['gltitle'][gl])
    $("#gallery").html(data['glblock'][gl])
}


var x = 0

function show(img){
   var imgsrc = img.dataset.src;
   var imgmain = img.src;
   var imgtext = img.dataset.text;
   var imgprice = img.dataset.price;
   $("#fullimg").fadeIn();
   $(".go-back").addClass('show');
    block = "<div class='full-flex-center'>\
    <div class='fulldiv'>"
    if (typeof imgsrc != "undefined"){
        block+="<img src='"+imgsrc+"'>"
    }
    else if (typeof imgmain != 'undefined'){
        block+="<img src='"+imgmain+"'>"
    }
    if(typeof imgtext != "undefined"){
        block+="<span class='fulltxt'>"+imgtext+"</span><br>"
    }
    if(typeof imgprice != "undefined"){
        block+="<span class='fullprc'>Цена: "+imgprice+"</span>"
    }
    block+="</div> </div>"

    $("#fullimg").html(block)
}


$(".go-back").click(function(){
    $("#fullimg").fadeOut();
    $(".go-back").removeClass('show');
});

$("#scroll-bottom").click(function(){
    $('html, body').animate({scrollTop:document.body.scrollHeight}, 1000);
});

$("#scroll-top").click(function(){
    $('html, body').animate({scrollTop:0}, 500);
});

tracksname = [
    'Sista Prod - Eyes Blue Li...',
    'Mr.Kitty - After Dark',
    'Lil Nas X - Montero'
]

trackssrc = [
    'a/aud.m4a',
    'a/aud2.mp3',
    'a/aud3.m4a'
]

pocikAudio = document.getElementById("track");
haha = Math.floor(pocikAudio.volume * 100) / 100;
$("#volumeshower").html(haha);
$("#clicktrack").click(function () {
    x++;
    var dd = $("#bubuplayer").children('audio').attr('id');
    spydio = document.getElementById(dd);
    $("#bubuplayer").html("<audio id='track' loop><source src='"+trackssrc[x%trackssrc.length]+"' type='audio/mpeg'> </audio>");
    $("#clicktrack").html(tracksname[x%tracksname.length])
    var dds = $("#bubuplayer").children('audio').attr('id');
    spydionew = document.getElementById(dds);
    if (!spydio.paused){
        spydionew.play()
    }
    pocikAudio = document.getElementById("track");
    haha = Math.floor(pocikAudio.volume * 100) / 100;
    $("#volumeshower").html(haha);
});

$("#bubuplayer").click(function (){
    var dd = $(this).children('audio').attr('id');
    spydio = document.getElementById(dd);
    if (spydio.paused){
        spydio.play()
        $(this).removeClass("fa-play")
        $(this).addClass("fa-pause")
    }
    else{
        spydio.pause()
        $(this).removeClass("fa-pause")
        $(this).addClass("fa-play")
    }
});

$("#pluser").click(function (){
    if (pocikAudio.volume < 1) {
        pocikAudio.volume = pocikAudio.volume + 0.1;
        haha = Math.floor(pocikAudio.volume * 100) / 100;
        $("#volumeshower").html(haha)
    }
});

$("#minuser").click(function (){
    if (pocikAudio.volume > 0) {
        pocikAudio.volume = pocikAudio.volume - 0.1;
        haha = Math.floor(pocikAudio.volume * 100) / 100;
        $("#volumeshower").html(haha)
    }
});



