# Tableau・IBMデータ分析資格クイズ

Tableau Certified Data Analyst / Tableau Certified Consultant / IBM Data Analyst Professional Certificate / IBM Data Science Professional Certificate 対応のクイズサイトです。

## 仕様

- 4カテゴリ対応
- 各カテゴリ180問
- 表示は50問ランダム
- 問題文重複を除外して出題
- `window.quizData.tableauDataAnalyst` のようにJSから読み込み
- 回答後、自動で次の問題へ移動
- 左右にAdSense広告枠あり
- PC / スマホ対応

## ファイル構成

```text
index.html
script.js
style.css
data/
  analytics/
    tableau-data-analyst.js
    tableau-consultant.js
    ibm-data-analyst.js
    ibm-data-science.js
```

## URL例

```text
index.html
index.html?type=tableauDataAnalyst
index.html?type=tableauConsultant
index.html?type=ibmDataAnalyst
index.html?type=ibmDataScience
```
# IBM-Data-quiz
