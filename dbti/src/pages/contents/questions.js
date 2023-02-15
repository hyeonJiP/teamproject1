const questions = [
  {
    question: "Q1.<br/>세미나에서 받은 옷을 나는",
    answers: [
      {
        text: "✔ 오! 바로입는다",
        type: "E",
      },
      {
        text: "✔ 엥? 안 입는다",
        type: "I",
      },
    ],
  },
  {
    question: "Q2.<br/>디자이너가 무리한 요구를 한다면 나는",
    answers: [
      {
        text: "✔ 옆 자리 개발자와 불만 섞인 대화를 한다",
        type: "E",
      },
      {
        text: "✔ 뭐라는거야? 가만히 안 있는다",
        type: "I",
      },
    ],
  },
  {
    question: "Q3.<br/>회사를 고를수 있다면 나는",
    answers: [
      {
        text: "✔ 복지좋은 회사에서 조용히 일하고 싶다",
        type: "E",
      },
      {
        text: "✔ T.O.P 개발자가 되고 싶다",
        type: "I",
      },
    ],
  },
  {
    question: "Q4.<br/>서비스의 안전성을 높이려면 회사는",
    answers: [
      {
        text: "✔  매출을 포기할 줄 알아야 한다",
        type: "N",
      },
      {
        text: "✔  매출을 포기하면 안 된다",
        type: "S",
      },
    ],
  },
  {
    question: "Q5.<br/>성장을 위해서라면 나는",
    answers: [
      {
        text: "✔ 월급? 포기할 수 있다",
        type: "N",
      },
      {
        text: "✔ 월급! 포기할 수 없다",
        type: "S",
      },
    ],
  },
  {
    question: "Q6.<br/>버그가 발생했을 때 나는",
    answers: [
      {
        text: '✔ "작은 버그라도 당장 고쳐~"',
        type: "N",
      },
      {
        text: '✔ "자잘한 버그는 넘어가자~"',
        type: "S",
      },
    ],
  },
  {
    question: "Q7.<br/>동료가 버그를 발견하고 우울한다면 나는",
    answers: [
      {
        text: "✔ 문제를 확인하고 조언해준다",
        type: "F",
      },
      {
        text: "✔ 슬프냐.. 나도 슬프다..",
        type: "T",
      },
    ],
  },
  {
    question: "Q8.<br/>이직할 때 흥미를 느끼는 회사는!?",
    answers: [
      {
        text: "✔ 내가 가고 싶었던 회사!",
        type: "F",
      },
      {
        text: "✔ 스카웃 제의를 하는 회사!",
        type: "T",
      },
    ],
  },
  {
    question: "Q9.<br/>나의 성장을 위해서는 나에게",
    answers: [
      {
        text: "✔ 당근을 주는 사수가 필요하다",
        type: "F",
      },
      {
        text: "✔ 채찍을 주는 사수가 필요하다",
        type: "T",
      },
    ],
  },
  {
    question: "Q10.<br/>일을 할 때 나는",
    answers: [
      {
        text: "✔ 목록작성후 체크한다",
        type: "J",
      },
      {
        text: "✔ 체크는 하지만 자유롭다",
        type: "P",
      },
    ],
  },
  {
    question: "Q11.<br/>새로운 개발 스택을 보면 나는",
    answers: [
      {
        text: "✔ 당장 적용해보고 싶다!",
        type: "J",
      },
      {
        text: "✔ 누가 써보지 않으면 적용하기 싫다!",
        type: "P",
      },
    ],
  },
  {
    question: "Q12.<br/>개발 규칙과 방법론은",
    answers: [
      {
        text: "✔ 개발자를 억압하고 불편하게 만든다",
        type: "J",
      },
      {
        text: "✔ 프로덕트를 위해 존중되어야 한다",
        type: "P",
      },
    ],
  },

  {
    question: "",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 0,
  },
];

export default questions;
