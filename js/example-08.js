$(document).ready(function(){
    console.log('hello');
    // 확인용
    var box1 = $('.box1');
    var btn = $('.btn');

    btn.on('click', function(){
        console.log('ok');
        // 확인용
        box1.toggleClass('box-act');
    });
});



  // if (box1.hasClass('box-act)){box1.removeClass('bac-act');} elsed{box1.addC;ass('box-act);} 