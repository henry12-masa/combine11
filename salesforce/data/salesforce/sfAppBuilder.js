window.quizData = window.quizData || {};
window.quizData.sfAppBuilder = [
  {
    "question": "【Salesforce Platform App Builder】問001：カスタムオブジェクトを作る主な理由はどれですか？（観点1）",
    "choices": [
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する",
      "ユーザーを削除する",
      "DNSを変更する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問002：主従関係の特徴はどれですか？（観点1）",
    "choices": [
      "親と子が完全に無関係",
      "必ず外部システム連携になる",
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問003：参照関係の特徴はどれですか？（観点1）",
    "choices": [
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問004：数式項目の用途はどれですか？（観点1）",
    "choices": [
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する",
      "Apexを保存する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問005：積み上げ集計項目が使える代表的な関係はどれですか？（観点1）",
    "choices": [
      "主従関係",
      "単独テキスト項目",
      "外部URL項目",
      "メール項目だけ"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問006：Lightningアプリビルダーでできることはどれですか？（観点1）",
    "choices": [
      "物理サーバーを追加する",
      "DNSを移管する",
      "OSを再インストールする",
      "ページにコンポーネントを配置する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問007：動的フォームの利点はどれですか？（観点1）",
    "choices": [
      "ユーザーを自動退職にする",
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問008：アプリケーションビルダーで考慮すべき権限はどれですか？（観点1）",
    "choices": [
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問009：承認プロセスが適する例はどれですか？（観点1）",
    "choices": [
      "高額割引の上長承認",
      "ログイン画面の背景変更",
      "外部DNS更新",
      "キーボード配列変更"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問010：レコードタイプを使う例はどれですか？（観点1）",
    "choices": [
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする",
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問011：選択リスト値セットの利点はどれですか？（観点1）",
    "choices": [
      "レコードを所有する",
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問012：モバイル対応で確認すべきことはどれですか？（観点1）",
    "choices": [
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙",
      "DNS名前解決"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問013：フローを使う代表例はどれですか？（観点1）",
    "choices": [
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する",
      "画像を圧縮する",
      "ネットワーク機器を初期化する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問014：パッケージの用途として近いものはどれですか？（観点1）",
    "choices": [
      "ユーザーパスワードを表示する",
      "全レコードを公開する",
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問015：アプリ設計で最初に行うべきことはどれですか？（観点1）",
    "choices": [
      "全項目を必須にする",
      "本番で直接試す",
      "業務要件とデータモデルを整理する",
      "色をランダムに決める"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問016：カスタムオブジェクトを作る主な理由はどれですか？（観点2）",
    "choices": [
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する",
      "ユーザーを削除する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問017：主従関係の特徴はどれですか？（観点2）",
    "choices": [
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係",
      "必ず外部システム連携になる",
      "参照整合性がない"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問018：参照関係の特徴はどれですか？（観点2）",
    "choices": [
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問019：数式項目の用途はどれですか？（観点2）",
    "choices": [
      "Apexを保存する",
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問020：積み上げ集計項目が使える代表的な関係はどれですか？（観点2）",
    "choices": [
      "メール項目だけ",
      "主従関係",
      "単独テキスト項目",
      "外部URL項目"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問021：Lightningアプリビルダーでできることはどれですか？（観点2）",
    "choices": [
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する",
      "DNSを移管する",
      "OSを再インストールする"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問022：動的フォームの利点はどれですか？（観点2）",
    "choices": [
      "データを全削除できる",
      "ユーザーを自動退職にする",
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問023：アプリケーションビルダーで考慮すべき権限はどれですか？（観点2）",
    "choices": [
      "PCのCPU型番",
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問024：承認プロセスが適する例はどれですか？（観点2）",
    "choices": [
      "キーボード配列変更",
      "高額割引の上長承認",
      "ログイン画面の背景変更",
      "外部DNS更新"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問025：レコードタイプを使う例はどれですか？（観点2）",
    "choices": [
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする",
      "添付ファイルを削除する"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問026：選択リスト値セットの利点はどれですか？（観点2）",
    "choices": [
      "数式を実行する",
      "レコードを所有する",
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問027：モバイル対応で確認すべきことはどれですか？（観点2）",
    "choices": [
      "DNS名前解決",
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問028：フローを使う代表例はどれですか？（観点2）",
    "choices": [
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する",
      "画像を圧縮する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問029：パッケージの用途として近いものはどれですか？（観点2）",
    "choices": [
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する",
      "全レコードを公開する",
      "ブラウザ履歴を消す"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問030：アプリ設計で最初に行うべきことはどれですか？（観点2）",
    "choices": [
      "色をランダムに決める",
      "全項目を必須にする",
      "本番で直接試す",
      "業務要件とデータモデルを整理する"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問031：カスタムオブジェクトを作る主な理由はどれですか？（観点3）",
    "choices": [
      "ユーザーを削除する",
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問032：主従関係の特徴はどれですか？（観点3）",
    "choices": [
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係",
      "必ず外部システム連携になる"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問033：参照関係の特徴はどれですか？（観点3）",
    "choices": [
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問034：数式項目の用途はどれですか？（観点3）",
    "choices": [
      "データを手動で暗号化する",
      "Apexを保存する",
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問035：積み上げ集計項目が使える代表的な関係はどれですか？（観点3）",
    "choices": [
      "外部URL項目",
      "メール項目だけ",
      "主従関係",
      "単独テキスト項目"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問036：Lightningアプリビルダーでできることはどれですか？（観点3）",
    "choices": [
      "OSを再インストールする",
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する",
      "DNSを移管する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問037：動的フォームの利点はどれですか？（観点3）",
    "choices": [
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる",
      "ユーザーを自動退職にする",
      "Apexを無効化する"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問038：アプリケーションビルダーで考慮すべき権限はどれですか？（観点3）",
    "choices": [
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番",
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問039：承認プロセスが適する例はどれですか？（観点3）",
    "choices": [
      "外部DNS更新",
      "キーボード配列変更",
      "高額割引の上長承認",
      "ログイン画面の背景変更"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問040：レコードタイプを使う例はどれですか？（観点3）",
    "choices": [
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問041：選択リスト値セットの利点はどれですか？（観点3）",
    "choices": [
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する",
      "レコードを所有する",
      "Apexをコンパイルする"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問042：モバイル対応で確認すべきことはどれですか？（観点3）",
    "choices": [
      "PCの壁紙",
      "DNS名前解決",
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問043：フローを使う代表例はどれですか？（観点3）",
    "choices": [
      "画像を圧縮する",
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問044：パッケージの用途として近いものはどれですか？（観点3）",
    "choices": [
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する",
      "全レコードを公開する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問045：アプリ設計で最初に行うべきことはどれですか？（観点3）",
    "choices": [
      "業務要件とデータモデルを整理する",
      "色をランダムに決める",
      "全項目を必須にする",
      "本番で直接試す"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問046：カスタムオブジェクトを作る主な理由はどれですか？（観点4）",
    "choices": [
      "Salesforceを停止する",
      "ユーザーを削除する",
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問047：主従関係の特徴はどれですか？（観点4）",
    "choices": [
      "必ず外部システム連携になる",
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問048：参照関係の特徴はどれですか？（観点4）",
    "choices": [
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問049：数式項目の用途はどれですか？（観点4）",
    "choices": [
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する",
      "Apexを保存する",
      "ユーザーを作成する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問050：積み上げ集計項目が使える代表的な関係はどれですか？（観点4）",
    "choices": [
      "単独テキスト項目",
      "外部URL項目",
      "メール項目だけ",
      "主従関係"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問051：Lightningアプリビルダーでできることはどれですか？（観点4）",
    "choices": [
      "DNSを移管する",
      "OSを再インストールする",
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問052：動的フォームの利点はどれですか？（観点4）",
    "choices": [
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる",
      "ユーザーを自動退職にする"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問053：アプリケーションビルダーで考慮すべき権限はどれですか？（観点4）",
    "choices": [
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番",
      "画像サイズ"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問054：承認プロセスが適する例はどれですか？（観点4）",
    "choices": [
      "ログイン画面の背景変更",
      "外部DNS更新",
      "キーボード配列変更",
      "高額割引の上長承認"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問055：レコードタイプを使う例はどれですか？（観点4）",
    "choices": [
      "すべての項目を非表示にする",
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問056：選択リスト値セットの利点はどれですか？（観点4）",
    "choices": [
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する",
      "レコードを所有する"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問057：モバイル対応で確認すべきことはどれですか？（観点4）",
    "choices": [
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙",
      "DNS名前解決",
      "メールサーバー容量"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問058：フローを使う代表例はどれですか？（観点4）",
    "choices": [
      "OSを再起動する",
      "画像を圧縮する",
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問059：パッケージの用途として近いものはどれですか？（観点4）",
    "choices": [
      "全レコードを公開する",
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問060：アプリ設計で最初に行うべきことはどれですか？（観点4）",
    "choices": [
      "本番で直接試す",
      "業務要件とデータモデルを整理する",
      "色をランダムに決める",
      "全項目を必須にする"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問061：カスタムオブジェクトを作る主な理由はどれですか？（観点5）",
    "choices": [
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する",
      "ユーザーを削除する",
      "DNSを変更する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問062：主従関係の特徴はどれですか？（観点5）",
    "choices": [
      "親と子が完全に無関係",
      "必ず外部システム連携になる",
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問063：参照関係の特徴はどれですか？（観点5）",
    "choices": [
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問064：数式項目の用途はどれですか？（観点5）",
    "choices": [
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する",
      "Apexを保存する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問065：積み上げ集計項目が使える代表的な関係はどれですか？（観点5）",
    "choices": [
      "主従関係",
      "単独テキスト項目",
      "外部URL項目",
      "メール項目だけ"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問066：Lightningアプリビルダーでできることはどれですか？（観点5）",
    "choices": [
      "物理サーバーを追加する",
      "DNSを移管する",
      "OSを再インストールする",
      "ページにコンポーネントを配置する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問067：動的フォームの利点はどれですか？（観点5）",
    "choices": [
      "ユーザーを自動退職にする",
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問068：アプリケーションビルダーで考慮すべき権限はどれですか？（観点5）",
    "choices": [
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問069：承認プロセスが適する例はどれですか？（観点5）",
    "choices": [
      "高額割引の上長承認",
      "ログイン画面の背景変更",
      "外部DNS更新",
      "キーボード配列変更"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問070：レコードタイプを使う例はどれですか？（観点5）",
    "choices": [
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする",
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問071：選択リスト値セットの利点はどれですか？（観点5）",
    "choices": [
      "レコードを所有する",
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問072：モバイル対応で確認すべきことはどれですか？（観点5）",
    "choices": [
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙",
      "DNS名前解決"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問073：フローを使う代表例はどれですか？（観点5）",
    "choices": [
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する",
      "画像を圧縮する",
      "ネットワーク機器を初期化する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問074：パッケージの用途として近いものはどれですか？（観点5）",
    "choices": [
      "ユーザーパスワードを表示する",
      "全レコードを公開する",
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問075：アプリ設計で最初に行うべきことはどれですか？（観点5）",
    "choices": [
      "全項目を必須にする",
      "本番で直接試す",
      "業務要件とデータモデルを整理する",
      "色をランダムに決める"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問076：カスタムオブジェクトを作る主な理由はどれですか？（観点6）",
    "choices": [
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する",
      "ユーザーを削除する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問077：主従関係の特徴はどれですか？（観点6）",
    "choices": [
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係",
      "必ず外部システム連携になる",
      "参照整合性がない"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問078：参照関係の特徴はどれですか？（観点6）",
    "choices": [
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問079：数式項目の用途はどれですか？（観点6）",
    "choices": [
      "Apexを保存する",
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問080：積み上げ集計項目が使える代表的な関係はどれですか？（観点6）",
    "choices": [
      "メール項目だけ",
      "主従関係",
      "単独テキスト項目",
      "外部URL項目"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問081：Lightningアプリビルダーでできることはどれですか？（観点6）",
    "choices": [
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する",
      "DNSを移管する",
      "OSを再インストールする"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問082：動的フォームの利点はどれですか？（観点6）",
    "choices": [
      "データを全削除できる",
      "ユーザーを自動退職にする",
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問083：アプリケーションビルダーで考慮すべき権限はどれですか？（観点6）",
    "choices": [
      "PCのCPU型番",
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問084：承認プロセスが適する例はどれですか？（観点6）",
    "choices": [
      "キーボード配列変更",
      "高額割引の上長承認",
      "ログイン画面の背景変更",
      "外部DNS更新"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問085：レコードタイプを使う例はどれですか？（観点6）",
    "choices": [
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする",
      "添付ファイルを削除する"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問086：選択リスト値セットの利点はどれですか？（観点6）",
    "choices": [
      "数式を実行する",
      "レコードを所有する",
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問087：モバイル対応で確認すべきことはどれですか？（観点6）",
    "choices": [
      "DNS名前解決",
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問088：フローを使う代表例はどれですか？（観点6）",
    "choices": [
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する",
      "画像を圧縮する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問089：パッケージの用途として近いものはどれですか？（観点6）",
    "choices": [
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する",
      "全レコードを公開する",
      "ブラウザ履歴を消す"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問090：アプリ設計で最初に行うべきことはどれですか？（観点6）",
    "choices": [
      "色をランダムに決める",
      "全項目を必須にする",
      "本番で直接試す",
      "業務要件とデータモデルを整理する"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問091：カスタムオブジェクトを作る主な理由はどれですか？（観点7）",
    "choices": [
      "ユーザーを削除する",
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問092：主従関係の特徴はどれですか？（観点7）",
    "choices": [
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係",
      "必ず外部システム連携になる"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問093：参照関係の特徴はどれですか？（観点7）",
    "choices": [
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問094：数式項目の用途はどれですか？（観点7）",
    "choices": [
      "データを手動で暗号化する",
      "Apexを保存する",
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問095：積み上げ集計項目が使える代表的な関係はどれですか？（観点7）",
    "choices": [
      "外部URL項目",
      "メール項目だけ",
      "主従関係",
      "単独テキスト項目"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問096：Lightningアプリビルダーでできることはどれですか？（観点7）",
    "choices": [
      "OSを再インストールする",
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する",
      "DNSを移管する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問097：動的フォームの利点はどれですか？（観点7）",
    "choices": [
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる",
      "ユーザーを自動退職にする",
      "Apexを無効化する"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問098：アプリケーションビルダーで考慮すべき権限はどれですか？（観点7）",
    "choices": [
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番",
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問099：承認プロセスが適する例はどれですか？（観点7）",
    "choices": [
      "外部DNS更新",
      "キーボード配列変更",
      "高額割引の上長承認",
      "ログイン画面の背景変更"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問100：レコードタイプを使う例はどれですか？（観点7）",
    "choices": [
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問101：選択リスト値セットの利点はどれですか？（観点7）",
    "choices": [
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する",
      "レコードを所有する",
      "Apexをコンパイルする"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問102：モバイル対応で確認すべきことはどれですか？（観点7）",
    "choices": [
      "PCの壁紙",
      "DNS名前解決",
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問103：フローを使う代表例はどれですか？（観点7）",
    "choices": [
      "画像を圧縮する",
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問104：パッケージの用途として近いものはどれですか？（観点7）",
    "choices": [
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する",
      "全レコードを公開する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問105：アプリ設計で最初に行うべきことはどれですか？（観点7）",
    "choices": [
      "業務要件とデータモデルを整理する",
      "色をランダムに決める",
      "全項目を必須にする",
      "本番で直接試す"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問106：カスタムオブジェクトを作る主な理由はどれですか？（観点8）",
    "choices": [
      "Salesforceを停止する",
      "ユーザーを削除する",
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問107：主従関係の特徴はどれですか？（観点8）",
    "choices": [
      "必ず外部システム連携になる",
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問108：参照関係の特徴はどれですか？（観点8）",
    "choices": [
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問109：数式項目の用途はどれですか？（観点8）",
    "choices": [
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する",
      "Apexを保存する",
      "ユーザーを作成する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問110：積み上げ集計項目が使える代表的な関係はどれですか？（観点8）",
    "choices": [
      "単独テキスト項目",
      "外部URL項目",
      "メール項目だけ",
      "主従関係"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問111：Lightningアプリビルダーでできることはどれですか？（観点8）",
    "choices": [
      "DNSを移管する",
      "OSを再インストールする",
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問112：動的フォームの利点はどれですか？（観点8）",
    "choices": [
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる",
      "ユーザーを自動退職にする"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問113：アプリケーションビルダーで考慮すべき権限はどれですか？（観点8）",
    "choices": [
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番",
      "画像サイズ"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問114：承認プロセスが適する例はどれですか？（観点8）",
    "choices": [
      "ログイン画面の背景変更",
      "外部DNS更新",
      "キーボード配列変更",
      "高額割引の上長承認"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問115：レコードタイプを使う例はどれですか？（観点8）",
    "choices": [
      "すべての項目を非表示にする",
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問116：選択リスト値セットの利点はどれですか？（観点8）",
    "choices": [
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する",
      "レコードを所有する"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問117：モバイル対応で確認すべきことはどれですか？（観点8）",
    "choices": [
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙",
      "DNS名前解決",
      "メールサーバー容量"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問118：フローを使う代表例はどれですか？（観点8）",
    "choices": [
      "OSを再起動する",
      "画像を圧縮する",
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問119：パッケージの用途として近いものはどれですか？（観点8）",
    "choices": [
      "全レコードを公開する",
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問120：アプリ設計で最初に行うべきことはどれですか？（観点8）",
    "choices": [
      "本番で直接試す",
      "業務要件とデータモデルを整理する",
      "色をランダムに決める",
      "全項目を必須にする"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問121：カスタムオブジェクトを作る主な理由はどれですか？（観点9）",
    "choices": [
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する",
      "ユーザーを削除する",
      "DNSを変更する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問122：主従関係の特徴はどれですか？（観点9）",
    "choices": [
      "親と子が完全に無関係",
      "必ず外部システム連携になる",
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問123：参照関係の特徴はどれですか？（観点9）",
    "choices": [
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問124：数式項目の用途はどれですか？（観点9）",
    "choices": [
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する",
      "Apexを保存する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問125：積み上げ集計項目が使える代表的な関係はどれですか？（観点9）",
    "choices": [
      "主従関係",
      "単独テキスト項目",
      "外部URL項目",
      "メール項目だけ"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問126：Lightningアプリビルダーでできることはどれですか？（観点9）",
    "choices": [
      "物理サーバーを追加する",
      "DNSを移管する",
      "OSを再インストールする",
      "ページにコンポーネントを配置する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問127：動的フォームの利点はどれですか？（観点9）",
    "choices": [
      "ユーザーを自動退職にする",
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問128：アプリケーションビルダーで考慮すべき権限はどれですか？（観点9）",
    "choices": [
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問129：承認プロセスが適する例はどれですか？（観点9）",
    "choices": [
      "高額割引の上長承認",
      "ログイン画面の背景変更",
      "外部DNS更新",
      "キーボード配列変更"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問130：レコードタイプを使う例はどれですか？（観点9）",
    "choices": [
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする",
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問131：選択リスト値セットの利点はどれですか？（観点9）",
    "choices": [
      "レコードを所有する",
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問132：モバイル対応で確認すべきことはどれですか？（観点9）",
    "choices": [
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙",
      "DNS名前解決"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問133：フローを使う代表例はどれですか？（観点9）",
    "choices": [
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する",
      "画像を圧縮する",
      "ネットワーク機器を初期化する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問134：パッケージの用途として近いものはどれですか？（観点9）",
    "choices": [
      "ユーザーパスワードを表示する",
      "全レコードを公開する",
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問135：アプリ設計で最初に行うべきことはどれですか？（観点9）",
    "choices": [
      "全項目を必須にする",
      "本番で直接試す",
      "業務要件とデータモデルを整理する",
      "色をランダムに決める"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問136：カスタムオブジェクトを作る主な理由はどれですか？（観点10）",
    "choices": [
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する",
      "ユーザーを削除する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問137：主従関係の特徴はどれですか？（観点10）",
    "choices": [
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係",
      "必ず外部システム連携になる",
      "参照整合性がない"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問138：参照関係の特徴はどれですか？（観点10）",
    "choices": [
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問139：数式項目の用途はどれですか？（観点10）",
    "choices": [
      "Apexを保存する",
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問140：積み上げ集計項目が使える代表的な関係はどれですか？（観点10）",
    "choices": [
      "メール項目だけ",
      "主従関係",
      "単独テキスト項目",
      "外部URL項目"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問141：Lightningアプリビルダーでできることはどれですか？（観点10）",
    "choices": [
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する",
      "DNSを移管する",
      "OSを再インストールする"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問142：動的フォームの利点はどれですか？（観点10）",
    "choices": [
      "データを全削除できる",
      "ユーザーを自動退職にする",
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問143：アプリケーションビルダーで考慮すべき権限はどれですか？（観点10）",
    "choices": [
      "PCのCPU型番",
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問144：承認プロセスが適する例はどれですか？（観点10）",
    "choices": [
      "キーボード配列変更",
      "高額割引の上長承認",
      "ログイン画面の背景変更",
      "外部DNS更新"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問145：レコードタイプを使う例はどれですか？（観点10）",
    "choices": [
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする",
      "添付ファイルを削除する"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問146：選択リスト値セットの利点はどれですか？（観点10）",
    "choices": [
      "数式を実行する",
      "レコードを所有する",
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問147：モバイル対応で確認すべきことはどれですか？（観点10）",
    "choices": [
      "DNS名前解決",
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問148：フローを使う代表例はどれですか？（観点10）",
    "choices": [
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する",
      "画像を圧縮する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問149：パッケージの用途として近いものはどれですか？（観点10）",
    "choices": [
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する",
      "全レコードを公開する",
      "ブラウザ履歴を消す"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問150：アプリ設計で最初に行うべきことはどれですか？（観点10）",
    "choices": [
      "色をランダムに決める",
      "全項目を必須にする",
      "本番で直接試す",
      "業務要件とデータモデルを整理する"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問151：カスタムオブジェクトを作る主な理由はどれですか？（観点11）",
    "choices": [
      "ユーザーを削除する",
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する",
      "Salesforceを停止する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問152：主従関係の特徴はどれですか？（観点11）",
    "choices": [
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係",
      "必ず外部システム連携になる"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問153：参照関係の特徴はどれですか？（観点11）",
    "choices": [
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ",
      "積み上げ集計が標準で常に可能"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問154：数式項目の用途はどれですか？（観点11）",
    "choices": [
      "データを手動で暗号化する",
      "Apexを保存する",
      "ユーザーを作成する",
      "他項目の値から表示値を自動計算する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問155：積み上げ集計項目が使える代表的な関係はどれですか？（観点11）",
    "choices": [
      "外部URL項目",
      "メール項目だけ",
      "主従関係",
      "単独テキスト項目"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問156：Lightningアプリビルダーでできることはどれですか？（観点11）",
    "choices": [
      "OSを再インストールする",
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する",
      "DNSを移管する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問157：動的フォームの利点はどれですか？（観点11）",
    "choices": [
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる",
      "ユーザーを自動退職にする",
      "Apexを無効化する"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問158：アプリケーションビルダーで考慮すべき権限はどれですか？（観点11）",
    "choices": [
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番",
      "画像サイズ",
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問159：承認プロセスが適する例はどれですか？（観点11）",
    "choices": [
      "外部DNS更新",
      "キーボード配列変更",
      "高額割引の上長承認",
      "ログイン画面の背景変更"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問160：レコードタイプを使う例はどれですか？（観点11）",
    "choices": [
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする",
      "すべての項目を非表示にする"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問161：選択リスト値セットの利点はどれですか？（観点11）",
    "choices": [
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する",
      "レコードを所有する",
      "Apexをコンパイルする"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問162：モバイル対応で確認すべきことはどれですか？（観点11）",
    "choices": [
      "PCの壁紙",
      "DNS名前解決",
      "メールサーバー容量",
      "モバイル画面でのコンポーネント表示と操作性"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問163：フローを使う代表例はどれですか？（観点11）",
    "choices": [
      "画像を圧縮する",
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する",
      "OSを再起動する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問164：パッケージの用途として近いものはどれですか？（観点11）",
    "choices": [
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する",
      "全レコードを公開する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問165：アプリ設計で最初に行うべきことはどれですか？（観点11）",
    "choices": [
      "業務要件とデータモデルを整理する",
      "色をランダムに決める",
      "全項目を必須にする",
      "本番で直接試す"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問166：カスタムオブジェクトを作る主な理由はどれですか？（観点12）",
    "choices": [
      "Salesforceを停止する",
      "ユーザーを削除する",
      "DNSを変更する",
      "標準オブジェクトにない業務データを管理する"
    ],
    "answer": "標準オブジェクトにない業務データを管理する",
    "explanation": "独自業務に合わせたデータモデルを作れます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問167：主従関係の特徴はどれですか？（観点12）",
    "choices": [
      "必ず外部システム連携になる",
      "参照整合性がない",
      "子レコードの所有権や共有が親に依存する",
      "親と子が完全に無関係"
    ],
    "answer": "子レコードの所有権や共有が親に依存する",
    "explanation": "積み上げ集計項目も利用できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問168：参照関係の特徴はどれですか？（観点12）",
    "choices": [
      "積み上げ集計が標準で常に可能",
      "比較的疎結合にレコードを関連付ける",
      "必ず親が削除されると子も削除",
      "必ず所有者が同じ"
    ],
    "answer": "比較的疎結合にレコードを関連付ける",
    "explanation": "柔軟な関連付けに使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問169：数式項目の用途はどれですか？（観点12）",
    "choices": [
      "他項目の値から表示値を自動計算する",
      "データを手動で暗号化する",
      "Apexを保存する",
      "ユーザーを作成する"
    ],
    "answer": "他項目の値から表示値を自動計算する",
    "explanation": "リアルタイムに計算結果を表示します。"
  },
  {
    "question": "【Salesforce Platform App Builder】問170：積み上げ集計項目が使える代表的な関係はどれですか？（観点12）",
    "choices": [
      "単独テキスト項目",
      "外部URL項目",
      "メール項目だけ",
      "主従関係"
    ],
    "answer": "主従関係",
    "explanation": "親側で子の合計や件数を集計できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問171：Lightningアプリビルダーでできることはどれですか？（観点12）",
    "choices": [
      "DNSを移管する",
      "OSを再インストールする",
      "ページにコンポーネントを配置する",
      "物理サーバーを追加する"
    ],
    "answer": "ページにコンポーネントを配置する",
    "explanation": "画面構成をローコードで調整できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問172：動的フォームの利点はどれですか？（観点12）",
    "choices": [
      "Apexを無効化する",
      "項目やセクションの表示条件を細かく制御できる",
      "データを全削除できる",
      "ユーザーを自動退職にする"
    ],
    "answer": "項目やセクションの表示条件を細かく制御できる",
    "explanation": "利用者に必要な項目だけ見せやすくなります。"
  },
  {
    "question": "【Salesforce Platform App Builder】問173：アプリケーションビルダーで考慮すべき権限はどれですか？（観点12）",
    "choices": [
      "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
      "ブラウザのズーム倍率だけ",
      "PCのCPU型番",
      "画像サイズ"
    ],
    "answer": "オブジェクト権限、項目レベルセキュリティ、レコードアクセス",
    "explanation": "見える画面とアクセス権の整合が必要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問174：承認プロセスが適する例はどれですか？（観点12）",
    "choices": [
      "ログイン画面の背景変更",
      "外部DNS更新",
      "キーボード配列変更",
      "高額割引の上長承認"
    ],
    "answer": "高額割引の上長承認",
    "explanation": "段階的な業務承認に使います。"
  },
  {
    "question": "【Salesforce Platform App Builder】問175：レコードタイプを使う例はどれですか？（観点12）",
    "choices": [
      "すべての項目を非表示にする",
      "添付ファイルを削除する",
      "法人顧客と個人顧客で入力項目やプロセスを分ける",
      "同じ画面を全員固定にする"
    ],
    "answer": "法人顧客と個人顧客で入力項目やプロセスを分ける",
    "explanation": "業務パターンごとの差分を表現できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問176：選択リスト値セットの利点はどれですか？（観点12）",
    "choices": [
      "Apexをコンパイルする",
      "複数項目で共通の選択肢を再利用できる",
      "数式を実行する",
      "レコードを所有する"
    ],
    "answer": "複数項目で共通の選択肢を再利用できる",
    "explanation": "値管理を一元化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問177：モバイル対応で確認すべきことはどれですか？（観点12）",
    "choices": [
      "モバイル画面でのコンポーネント表示と操作性",
      "PCの壁紙",
      "DNS名前解決",
      "メールサーバー容量"
    ],
    "answer": "モバイル画面でのコンポーネント表示と操作性",
    "explanation": "Salesforceモバイルで使いやすい設計が重要です。"
  },
  {
    "question": "【Salesforce Platform App Builder】問178：フローを使う代表例はどれですか？（観点12）",
    "choices": [
      "OSを再起動する",
      "画像を圧縮する",
      "ネットワーク機器を初期化する",
      "画面入力から複数レコードを作成・更新する"
    ],
    "answer": "画面入力から複数レコードを作成・更新する",
    "explanation": "ローコードでプロセス自動化できます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問179：パッケージの用途として近いものはどれですか？（観点12）",
    "choices": [
      "全レコードを公開する",
      "ブラウザ履歴を消す",
      "アプリや設定をまとめて配布する",
      "ユーザーパスワードを表示する"
    ],
    "answer": "アプリや設定をまとめて配布する",
    "explanation": "再利用や配布に利用されます。"
  },
  {
    "question": "【Salesforce Platform App Builder】問180：アプリ設計で最初に行うべきことはどれですか？（観点12）",
    "choices": [
      "本番で直接試す",
      "業務要件とデータモデルを整理する",
      "色をランダムに決める",
      "全項目を必須にする"
    ],
    "answer": "業務要件とデータモデルを整理する",
    "explanation": "要件整理が手戻り防止になります。"
  }
];
