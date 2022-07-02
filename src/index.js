module.exports = function toReadable (number) {
    let numberStr = String(number).split('')
    let OneDigitNum = ['zero', 'one', 'two', 'three','four','five','six', 'seven','eight','nine','ten',
    'eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen']
    let TwoDigitNum = ['twenty', 'thirty', 'forty', 'fifty','sixty','seventy','eighty', 'ninety']
    let TwoDigitNum1 = ['ten','eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen']
    if(number < 20) {
        return OneDigitNum[number]
      }
    else if(number === '0'){
        return 'zero'
    }
    else if(number < 100 && numberStr[1] === '0'){
       return TwoDigitNum[numberStr[0] - 2]
  }
   else if(number < 100 && numberStr.length - 1 !== '0'){
        return TwoDigitNum[numberStr[0] - 2] + ' ' + OneDigitNum[numberStr[1]]
    }
   else if(number < 1000 && numberStr[1] === '0' && numberStr[2] === '0'){
        return OneDigitNum[numberStr[0]] + ' hundred'
    }
    else if(number <= 999 && numberStr[1] === '0'){
        return OneDigitNum[numberStr[0]] + ' hundred' + ' ' + OneDigitNum[numberStr[2]]
}
    else if(number < 1000  && numberStr[1] === '1'){
        return OneDigitNum[numberStr[0]] + ' hundred' + ' ' + TwoDigitNum1[numberStr[2]] 
    }
    else if(number < 1000  && numberStr[1] !== '0' && numberStr[2] === '0' || numberStr[1] !== '1' && numberStr[2] === '0'){
        return OneDigitNum[numberStr[0]] + ' hundred' + ' ' + TwoDigitNum[numberStr[1] - 2]
    }
    else if(number < 1000  && numberStr[1] !== '0' && numberStr[2] !== '0' || numberStr[1] !== '1' && numberStr[2] !== '0'){
        return OneDigitNum[numberStr[0]] + ' hundred' + ' ' + TwoDigitNum[numberStr[1]- 2]+ ' '  +  OneDigitNum[numberStr[2]]
    }
}
