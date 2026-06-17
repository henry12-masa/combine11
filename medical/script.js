const params = new URLSearchParams(location.search);
const type = params.get("type") || "all";
const QUESTION_LIMIT = 50;

const quizInfo = {
  hoikushi: {
    title: "保育士",
    desc: "保育原理、児童家庭福祉、子どもの保健、保育実習理論、保育所保育指針"
  },
  dispensingPharmacy: {
    title: "調剤薬局事務",
    desc: "処方箋受付、調剤報酬、薬剤料、レセプト、保険制度、薬局窓口業務"
  },
  medicalOffice: {
    title: "医療事務",
    desc: "診療報酬、外来会計、入院会計、保険請求、受付、レセプト点検"
  },
  dentalAssistant: {
    title: "歯科助手認定",
    desc: "歯科診療補助、器具管理、感染対策、受付、歯科材料、患者対応"
  },
  welfareEquipment: {
    title: "福祉用具専門相談員",
    desc: "福祉用具貸与、介護保険、アセスメント、モニタリング、住環境整備、安全管理"
  }
};

const pageTitle = document.getElementById("pageTitle");
const pageDesc = document.getElementById("pageDesc");
const quizList = document.getElementById("quizList");

if (type === "all") {
  document.title = "保育・医療福祉資格クイズ";
  pageTitle.textContent = "保育・医療福祉資格クイズ";
  pageDesc.textContent = "5カテゴリ・各180問から50問ランダムで出題";
} else {
  const info = quizInfo[type] || quizInfo.hoikushi;
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
