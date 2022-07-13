// $('.previewWrap').find('.Preview').eq(2).css({'backgroundColor':'pink'})
$('.videosld1').slick({
    'slidesToShow' : 3,
    'slidesToScroll' : 3,
    'nextArrow' : '.nxt',
    'prevArrow' : '.prv'
})

$('.picsld1').slick({
    'slidesToShow' : 3,
    'slidesToScroll' : 3,
    'nextArrow' : '.nxt2',
    'prevArrow' : '.prv2'
});

$('.gnb li').on('click',function(){

    let i = $(this).index();
    $('html,body').stop().animate({
        'scrollTop' : i * 1000
    })
});


// $('.vid').eq(0).on('mouseover',function(){
//     $('video').eq(0).get(0).play();
// }).on('mouseout',function(){
//     $('video').eq(0).get(0).pause();
// }) -> 이 코드덩어리는 회장님의 코드덩어리인데 잠시 죽여놓겠습니다. 총총 


$('.itemWrap').on('mouseover',function(){
    let getvid = $(this).html();
    // $('.previewWrap').find('.Preview').find('figure').html(getvid);

    let ind = $(this).parent().index();
    let m = ind%3;
    if(m==0){

        $('.previewWrap').children('.Preview').eq(0).find('figure').html(getvid);
        $('.previewWrap').children('.Preview').eq(0).css({'z-index':10000});
      
        
    }else if(m==1){
        $('.previewWrap').children('.Preview').eq(1).find('figure').html(getvid);
        $('.previewWrap').children('.Preview').eq(1).css({'z-index':10000});
      
    
    }else if(m==2){
        $('.previewWrap').children('.Preview').eq(2).find('figure').html(getvid);
        $('.previewWrap').children('.Preview').eq(2).css({'z-index':10000});
        
    }
 
});
$('.Preview').on('mouseover',function(){
    $(this).css({'transform':'scale(1.5)'});
    $(this).find('video').get(0).play();
}).on('mouseout',function(){

    $('.previewWrap').children('.Preview').find('video').get(0).pause();
    $('.previewWrap').children('.Preview').find('figure').html(null);
    $(this).css({'transform':'scale(1)'});
    $('.previewWrap').children('.Preview').css({'z-index':0});
  
})

$('.nxt').on('click',function(){
    $('.previewWrap').children('.Preview').find('video').get(0).pause();
    $('.previewWrap').children('.Preview').find('figure').html(null);
    $('.previewWrap').children('.Preview').css({'z-index':0});
})
$('.prv').on('click',function(){
    $('.previewWrap').children('.Preview').find('video').get(0).pause();
    $('.previewWrap').children('.Preview').find('figure').html(null);
    $('.previewWrap').children('.Preview').css({'z-index':0});
})
let onOff = true;

$('.Preview').on('click',function(){
   onOff =! onOff;
   if(onOff==false){
       $(this).find('video').get(0).pause();
     
   }else{
       $(this).find('video').get(0).play();
       
   }

  
});










// $('.con2cover').children().on('mouseover',function(){
//     let i = $(this).index();

//     $('.con2').children('.box').eq(i).addClass('on');

// }).on('mouseout',function(){
//     $('.con2').children().removeClass('on');

// })