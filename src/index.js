const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
   
  let str = expr.split('');
   let wordSym = '';
   let wordCode = '';
  
  for (let i = str.length; i>0; i= i-10){
    wordSym = '';
   for (let a = i; a>i-10; a= a-2){
    if( `${str[a-2]}${str[a-1]}` === '10') {wordSym = `.${wordSym}`}
    else if (`${str[a-2]}${str[a-1]}` === '11' ) {wordSym = `-${wordSym}`}
    else if (`${str[a-1]}${str[a-2]}${str[a-3]}${str[a-4]}${str[a-5]}${str[a-6]}${str[a-7]}${str[a-8]}${str[a-9]}${str[a-10]}` === '**********') {wordSym = ' '}
    else {wordSym = `${wordSym}`}
   }
  
   console.log(wordSym)
   for (key in MORSE_TABLE) {
        if(key === wordSym) {wordCode = `${MORSE_TABLE[key]}${wordCode}`;
       } 
      } 
      if ( wordSym === ' ') {wordCode = ` ${wordCode}`}
    }
  
   return wordCode;
  }

module.exports = {
    decode
}