const params = new URLSearchParams(location.search);
const type = params.get("type") || "all";
const QUESTION_LIMIT = 50;

const quizInfo = {
  googleAds: {
    title: "Google広告認定資格",
    desc: "検索広告、ディスプレイ、動画、測定、入札、品質スコア、コンバージョン最適化"
  },
  gaiq: {
    title: "Google Analytics認定資格（GAIQ）",
    desc: "GA4のイベント、コンバージョン、探索、レポート、流入分析、測定設計"
  },
  webAnalyst: {
    title: "Web解析士",
    desc: "アクセス解析、KPI設計、広告効果測定、UX改善、レポーティング"
  },
  seniorWebAnalyst: {
    title: "上級Web解析士",
    desc: "事業分析、戦略設計、改善提案、データ統合、プロジェクト推進"
  },
  marketingBusiness: {
    title: "マーケティング・ビジネス実務検定",
    desc: "市場分析、4P、STP、消費者行動、流通、プロモーション、国際マーケティング"
  },
  retailMarketing: {
    title: "販売士（リテールマーケティング検定）",
    desc: "小売業、店舗運営、マーチャンダイジング、接客、販売促進、在庫管理"
  },
  businessCareer: {
    title: "ビジネスキャリア検定",
    desc: "人事、労務、経理、営業、生産管理、経営戦略、実務知識"
  }
};

const pageTitle = document.getElementById("pageTitle");
const pageDesc = document.getElementById("pageDesc");
const quizList = document.getElementById("quizList");

if (type === "all") {
  document.title = "マーケティング・ビジネス資格クイズ";
  pageTitle.textContent = "マーケティング・ビジネス資格クイズ";
  pageDesc.textContent = "7カテゴリ・各180問から50問ランダムで出題";
} else {
  const info = quizInfo[type] || quizInfo.googleAds;
  document.title = info.title;
  pageTitle.textContent = info.title;
  pageDesc.textContent = info.desc;
}

quizList.innerHTML = `
  <a href="index.html" class="${type === "all" ? "active" : ""}">全カテゴリ50問</a>
  ${Object.keys(quizInfo).map(key => `
    <a href="?type=${key}" class="${type === key ? "active" : ""}">${quizInfo[key].title}</a>
  `).join("")}
`;

function normalizeQuestion(q){
  return {
    question: q.question || q.q,
    choices: q.choices || q.c,
    answer: q.answer || q.a,
    explanation: q.explanation || q.e || ""
  };
}

function shuffle(array){
  return array.map(v => [Math.random(), v]).sort((a,b) => a[0] - b[0]).map(v => v[1]);
}

function uniqueByQuestion(array){
  const seen = new Set();
  return array.filter(q => {
    const key = (q.question || q.q || "").trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

let questions = [];

if (type === "all") {
  Object.keys(quizInfo).forEach(key => {
    if (window.quizData && Array.isArray(window.quizData[key])) {
      questions.push(...window.quizData[key].map(normalizeQuestion));
    }
  });
} else {
  questions = window.quizData?.[type] ? window.quizData[type].map(normalizeQuestion) : [];
}

questions = shuffle(uniqueByQuestion(questions)).slice(0, QUESTION_LIMIT);

let currentIndex = 0;
let score = 0;
let answered = false;

const counter = document.getElementById("counter");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

function showQuestion() {
  answered = false;
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  if (questions.length === 0) {
    questionEl.textContent = "問題データが読み込めませんでした";
    choicesEl.innerHTML = "";
    counter.textContent = "0 / 0";
    scoreEl.textContent = "スコア: 0";
    progressBar.style.width = "0%";
    return;
  }

  if (currentIndex >= questions.length) {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    counter.textContent = `${questions.length} / ${questions.length}`;
    scoreEl.textContent = `スコア: ${score}`;
    resultEl.textContent = `${questions.length}問中 ${score}問正解`;
    progressBar.style.width = "100%";
    return;
  }

  const q = questions[currentIndex];
  counter.textContent = `${currentIndex + 1} / ${questions.length}`;
  scoreEl.textContent = `スコア: ${score}`;
  questionEl.textContent = q.question;
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      if (answered) return;
      answered = true;

      if (choice === q.answer) {
        score++;
        resultEl.textContent = "正解！";
        btn.classList.add("correct");
      } else {
        resultEl.textContent = `不正解。正解は「${q.answer}」`;
        btn.classList.add("wrong");
      }

      [...choicesEl.children].forEach(b => {
        b.disabled = true;
        if (b.textContent === q.answer) b.classList.add("correct");
      });

      if (q.explanation) resultEl.textContent += ` ${q.explanation}`;
      scoreEl.textContent = `スコア: ${score}`;
      setTimeout(() => {
        currentIndex++;
        showQuestion();
      }, 900);
    };
    choicesEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentIndex++;
  showQuestion();
};

showQuestion();
