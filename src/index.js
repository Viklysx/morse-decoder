const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = expr.match(/.{1,10}/g);
    let result = '';
    var charSymbol = '';
    expr.forEach(element => {           
        if (element === '**********') result += ' ';
        else {            
            element = element.match(/.{1,2}/g);
            element.forEach(elementEnclosure => {              
                switch (elementEnclosure) {
                    case '10':
                        charSymbol += '.';
                        break;
                    case '11':
                        charSymbol += '-';
                        break;
                    case '00':
                        charSymbol += '';
                        break;
                    default:
                        break;
                }                               
            });
            result += MORSE_TABLE[charSymbol];
            charSymbol = '';
        }
    });
    return result;
}

module.exports = {
    decode
}