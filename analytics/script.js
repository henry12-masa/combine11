const params = new URLSearchParams(location.search);
const type = params.get("type") || "all";
const QUESTION_LIMIT = 50;

const quizInfo = {
  tableauDataAnalyst: {
    title: "Tableau Certified Data Analyst",
    desc: "Tableau Desktop/Cloud、データ接続、計算フィールド、LOD、可視化、ダッシュボード、分析、共有"
  },
  tableauConsultant: {
    title: "Tableau Certified Consultant",
    desc: "要件定義、設計、パフォーマンス、ガバナンス、権限、運用、Tableau導入支援"
  },
  ibmDataAnalyst: {
    title: "IBM Data Analyst Professional Certificate",
    desc: "Excel、SQL、Python、データ収集、データ整形、可視化、Cognos、分析レポート"
  },
  ibmDataScience: {
    title: "IBM Data Science Professional Certificate",
    desc: "Python、SQL、統計、データサイエンス手法、機械学習、モデル評価、Notebook活用"
  }
};

const pageTitle = document.getElementById("pageTitle");
const pageDesc = document.getElementById("pageDesc");
const quizList = document.getElementById("quizList");

if (type === "all") {
  document.title = "Tableau・IBMデータ分析資格クイズ";
  pageTitle.textContent = "Tableau・IBMデータ分析資格クイズ";
  pageDesc.textContent = "4カテゴリ・各180問から50問ランダムで出題";
} else {
  const info = quizInfo[type] || quizInfo.tableauDataAnalyst;
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
  return { question: q.question || q.q, choices: q.choices || q.c, answer: q.answer || q.a, explanation: q.explanation || q.e || "" };
}
function shuffle(array){ return array.map(v => [Math.random(), v]).sort((a,b) => a[0] - b[0]).map(v => v[1]); }
function uniqueByQuestion(array){
  const seen = new Set();
  return array.filter(q => {
    const key = (q.question || q.q || "").trim();
    if (!key || seen.has(key)) return false;
    seen.add(key); return true;
  });
}

let questions = [];
if (type === "all") {
  Object.keys(quizInfo).forEach(key => {
    if (window.quizData && Array.isArray(window.quizData[key])) questions.push(...window.quizData[key].map(normalizeQuestion));
  });
} else {
  questions = window.quizData?.[type] ? window.quizData[type].map(normalizeQuestion) : [];
}
questions = shuffle(uniqueByQuestion(questions)).slice(0, QUESTION_LIMIT);

let currentIndex = 0, score = 0, answered = false;
const counter = document.getElementById("counter"), scoreEl = document.getElementById("score"), questionEl = document.getElementById("question"), choicesEl = document.getElementById("choices"), resultEl = document.getElementById("result"), nextBtn = document.getElementById("nextBtn"), progressBar = document.getElementById("progressBar");

function showQuestion(){
  answered = false; resultEl.textContent = ""; nextBtn.style.display = "none";
  if (questions.length === 0) { questionEl.textContent = "問題データが読み込めませんでした"; choicesEl.innerHTML = ""; counter.textContent = "0 / 0"; scoreEl.textContent = "スコア: 0"; progressBar.style.width = "0%"; return; }
  if (currentIndex >= questions.length) { questionEl.textContent = "終了！"; choicesEl.innerHTML = ""; counter.textContent = `${questions.length} / ${questions.length}`; scoreEl.textContent = `スコア: ${score}`; resultEl.textContent = `${questions.length}問中 ${score}問正解`; progressBar.style.width = "100%"; return; }
  const q = questions[currentIndex]; counter.textContent = `${currentIndex + 1} / ${questions.length}`; scoreEl.textContent = `スコア: ${score}`; questionEl.textContent = q.question; progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`; choicesEl.innerHTML = "";
  q.choices.forEach(choice => { const btn = document.createElement("button"); btn.textContent = choice; btn.onclick = () => { if (answered) return; answered = true; if (choice === q.answer) { score++; resultEl.textContent = "正解！"; btn.classList.add("correct"); } else { resultEl.textContent = `不正解。正解は「${q.answer}」`; btn.classList.add("wrong"); } [...choicesEl.children].forEach(b => { b.disabled = true; if (b.textContent === q.answer) b.classList.add("correct"); }); if (q.explanation) resultEl.textContent += ` ${q.explanation}`; scoreEl.textContent = `スコア: ${score}`; setTimeout(() => { currentIndex++; showQuestion(); }, 900); }; choicesEl.appendChild(btn); });
}
nextBtn.onclick = () => { currentIndex++; showQuestion(); };
showQuestion();
