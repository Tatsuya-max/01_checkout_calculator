# 01_checkout_calculator
ダーツの"01(ゼロワン)"と呼ばれるゲーム用の得点計算アプリ。
プロジェクト参画前にAngularの公式チュートリアルを学習する際、どうせならと簡単なアプリを作成。  
  
Stackblitz.comにてブラウザ上で開発したので、  
https://angular-ivy-3m3nw4.stackblitz.io  
に飛ぶと、そのままアプリが起動します。  
※画面レイアウトの関係により、スマホでの閲覧を推奨。

使用方法
 - 'Remaining score'に0〜180の数字（残りスコア）を入力
ゲームのオプションを2つ選択。
'GO'を押す。
3投以内で上がり手（スコアがちょうど0になる）がある場合は、その組み合わせが表示される。なければ"No finish."と表示。
シンプルな画面・機能だが、直感的な見やすさと使いやすさにこだわった。

 - スコア入力欄
フォーカス時の初期化機能をもたせ、Resetボタンやスコア削除の手間を省略。
不適当な文字を入力した場合、フォーカスアウト時に初期化がかかるよう設計。
余計な情報量を減らすため、スマホでの入力を電話番号形式にした。
・GOボタン
未入力・未設定の項目がある場合にはエラーメッセージを表示。
