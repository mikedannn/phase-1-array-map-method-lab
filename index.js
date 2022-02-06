const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let eachTitle = tutorials.map(el => el.split(' '));
  for (let word in eachTitle){
    for (let i = 0; i < eachTitle[word].length; i++) {
      eachTitle[word][i] = eachTitle[word][i][0].toUpperCase() + eachTitle[word][i].substring(1);
    }
    tutorials[word] = eachTitle[word].join(" ");
  }
  return tutorials;
}









// function returns an array with title cased names into a new array 

// separate the tutorials array 

// capitalize the beginning letter in each word 

// return new array 