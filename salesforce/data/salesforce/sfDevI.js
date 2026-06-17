window.quizData = window.quizData || {};
window.quizData.sfDevI = [
  {
    "question": "【Salesforce Platform Developer I】問001：Apexとは何ですか？（観点1）",
    "choices": [
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト",
      "DNSプロトコル",
      "OSカーネル"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問002：SOQLの用途はどれですか？（観点1）",
    "choices": [
      "OSプロセスを監視する",
      "CSSを圧縮する",
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問003：DML操作の例はどれですか？（観点1）",
    "choices": [
      "margin、padding、display",
      "GET、POSTのHTML属性",
      "insert、update、delete",
      "ping、traceroute、nslookup"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問004：トリガの実行タイミング例はどれですか？（観点1）",
    "choices": [
      "during HTML",
      "before insert や after update",
      "before CSS",
      "after DNS"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問005：ガバナ制限の目的はどれですか？（観点1）",
    "choices": [
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため",
      "画面色を固定するため",
      "DNS応答を速くするため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問006：バルク化で重要な考え方はどれですか？（観点1）",
    "choices": [
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする",
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問007：Apexテストで一般的に必要なカバー率はどれですか？（観点1）",
    "choices": [
      "100%以外は保存不可",
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問008：@AuraEnabledの用途はどれですか？（観点1）",
    "choices": [
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る",
      "DNSを更新する"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問009：LWCとは何ですか？（観点1）",
    "choices": [
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス",
      "データローダの別名",
      "外部ID項目"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問010：SOSLが向く用途はどれですか？（観点1）",
    "choices": [
      "単一オブジェクトの厳密集計だけ",
      "CSS適用",
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問011：with sharing の効果はどれですか？（観点1）",
    "choices": [
      "テストを無効化する",
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問012：非同期Apexの例はどれですか？（観点1）",
    "choices": [
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ",
      "CSSセレクタ"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問013：try-catchの主な目的はどれですか？（観点1）",
    "choices": [
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ",
      "CSSを適用する",
      "ユーザーを作る"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問014：Apexでテストデータを作る理由はどれですか？（観点1）",
    "choices": [
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため",
      "DNSを作るため",
      "テストを既存データに依存させないため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問015：メタデータAPIや変更セットの目的はどれですか？（観点1）",
    "choices": [
      "画像を保存する",
      "メールを送るだけ",
      "設定やコードを組織間で移行する",
      "レコードを印刷する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問016：Apexとは何ですか？（観点2）",
    "choices": [
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト",
      "DNSプロトコル"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問017：SOQLの用途はどれですか？（観点2）",
    "choices": [
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する",
      "CSSを圧縮する",
      "DNSを登録する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問018：DML操作の例はどれですか？（観点2）",
    "choices": [
      "ping、traceroute、nslookup",
      "margin、padding、display",
      "GET、POSTのHTML属性",
      "insert、update、delete"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問019：トリガの実行タイミング例はどれですか？（観点2）",
    "choices": [
      "after DNS",
      "during HTML",
      "before insert や after update",
      "before CSS"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問020：ガバナ制限の目的はどれですか？（観点2）",
    "choices": [
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため",
      "画面色を固定するため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問021：バルク化で重要な考え方はどれですか？（観点2）",
    "choices": [
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする",
      "CSSだけで処理する"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問022：Apexテストで一般的に必要なカバー率はどれですか？（観点2）",
    "choices": [
      "1%以上で十分",
      "100%以外は保存不可",
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問023：@AuraEnabledの用途はどれですか？（観点2）",
    "choices": [
      "DNSを更新する",
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問024：LWCとは何ですか？（観点2）",
    "choices": [
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス",
      "データローダの別名"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問025：SOSLが向く用途はどれですか？（観点2）",
    "choices": [
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ",
      "CSS適用",
      "DNS登録"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問026：with sharing の効果はどれですか？（観点2）",
    "choices": [
      "全権限を無視する",
      "テストを無効化する",
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問027：非同期Apexの例はどれですか？（観点2）",
    "choices": [
      "CSSセレクタ",
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問028：try-catchの主な目的はどれですか？（観点2）",
    "choices": [
      "ユーザーを作る",
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ",
      "CSSを適用する"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問029：Apexでテストデータを作る理由はどれですか？（観点2）",
    "choices": [
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため",
      "DNSを作るため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問030：メタデータAPIや変更セットの目的はどれですか？（観点2）",
    "choices": [
      "レコードを印刷する",
      "画像を保存する",
      "メールを送るだけ",
      "設定やコードを組織間で移行する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問031：Apexとは何ですか？（観点3）",
    "choices": [
      "DNSプロトコル",
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問032：SOQLの用途はどれですか？（観点3）",
    "choices": [
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する",
      "CSSを圧縮する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問033：DML操作の例はどれですか？（観点3）",
    "choices": [
      "insert、update、delete",
      "ping、traceroute、nslookup",
      "margin、padding、display",
      "GET、POSTのHTML属性"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問034：トリガの実行タイミング例はどれですか？（観点3）",
    "choices": [
      "before CSS",
      "after DNS",
      "during HTML",
      "before insert や after update"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問035：ガバナ制限の目的はどれですか？（観点3）",
    "choices": [
      "画面色を固定するため",
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問036：バルク化で重要な考え方はどれですか？（観点3）",
    "choices": [
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問037：Apexテストで一般的に必要なカバー率はどれですか？（観点3）",
    "choices": [
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分",
      "100%以外は保存不可",
      "カバー率は存在しない"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問038：@AuraEnabledの用途はどれですか？（観点3）",
    "choices": [
      "権限セットを作る",
      "DNSを更新する",
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問039：LWCとは何ですか？（観点3）",
    "choices": [
      "データローダの別名",
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問040：SOSLが向く用途はどれですか？（観点3）",
    "choices": [
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ",
      "CSS適用"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問041：with sharing の効果はどれですか？（観点3）",
    "choices": [
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する",
      "テストを無効化する",
      "SOQLを禁止する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問042：非同期Apexの例はどれですか？（観点3）",
    "choices": [
      "HTMLタグ",
      "CSSセレクタ",
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問043：try-catchの主な目的はどれですか？（観点3）",
    "choices": [
      "CSSを適用する",
      "ユーザーを作る",
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問044：Apexでテストデータを作る理由はどれですか？（観点3）",
    "choices": [
      "DNSを作るため",
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問045：メタデータAPIや変更セットの目的はどれですか？（観点3）",
    "choices": [
      "設定やコードを組織間で移行する",
      "レコードを印刷する",
      "画像を保存する",
      "メールを送るだけ"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問046：Apexとは何ですか？（観点4）",
    "choices": [
      "画像編集ソフト",
      "DNSプロトコル",
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問047：SOQLの用途はどれですか？（観点4）",
    "choices": [
      "CSSを圧縮する",
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問048：DML操作の例はどれですか？（観点4）",
    "choices": [
      "GET、POSTのHTML属性",
      "insert、update、delete",
      "ping、traceroute、nslookup",
      "margin、padding、display"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問049：トリガの実行タイミング例はどれですか？（観点4）",
    "choices": [
      "before insert や after update",
      "before CSS",
      "after DNS",
      "during HTML"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問050：ガバナ制限の目的はどれですか？（観点4）",
    "choices": [
      "ユーザー名を短くするため",
      "画面色を固定するため",
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問051：バルク化で重要な考え方はどれですか？（観点4）",
    "choices": [
      "全処理を匿名Apexにする",
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問052：Apexテストで一般的に必要なカバー率はどれですか？（観点4）",
    "choices": [
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分",
      "100%以外は保存不可"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問053：@AuraEnabledの用途はどれですか？（観点4）",
    "choices": [
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る",
      "DNSを更新する",
      "CSSを削除する"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問054：LWCとは何ですか？（観点4）",
    "choices": [
      "ログ監視サービス",
      "データローダの別名",
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問055：SOSLが向く用途はどれですか？（観点4）",
    "choices": [
      "CSS適用",
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問056：with sharing の効果はどれですか？（観点4）",
    "choices": [
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する",
      "テストを無効化する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問057：非同期Apexの例はどれですか？（観点4）",
    "choices": [
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ",
      "CSSセレクタ",
      "DNSゾーン"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問058：try-catchの主な目的はどれですか？（観点4）",
    "choices": [
      "SOQLを速くするだけ",
      "CSSを適用する",
      "ユーザーを作る",
      "例外を捕捉し適切に処理する"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問059：Apexでテストデータを作る理由はどれですか？（観点4）",
    "choices": [
      "ユーザーパスワードを読むため",
      "DNSを作るため",
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問060：メタデータAPIや変更セットの目的はどれですか？（観点4）",
    "choices": [
      "メールを送るだけ",
      "設定やコードを組織間で移行する",
      "レコードを印刷する",
      "画像を保存する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問061：Apexとは何ですか？（観点5）",
    "choices": [
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト",
      "DNSプロトコル",
      "OSカーネル"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問062：SOQLの用途はどれですか？（観点5）",
    "choices": [
      "OSプロセスを監視する",
      "CSSを圧縮する",
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問063：DML操作の例はどれですか？（観点5）",
    "choices": [
      "margin、padding、display",
      "GET、POSTのHTML属性",
      "insert、update、delete",
      "ping、traceroute、nslookup"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問064：トリガの実行タイミング例はどれですか？（観点5）",
    "choices": [
      "during HTML",
      "before insert や after update",
      "before CSS",
      "after DNS"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問065：ガバナ制限の目的はどれですか？（観点5）",
    "choices": [
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため",
      "画面色を固定するため",
      "DNS応答を速くするため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問066：バルク化で重要な考え方はどれですか？（観点5）",
    "choices": [
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする",
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問067：Apexテストで一般的に必要なカバー率はどれですか？（観点5）",
    "choices": [
      "100%以外は保存不可",
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問068：@AuraEnabledの用途はどれですか？（観点5）",
    "choices": [
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る",
      "DNSを更新する"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問069：LWCとは何ですか？（観点5）",
    "choices": [
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス",
      "データローダの別名",
      "外部ID項目"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問070：SOSLが向く用途はどれですか？（観点5）",
    "choices": [
      "単一オブジェクトの厳密集計だけ",
      "CSS適用",
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問071：with sharing の効果はどれですか？（観点5）",
    "choices": [
      "テストを無効化する",
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問072：非同期Apexの例はどれですか？（観点5）",
    "choices": [
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ",
      "CSSセレクタ"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問073：try-catchの主な目的はどれですか？（観点5）",
    "choices": [
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ",
      "CSSを適用する",
      "ユーザーを作る"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問074：Apexでテストデータを作る理由はどれですか？（観点5）",
    "choices": [
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため",
      "DNSを作るため",
      "テストを既存データに依存させないため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問075：メタデータAPIや変更セットの目的はどれですか？（観点5）",
    "choices": [
      "画像を保存する",
      "メールを送るだけ",
      "設定やコードを組織間で移行する",
      "レコードを印刷する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問076：Apexとは何ですか？（観点6）",
    "choices": [
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト",
      "DNSプロトコル"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問077：SOQLの用途はどれですか？（観点6）",
    "choices": [
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する",
      "CSSを圧縮する",
      "DNSを登録する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問078：DML操作の例はどれですか？（観点6）",
    "choices": [
      "ping、traceroute、nslookup",
      "margin、padding、display",
      "GET、POSTのHTML属性",
      "insert、update、delete"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問079：トリガの実行タイミング例はどれですか？（観点6）",
    "choices": [
      "after DNS",
      "during HTML",
      "before insert や after update",
      "before CSS"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問080：ガバナ制限の目的はどれですか？（観点6）",
    "choices": [
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため",
      "画面色を固定するため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問081：バルク化で重要な考え方はどれですか？（観点6）",
    "choices": [
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする",
      "CSSだけで処理する"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問082：Apexテストで一般的に必要なカバー率はどれですか？（観点6）",
    "choices": [
      "1%以上で十分",
      "100%以外は保存不可",
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問083：@AuraEnabledの用途はどれですか？（観点6）",
    "choices": [
      "DNSを更新する",
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問084：LWCとは何ですか？（観点6）",
    "choices": [
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス",
      "データローダの別名"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問085：SOSLが向く用途はどれですか？（観点6）",
    "choices": [
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ",
      "CSS適用",
      "DNS登録"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問086：with sharing の効果はどれですか？（観点6）",
    "choices": [
      "全権限を無視する",
      "テストを無効化する",
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問087：非同期Apexの例はどれですか？（観点6）",
    "choices": [
      "CSSセレクタ",
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問088：try-catchの主な目的はどれですか？（観点6）",
    "choices": [
      "ユーザーを作る",
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ",
      "CSSを適用する"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問089：Apexでテストデータを作る理由はどれですか？（観点6）",
    "choices": [
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため",
      "DNSを作るため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問090：メタデータAPIや変更セットの目的はどれですか？（観点6）",
    "choices": [
      "レコードを印刷する",
      "画像を保存する",
      "メールを送るだけ",
      "設定やコードを組織間で移行する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問091：Apexとは何ですか？（観点7）",
    "choices": [
      "DNSプロトコル",
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問092：SOQLの用途はどれですか？（観点7）",
    "choices": [
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する",
      "CSSを圧縮する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問093：DML操作の例はどれですか？（観点7）",
    "choices": [
      "insert、update、delete",
      "ping、traceroute、nslookup",
      "margin、padding、display",
      "GET、POSTのHTML属性"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問094：トリガの実行タイミング例はどれですか？（観点7）",
    "choices": [
      "before CSS",
      "after DNS",
      "during HTML",
      "before insert や after update"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問095：ガバナ制限の目的はどれですか？（観点7）",
    "choices": [
      "画面色を固定するため",
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問096：バルク化で重要な考え方はどれですか？（観点7）",
    "choices": [
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問097：Apexテストで一般的に必要なカバー率はどれですか？（観点7）",
    "choices": [
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分",
      "100%以外は保存不可",
      "カバー率は存在しない"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問098：@AuraEnabledの用途はどれですか？（観点7）",
    "choices": [
      "権限セットを作る",
      "DNSを更新する",
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問099：LWCとは何ですか？（観点7）",
    "choices": [
      "データローダの別名",
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問100：SOSLが向く用途はどれですか？（観点7）",
    "choices": [
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ",
      "CSS適用"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問101：with sharing の効果はどれですか？（観点7）",
    "choices": [
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する",
      "テストを無効化する",
      "SOQLを禁止する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問102：非同期Apexの例はどれですか？（観点7）",
    "choices": [
      "HTMLタグ",
      "CSSセレクタ",
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問103：try-catchの主な目的はどれですか？（観点7）",
    "choices": [
      "CSSを適用する",
      "ユーザーを作る",
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問104：Apexでテストデータを作る理由はどれですか？（観点7）",
    "choices": [
      "DNSを作るため",
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問105：メタデータAPIや変更セットの目的はどれですか？（観点7）",
    "choices": [
      "設定やコードを組織間で移行する",
      "レコードを印刷する",
      "画像を保存する",
      "メールを送るだけ"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問106：Apexとは何ですか？（観点8）",
    "choices": [
      "画像編集ソフト",
      "DNSプロトコル",
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問107：SOQLの用途はどれですか？（観点8）",
    "choices": [
      "CSSを圧縮する",
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問108：DML操作の例はどれですか？（観点8）",
    "choices": [
      "GET、POSTのHTML属性",
      "insert、update、delete",
      "ping、traceroute、nslookup",
      "margin、padding、display"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問109：トリガの実行タイミング例はどれですか？（観点8）",
    "choices": [
      "before insert や after update",
      "before CSS",
      "after DNS",
      "during HTML"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問110：ガバナ制限の目的はどれですか？（観点8）",
    "choices": [
      "ユーザー名を短くするため",
      "画面色を固定するため",
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問111：バルク化で重要な考え方はどれですか？（観点8）",
    "choices": [
      "全処理を匿名Apexにする",
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問112：Apexテストで一般的に必要なカバー率はどれですか？（観点8）",
    "choices": [
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分",
      "100%以外は保存不可"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問113：@AuraEnabledの用途はどれですか？（観点8）",
    "choices": [
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る",
      "DNSを更新する",
      "CSSを削除する"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問114：LWCとは何ですか？（観点8）",
    "choices": [
      "ログ監視サービス",
      "データローダの別名",
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問115：SOSLが向く用途はどれですか？（観点8）",
    "choices": [
      "CSS適用",
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問116：with sharing の効果はどれですか？（観点8）",
    "choices": [
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する",
      "テストを無効化する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問117：非同期Apexの例はどれですか？（観点8）",
    "choices": [
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ",
      "CSSセレクタ",
      "DNSゾーン"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問118：try-catchの主な目的はどれですか？（観点8）",
    "choices": [
      "SOQLを速くするだけ",
      "CSSを適用する",
      "ユーザーを作る",
      "例外を捕捉し適切に処理する"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問119：Apexでテストデータを作る理由はどれですか？（観点8）",
    "choices": [
      "ユーザーパスワードを読むため",
      "DNSを作るため",
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問120：メタデータAPIや変更セットの目的はどれですか？（観点8）",
    "choices": [
      "メールを送るだけ",
      "設定やコードを組織間で移行する",
      "レコードを印刷する",
      "画像を保存する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問121：Apexとは何ですか？（観点9）",
    "choices": [
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト",
      "DNSプロトコル",
      "OSカーネル"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問122：SOQLの用途はどれですか？（観点9）",
    "choices": [
      "OSプロセスを監視する",
      "CSSを圧縮する",
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問123：DML操作の例はどれですか？（観点9）",
    "choices": [
      "margin、padding、display",
      "GET、POSTのHTML属性",
      "insert、update、delete",
      "ping、traceroute、nslookup"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問124：トリガの実行タイミング例はどれですか？（観点9）",
    "choices": [
      "during HTML",
      "before insert や after update",
      "before CSS",
      "after DNS"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問125：ガバナ制限の目的はどれですか？（観点9）",
    "choices": [
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため",
      "画面色を固定するため",
      "DNS応答を速くするため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問126：バルク化で重要な考え方はどれですか？（観点9）",
    "choices": [
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする",
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問127：Apexテストで一般的に必要なカバー率はどれですか？（観点9）",
    "choices": [
      "100%以外は保存不可",
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問128：@AuraEnabledの用途はどれですか？（観点9）",
    "choices": [
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る",
      "DNSを更新する"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問129：LWCとは何ですか？（観点9）",
    "choices": [
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス",
      "データローダの別名",
      "外部ID項目"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問130：SOSLが向く用途はどれですか？（観点9）",
    "choices": [
      "単一オブジェクトの厳密集計だけ",
      "CSS適用",
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問131：with sharing の効果はどれですか？（観点9）",
    "choices": [
      "テストを無効化する",
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問132：非同期Apexの例はどれですか？（観点9）",
    "choices": [
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ",
      "CSSセレクタ"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問133：try-catchの主な目的はどれですか？（観点9）",
    "choices": [
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ",
      "CSSを適用する",
      "ユーザーを作る"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問134：Apexでテストデータを作る理由はどれですか？（観点9）",
    "choices": [
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため",
      "DNSを作るため",
      "テストを既存データに依存させないため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問135：メタデータAPIや変更セットの目的はどれですか？（観点9）",
    "choices": [
      "画像を保存する",
      "メールを送るだけ",
      "設定やコードを組織間で移行する",
      "レコードを印刷する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問136：Apexとは何ですか？（観点10）",
    "choices": [
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト",
      "DNSプロトコル"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問137：SOQLの用途はどれですか？（観点10）",
    "choices": [
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する",
      "CSSを圧縮する",
      "DNSを登録する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問138：DML操作の例はどれですか？（観点10）",
    "choices": [
      "ping、traceroute、nslookup",
      "margin、padding、display",
      "GET、POSTのHTML属性",
      "insert、update、delete"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問139：トリガの実行タイミング例はどれですか？（観点10）",
    "choices": [
      "after DNS",
      "during HTML",
      "before insert や after update",
      "before CSS"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問140：ガバナ制限の目的はどれですか？（観点10）",
    "choices": [
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため",
      "画面色を固定するため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問141：バルク化で重要な考え方はどれですか？（観点10）",
    "choices": [
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする",
      "CSSだけで処理する"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問142：Apexテストで一般的に必要なカバー率はどれですか？（観点10）",
    "choices": [
      "1%以上で十分",
      "100%以外は保存不可",
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問143：@AuraEnabledの用途はどれですか？（観点10）",
    "choices": [
      "DNSを更新する",
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問144：LWCとは何ですか？（観点10）",
    "choices": [
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス",
      "データローダの別名"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問145：SOSLが向く用途はどれですか？（観点10）",
    "choices": [
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ",
      "CSS適用",
      "DNS登録"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問146：with sharing の効果はどれですか？（観点10）",
    "choices": [
      "全権限を無視する",
      "テストを無効化する",
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問147：非同期Apexの例はどれですか？（観点10）",
    "choices": [
      "CSSセレクタ",
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問148：try-catchの主な目的はどれですか？（観点10）",
    "choices": [
      "ユーザーを作る",
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ",
      "CSSを適用する"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問149：Apexでテストデータを作る理由はどれですか？（観点10）",
    "choices": [
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため",
      "DNSを作るため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問150：メタデータAPIや変更セットの目的はどれですか？（観点10）",
    "choices": [
      "レコードを印刷する",
      "画像を保存する",
      "メールを送るだけ",
      "設定やコードを組織間で移行する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問151：Apexとは何ですか？（観点11）",
    "choices": [
      "DNSプロトコル",
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
      "画像編集ソフト"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問152：SOQLの用途はどれですか？（観点11）",
    "choices": [
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する",
      "CSSを圧縮する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問153：DML操作の例はどれですか？（観点11）",
    "choices": [
      "insert、update、delete",
      "ping、traceroute、nslookup",
      "margin、padding、display",
      "GET、POSTのHTML属性"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問154：トリガの実行タイミング例はどれですか？（観点11）",
    "choices": [
      "before CSS",
      "after DNS",
      "during HTML",
      "before insert や after update"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問155：ガバナ制限の目的はどれですか？（観点11）",
    "choices": [
      "画面色を固定するため",
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため",
      "ユーザー名を短くするため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問156：バルク化で重要な考え方はどれですか？（観点11）",
    "choices": [
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする",
      "全処理を匿名Apexにする"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問157：Apexテストで一般的に必要なカバー率はどれですか？（観点11）",
    "choices": [
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分",
      "100%以外は保存不可",
      "カバー率は存在しない"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問158：@AuraEnabledの用途はどれですか？（観点11）",
    "choices": [
      "権限セットを作る",
      "DNSを更新する",
      "CSSを削除する",
      "LWCやAuraからApexメソッドを呼び出せるようにする"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問159：LWCとは何ですか？（観点11）",
    "choices": [
      "データローダの別名",
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク",
      "ログ監視サービス"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問160：SOSLが向く用途はどれですか？（観点11）",
    "choices": [
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ",
      "CSS適用"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問161：with sharing の効果はどれですか？（観点11）",
    "choices": [
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する",
      "テストを無効化する",
      "SOQLを禁止する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問162：非同期Apexの例はどれですか？（観点11）",
    "choices": [
      "HTMLタグ",
      "CSSセレクタ",
      "DNSゾーン",
      "Queueable Apex、Batch Apex、Scheduled Apex"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問163：try-catchの主な目的はどれですか？（観点11）",
    "choices": [
      "CSSを適用する",
      "ユーザーを作る",
      "例外を捕捉し適切に処理する",
      "SOQLを速くするだけ"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問164：Apexでテストデータを作る理由はどれですか？（観点11）",
    "choices": [
      "DNSを作るため",
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため",
      "ユーザーパスワードを読むため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問165：メタデータAPIや変更セットの目的はどれですか？（観点11）",
    "choices": [
      "設定やコードを組織間で移行する",
      "レコードを印刷する",
      "画像を保存する",
      "メールを送るだけ"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問166：Apexとは何ですか？（観点12）",
    "choices": [
      "画像編集ソフト",
      "DNSプロトコル",
      "OSカーネル",
      "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語"
    ],
    "answer": "Salesforceプラットフォーム上で動く強く型付けされたプログラミング言語",
    "explanation": "ビジネスロジック実装に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問167：SOQLの用途はどれですか？（観点12）",
    "choices": [
      "CSSを圧縮する",
      "DNSを登録する",
      "Salesforceオブジェクトからレコードを問い合わせる",
      "OSプロセスを監視する"
    ],
    "answer": "Salesforceオブジェクトからレコードを問い合わせる",
    "explanation": "SELECT文でSalesforceデータを取得します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問168：DML操作の例はどれですか？（観点12）",
    "choices": [
      "GET、POSTのHTML属性",
      "insert、update、delete",
      "ping、traceroute、nslookup",
      "margin、padding、display"
    ],
    "answer": "insert、update、delete",
    "explanation": "レコードの作成・更新・削除に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問169：トリガの実行タイミング例はどれですか？（観点12）",
    "choices": [
      "before insert や after update",
      "before CSS",
      "after DNS",
      "during HTML"
    ],
    "answer": "before insert や after update",
    "explanation": "レコード操作に連動して実行されます。"
  },
  {
    "question": "【Salesforce Platform Developer I】問170：ガバナ制限の目的はどれですか？（観点12）",
    "choices": [
      "ユーザー名を短くするため",
      "画面色を固定するため",
      "DNS応答を速くするため",
      "マルチテナント環境でリソースを公平に使うため"
    ],
    "answer": "マルチテナント環境でリソースを公平に使うため",
    "explanation": "SOQL回数やDML回数などに制限があります。"
  },
  {
    "question": "【Salesforce Platform Developer I】問171：バルク化で重要な考え方はどれですか？（観点12）",
    "choices": [
      "全処理を匿名Apexにする",
      "CSSだけで処理する",
      "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
      "1件ずつ必ずSOQLする"
    ],
    "answer": "複数レコードをまとめて処理しループ内SOQL/DMLを避ける",
    "explanation": "大量データでも制限にかかりにくくします。"
  },
  {
    "question": "【Salesforce Platform Developer I】問172：Apexテストで一般的に必要なカバー率はどれですか？（観点12）",
    "choices": [
      "カバー率は存在しない",
      "本番デプロイ時に組織全体75%以上が求められる",
      "1%以上で十分",
      "100%以外は保存不可"
    ],
    "answer": "本番デプロイ時に組織全体75%以上が求められる",
    "explanation": "テスト品質も重要です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問173：@AuraEnabledの用途はどれですか？（観点12）",
    "choices": [
      "LWCやAuraからApexメソッドを呼び出せるようにする",
      "権限セットを作る",
      "DNSを更新する",
      "CSSを削除する"
    ],
    "answer": "LWCやAuraからApexメソッドを呼び出せるようにする",
    "explanation": "クライアント側コンポーネント連携で使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問174：LWCとは何ですか？（観点12）",
    "choices": [
      "ログ監視サービス",
      "データローダの別名",
      "外部ID項目",
      "Lightning Web Componentsの略でUI開発フレームワーク"
    ],
    "answer": "Lightning Web Componentsの略でUI開発フレームワーク",
    "explanation": "標準Web技術を活用します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問175：SOSLが向く用途はどれですか？（観点12）",
    "choices": [
      "CSS適用",
      "DNS登録",
      "複数オブジェクトを横断したテキスト検索",
      "単一オブジェクトの厳密集計だけ"
    ],
    "answer": "複数オブジェクトを横断したテキスト検索",
    "explanation": "検索文字列ベースの横断検索に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問176：with sharing の効果はどれですか？（観点12）",
    "choices": [
      "SOQLを禁止する",
      "Apexクラスで共有ルールを考慮する",
      "全権限を無視する",
      "テストを無効化する"
    ],
    "answer": "Apexクラスで共有ルールを考慮する",
    "explanation": "レコードアクセスの考慮に関係します。"
  },
  {
    "question": "【Salesforce Platform Developer I】問177：非同期Apexの例はどれですか？（観点12）",
    "choices": [
      "Queueable Apex、Batch Apex、Scheduled Apex",
      "HTMLタグ",
      "CSSセレクタ",
      "DNSゾーン"
    ],
    "answer": "Queueable Apex、Batch Apex、Scheduled Apex",
    "explanation": "時間のかかる処理や大量処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問178：try-catchの主な目的はどれですか？（観点12）",
    "choices": [
      "SOQLを速くするだけ",
      "CSSを適用する",
      "ユーザーを作る",
      "例外を捕捉し適切に処理する"
    ],
    "answer": "例外を捕捉し適切に処理する",
    "explanation": "エラー処理に使います。"
  },
  {
    "question": "【Salesforce Platform Developer I】問179：Apexでテストデータを作る理由はどれですか？（観点12）",
    "choices": [
      "ユーザーパスワードを読むため",
      "DNSを作るため",
      "テストを既存データに依存させないため",
      "本番データを必ず変更するため"
    ],
    "answer": "テストを既存データに依存させないため",
    "explanation": "SeeAllData=falseが基本です。"
  },
  {
    "question": "【Salesforce Platform Developer I】問180：メタデータAPIや変更セットの目的はどれですか？（観点12）",
    "choices": [
      "メールを送るだけ",
      "設定やコードを組織間で移行する",
      "レコードを印刷する",
      "画像を保存する"
    ],
    "answer": "設定やコードを組織間で移行する",
    "explanation": "開発成果物のデプロイに関係します。"
  }
];
