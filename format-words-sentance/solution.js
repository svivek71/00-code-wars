function formatWords(words){
    if (!words) return '';
     Validwords = words.filter(word => word.length > 1)
     if (Validwords.length > 1) {
      strWord = Validwords.join(', ');
      finalSentence = `${strWord.slice(0,strWord.lastIndexOf(','))} and${strWord.slice(strWord.lastIndexOf(',')+1)}`
    } else return Validwords.toString();
    return finalSentence
    }