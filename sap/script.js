const params = new URLSearchParams(location.search);
const type = params.get("type") || "all";
const QUESTION_LIMIT = 50;

const quizInfo = {
  s4hana: {
    title: "SAP Certified Associate - SAP S/4HANA",
    desc: "SAP S/4HANA、Fiori、Universal Journal、Business Partner、SAP Activate、Embedded Analytics、移行"
  },
  technology: {
    title: "SAP Certified Technology Associate",
    desc: "SAP Basis、Client、TMS、HANA管理、ユーザー管理、監視、バックアップ、RFC、権限"
  },
  development: {
    title: "SAP Certified Development Associate",
    desc: "ABAP、CDS View、RAP、OData、BAdI、Transport Request、デバッグ、ABAP Dictionary"
  },
  integration: {
    title: "SAP Certified Integration Associate",
    desc: "SAP Integration Suite、Cloud Integration、API Management、Event Mesh、iFlow、認証、B2B、監視"
  }
};

const pageTitle = document.getElementById("pageTitle");
const pageDesc = document.getElementById("pageDesc");
const quizList = document.getElementById("quizList");

if (type === "all") {
  document.title = "SAP資格クイズ";
  pageTitle.textContent = "SAP資格クイズ";
  pageDesc.textContent = "4カテゴリから50問ランダムで出題";
} else {
  const info = quizInfo[type] || quizInfo.s4hana;
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
  progressBar.style.width = `${((currentIndex) / questions.length) * 100}%`;
  choicesEl.innerHTML = "";

  shuffle(q.choices).forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(btn, choice, q.answer, q.explanation);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(button, selected, answer, explanation) {
  if (answered) return;
  answered = true;

  const buttons = choicesEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === answer) btn.classList.add("correct");
  });

  if (selected === answer) {
    score++;
    button.classList.add("correct");
    resultEl.textContent = `正解！ ${explanation}`;
  } else {
    button.classList.add("wrong");
    resultEl.textContent = `不正解。正解は「${answer}」です。 ${explanation}`;
  }

  scoreEl.textContent = `スコア: ${score}`;
  nextBtn.style.display = "block";
  setTimeout(() => {
    if (currentIndex < questions.length) {
      currentIndex++;
      showQuestion();
    }
  }, 1200);
}

nextBtn.onclick = () => {
  currentIndex++;
  showQuestion();
};

showQuestion();
