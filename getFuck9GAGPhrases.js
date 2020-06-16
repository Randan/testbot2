const phrasesArr = [
  'Опять 9GAG?',
  'Та ты заебал',
  'Ну хватит',
  'Ты ж в курсе, что оно не подгружает?'
];

module.exports = () => phrasesArr[Math.floor(Math.random() * (phrasesArr.length))];