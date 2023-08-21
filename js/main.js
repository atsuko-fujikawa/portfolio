document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});


/**
 * selectorに該当するタブを表示する関数
 */
const showTab = (selector) => {
  // 引数selectorの中身をコンソールで確認する
  console.log(selector);

  /* 1. タブの選択状態のリセット */

  // いったん、すべての.tabs-menu > liからactiveクラスを削除する
  $('.works-menu > li').removeClass('active');

  // いったん、すべての.tabs-content > sectionを非表示にする
  $('.works').hide();

  /* 2. 選択されたタブの表示 */
  // a要素のhref属性がselectorと一致するものの親要素にだけactiveクラスを付ける
  $(`.works-menu a[href="${selector}"]`)
    .parent()
    .addClass('active');

  // .tabs-content > sectionのうち、selectorに該当するものだけを表示する
  $(selector).show();
};

// タブがクリックされたらコンテンツを表示
$('.works-menu a').on('click', (e) => {
  // hrefへのページ遷移を止める
  e.preventDefault();

  // hrefの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブ（.tabs-menu a）を表す
  const selector = $(e.target).attr('href');
  showTab(selector);
});

// 初期状態として1番目のタブを表示
showTab('#outsourcing');