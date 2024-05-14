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
