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
  
});