# Note Number Dictionary

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://note-number-dictionary.web.app/

C60、C5、mid2C などの各種ピッチ名の対応を確認するための Web アプリです。  
以下の表記方式に対応しています。

| 表記方式        | 中央 C の表記 |
| :-------------- | :-----------: |
| MIDI ノート番号 |      60       |
| 国際式          |      C4       |
| YAMAHA 式       |      C3       |
| 日本ローカル式  |     mid2C     |

# 開発方法

本アプリは [Create React App](https://github.com/facebook/create-react-app) を用いて構築されており、それにより設定された開発用スクリプトが利用できます。

# 開発モードで実行

以下コマンドを実行した上で、[http://localhost:3000](http://localhost:3000)を閲覧します。

```shell
yarn start
```

# テストを実行

以下コマンドを実行します。

```shell
yarn test
```

# ビルドを実行

以下コマンドを実行すると、`build`フォルダにビルドされたファイル群が生成されます。

```shell
yarn build
```
