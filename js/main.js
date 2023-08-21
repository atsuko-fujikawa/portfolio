// サイドメニュー
document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});

// selectorに該当するタブを表示する関数

const showTab = (selector) => {

  // 引数selectorの中身をコンソールで確認する
  console.log(selector);

  /* 1. タブの選択状態のリセット */

  // いったん、すべてのliからactiveクラスを削除する
  const tabList = document.getElementsByClassName('works-menu__tab');
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].classList.remove('active');
  }

  // いったん、すべての.worksを非表示にする
  const tabWorks = document.getElementsByClassName('works');
  for (let i = 0; i < tabWorks.length; i++) {
    tabWorks[i].style.display = 'none';
  }

  /* 2. 選択されたタブの表示 */

  // a要素のhref属性がselectorと一致するものの親要素にだけactiveクラスを付ける
  const tabA = document.getElementsByClassName('works-menu__a');
  for (let i = 0; i < tabA.length; i++) {
    const any = tabA[i].href.split('#');
    const url = '#' + any[1];

    if (url === selector) {
      tabA[i].parentElement.classList.add('active');
    }
  }
  // .tabs-content > sectionのうち、selectorに該当するものだけを表示する
  const selectC = document.getElementById(selector.substr(1));
  selectC.style.display = 'block';

};

// タブがクリックされたらコンテンツを表示
const tabButton = document.getElementsByClassName('works-menu__a');

for (let i = 0; i < tabButton.length; i++) {

  tabButton[i].addEventListener('click',(e) => {

    e.preventDefault();
    // hrefの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブを表す
    const any = tabButton[i].href.split('#')
    const selector = '#' + any[1];
    showTab(selector);
  });
}

// 初期状態として1番目のタブを表示
showTab('#outsourcing');