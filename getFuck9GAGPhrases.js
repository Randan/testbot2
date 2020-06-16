const phrasesArr = [
  'Опять 9GAG?',
  'Та ты заебал',
  'Ну хватит',
  'Ты ж в курсе, что оно не подгружает?',
  'МММ, Жоско!',
  '9GAG хуйня',
  'Иди умойся'
];

module.exports = () => phrasesArr[Math.floor(Math.random() * (phrasesArr.length))];