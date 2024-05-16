$(function () {
  // メインビジュアルをカルーセルにする
  $('.carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    fade: true,
  });

  // ホバー時に不透明にする
  $('.hover').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    },100);
  });

  // マウスアウト時に不透明度を戻す
  $('.hover').on('mouseout', function () {
    $(this).animate({
      opacity: 1,
    },200);
  });

  // 一定量スクロールしたらTOPボタン
  $(window).on('scroll', function () {
    if (100 < $(this).scrollTop()) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });

  // ページ内リンクのスクロールをなめらかにする
  // ♯で始まるアンカーをクリックしたときの処理
  $('a[href^="#"]').on('click', function (e) {

    // デフォルトのアクションを防止
    e.preventDefault();

    // クリックされたリンクのhref属性からアンカー名を取得
    var id = $(this).attr('href');
    
    // 移動先のアンカーのページ上を取得
    var target = $(id).offset().top;

    // 滑らかにスクロールする
    $('html, body').animate({scrollTop: target}, 600);
  });


  // 
  // sectionをスクロールしたらフェードインさせる
  $(window).on('scroll', function () {
    // 高さを取得
    const winH = $(window).height();
    const scroll = $(window).scrollTop();

    // sectionの位置を判定しフェードイン
    $('section').each(function () {
      const tPosition = $(this).offset().top;
      if (scroll > tPosition - winH + 100) {
        $(this).addClass('fadein');
      }
    });
  });

  // モーダル
  $('.modalimg').on('click', function () {
    const imgSrc = $(this).children().attr('src');
    $('.bigimg').children().attr('src',imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    return false;
  });

  $('#closebtn').on('click', function () {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    $('#closebtn').css('display', 'inline');
    return false;
  })
});