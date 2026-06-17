# Salesforce資格クイズ

Salesforce Associate / Administrator / Advanced Administrator / Platform App Builder / Platform Developer I / AI Associate / Data Cloud Consultant 対応のクイズサイトです。

## 仕様

- 7カテゴリ対応
- 各カテゴリ180問
- 表示は50問ランダム
- 問題文重複を除外して出題
- `window.quizData.sfAssociate` のようにJSから読み込み
- 回答後、自動で次の問題へ移動
- 左右にAdSense広告枠あり
- PC / スマホ対応

## ファイル構成

```text
index.html
script.js
style.css
data/
  salesforce/
    sfAssociate.js
    sfAdmin.js
    sfAdvancedAdmin.js
    sfAppBuilder.js
    sfDevI.js
    sfAIAssociate.js
    sfDataCloud.js
```

## URL例

```text
index.html
index.html?type=sfAssociate
index.html?type=sfAdmin
index.html?type=sfAdvancedAdmin
index.html?type=sfAppBuilder
index.html?type=sfDevI
index.html?type=sfAIAssociate
index.html?type=sfDataCloud
```
