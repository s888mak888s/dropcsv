# TEST dropzonejs, webpack and hot deploy

## webpackについて
- `nodejs`をインストール
- `nodejs`をインストールしたら一緒についてくる`npm`で`webpack`をインストール  
`sudo npm install webpack -g`
- `npm init`して`package.json`を作成する  
`npm install jquery --save`  
`npm install dropzone --save`  
上記でjqueryとdropzonejsをプロジェクトに読み込み  
- `webpack.config.js`を作成して設定を記述
- 一行目の`var webpack = require("webpack");`でエラーが出るので`npm install webpack --save-dev`を実行しておく
- `new webpack.optimize.UglifyJsPlugin()`はjavascriptのminifyしてくれるやつ
- webpack使うことでjs内でrequireが利用できるようになる
- requireを書いたjavascriptは`webpack`コマンドでコンパイル（？）する必要がある
- ファイルが一つにまとまるのでよろしい
- `source-map`はよくわからん。。

## dropzonejsについて
- `dropzone.min.css`を読み込ませる
- クラス名に`dropzone`を持った`<form>`タグを設置する
- あとはjavascript側でdropzoneが読み込まれれば自動的にdropエリアが描画される

## hot deployについて
- `build.gradle`の`compile("org.springframework.boot:spring-boot-devtools")`部分
- `application.yml`でthymeleafのキャッシュもoffにしておく
