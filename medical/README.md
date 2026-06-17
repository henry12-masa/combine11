# 保育・医療福祉資格クイズ

保育士 / 調剤薬局事務 / 医療事務 / 歯科助手認定 / 福祉用具専門相談員 対応のクイズサイトです。

## 仕様

- 5カテゴリ対応
- 各カテゴリ180問
- 表示は50問ランダム
- 問題文重複を除外して出題
- `window.quizData.hoikushi` のようにJSから読み込み
- 回答後、自動で次の問題へ移動
- 左右にAdSense広告枠あり
- PC / スマホ対応

## ファイル構成

```text
index.html
script.js
style.css
data/
  medical/
    hoikushi.js
    dispensing-pharmacy.js
    medical-office.js
    dental-assistant.js
    welfare-equipment.js
```

## URL例

```text
index.html
index.html?type=hoikushi
index.html?type=dispensingPharmacy
index.html?type=medicalOffice
index.html?type=dentalAssistant
index.html?type=welfareEquipment
```
