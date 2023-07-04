export default [
  {
    title: "Будете ли Вы на нашей свадьбе?",
    value: "presence",
    type: "radio",
    answers: [
      {
        title: "Да, приду. Буду один",
        value: "yes_alone",
      },
      {
        title: "Да, придем, нас будет двое",
        value: "yes_pair",
      },
      {
        title: "Не могу сказать, сообщу за 10 дней до свадьбы",
        value: "maybe",
      },
      {
        title: "Нет, к сожалению не смогу быть на вашей свадьбе",
        value: "no",
      },
    ],
  },
  {
    title: "На какое из мероприятий Вы придете?",
    value: "event",
    type: "radio",
    answers: [
      {
        title: "На церемонию и вечеринку",
        value: "all",
      },
      {
        title: "Смогу прийти только на церемонию",
        value: "ceremony",
      },
      {
        title: "Смогу прийти только на вечеринку",
        value: "party",
      },
      {
        title: "Точнее скажу за 10 дней до свадьбы",
        value: "unknown",
      },
    ],
  },
  {
    title: "Какие напитки Вы предпочитаете?",
    value: "beverages",
    type: "checkbox",
    answers: [
      {
        title: "Пиво",
        value: "Beer",
      },
      {
        title: "Водка",
        value: "vodka",
      },
      {
        title: "Коньяк",
        value: "cognac",
      },
      {
        title: "Виски",
        value: "whiskey",
      },
      {
        title: "Красное вино",
        value: "red_wine",
      },
      {
        title: "Белое вино",
        value: "white_wine",
      },
      {
        title: "Безалкогольные напитки (сок, газировка, морс)",
        value: "soft_drink",
      },
      {
        title: "Возьму свое 😊",
        value: "own",
      },
    ],
  },
  {
    title: "Останетесь ли Вы с ночевкой?",
    value: "overnight_stay",
    type: "radio",
    answers: [
      {
        title: "Да, останусь с ночевкой",
        value: "yes",
      },
      {
        title: "Нет, поеду домой",
        value: "no",
      },
      {
        title: "Не знаю, зависит от настроения",
        value: "maybe",
      },
    ],
  },
];
