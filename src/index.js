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
  let wordlength = 10;
  let sum = wordlength;
  let decodeString = '';
  let space = '**********'
  let dots = '10'
  let dashes = '11'
  for(let i = 0; i < expr.length; i++) {
    if(i % 10 == 0) {
      let word = expr.slice(i, sum)
      if(word === space) {
        decodeString += ' '
      } else {
        let morseDigit = '';
        for(let j = 0; j < wordlength; j++) {
          if(j % 2 == 0) {
            if(word.slice(j, j + 2).includes(dashes)) {
              morseDigit += '-'
            } else if (word.slice(j, j + 2).includes(dots)) {
              morseDigit += '.'
            } else {
              morseDigit += ''
            }
          }
        }
        for(let key in MORSE_TABLE) {
          if(morseDigit == key) {
            decodeString += MORSE_TABLE[key]
          }
        }
      }
      sum += wordlength
    }
  }
  return decodeString
}

module.exports = {
    decode
}