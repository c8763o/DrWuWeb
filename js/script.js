// $(function(){
//   $('.Btn4Animation').click(function(){
//     if($(this).text() == '動畫 ▸')
//       $(this).text('動畫 ▾')
//     else
//     $(this).text('動畫 ▸');
//   });
// });


// $(function(){
//   $('.wrong').click(function(){
//     if($(this).css('background-color','#000000'))
//       $(this).css('background-color','red')
//     else
//     $(this).css('background-color','#000000');
//   });
// });


$('.wrong').click(function(){
  $(this).css('background-color','#d33737').css('color','white').addClass('animate__animated').addClass('animate__shakeX');
});

$('.right').click(function(){
  $(this).css('background-color','#48cf4c').css('color','white').addClass('animate__animated').addClass('animate__tada');
});

