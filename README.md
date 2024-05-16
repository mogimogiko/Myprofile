# つまずいたところ
## リンク内スクロールをなめらかにする
```
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
});

```
- どういうことか全くわからなかった
## 5．スクロールしてフェードインさせる

```
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

  ```

  - ほかの質問者を見て入力したのだが、codeの内容があまりよくわかっていない