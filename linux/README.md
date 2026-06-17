# Oracle Linux・SUSE資格クイズ

Oracle Linux Certified Professional / SUSE Certified Administrator / SUSE Certified Engineer 対応のクイズサイトです。

## 仕様

- 3カテゴリ対応
- 各カテゴリ180問
- 表示は50問ランダム
- 問題文重複を除外して出題
- `window.quizData.oracleLinuxOcp` のようにJSから読み込み
- 回答後、自動で次の問題へ移動
- 左右にAdSense広告枠あり
- PC / スマホ対応

## ファイル構成

```text
index.html
script.js
style.css
data/
  linux/
    oracle-linux-ocp.js
    suse-sca.js
    suse-sce.js
```

## URL例

```text
index.html
index.html?type=oracleLinuxOcp
index.html?type=suseSca
index.html?type=suseSce
```
