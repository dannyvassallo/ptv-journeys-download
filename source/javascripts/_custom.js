// ADD YOUR JS HERE
var proto = 'https://',
s3 = 's3.amazonaws.com/',
bucket= 'myfangate.com/',
folder = 'ptv-journeys/',
rando = 'lRJiZhvtXg/',
filename = 'yVBsF35Gzo',
ext = '.zip';

function IhTs8iP6Sk(){
  var newLink = $('<a>');
  newLink.attr('href', proto+s3+bucket+folder+rando+filename+ext);
  newLink.addClass('tB484069xA');
  newLink.html('hjdkhsdjasdsada');
  newLink.css({
    'position':'absolute',
    'margin-left':'-99999px',
    'top':'-9999999',
    'left':'-99999px',
    'display':'none'
  });
  $('body').append(newLink);
  $('.tB484069xA').trigger('click');
  setTimeout(function(){
    $('.tB484069xA').remove();
  }, 1000);
}

$('body').on('click', '.tB484069xA', function(e){
  e.preventDefault();  //stop the browser from following
  window.location.href = $(this).attr('href');
});

$('body').on('click', '.r3466056248', function(){
  IhTs8iP6Sk();
});


// Fix inputs
$('input').focus(function(){
  if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").addClass('active');
  }
}).blur(function(){
  if($(this).val() != ''){
    // do nothing
  } else if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  } else {
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  }
});


// function resizeHeader(){
//   var newHeight = $('.governor').height() / 2,
//   windowW = $(window).width();
//   if(windowW > 599){
//     $('#journeys').css('height', newHeight);
//   } else {
//     $('#journeys').css({'height':'auto', 'margin-top': '20px'});
//   }
// }

// $(function(){
//   // $(document).on('click', '.caret', function(){
//   //   $('.select-dropdown').trigger('click');
//   // });
//
//   $(".governor").load(function() {
//     // resizeHeader();
//   }).attr('src', 'https://s3.amazonaws.com/myfangate.com/ptv-journeys/band.png');
//
//   // var onMouseDown = function(e) {
//   //   // preventing the default still allows the scroll, but blocks the blur.
//   //   // We're inside the scrollbar if the clientX is >= the clientWidth.
//   //   if (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) {
//   //     e.preventDefault();
//   //   }
//   // };
//   //$newSelect.on('mousedown', onMouseDown);
//   // $('select').siblings('input.select-dropdown').on('mousedown', onMouseDown);
//
// });

function resizeForm(){
  var hh = $('#header').height(),
  formH = $('#form-zone').height(),
  newH = formH + ($(window).height() - (hh + formH) - 170);
  $('#form-zone').height(newH);
}

// $(window).resize(function(){
//   resizeHeader();
// });
