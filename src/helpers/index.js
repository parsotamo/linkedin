export const trimChar = (char, len = 15, ellipsis=false)=>{
    if(char.length < len) return char;
    const words = [];
    let newChar = char.split(' ').reduce((acc, cur)=>{
      if(acc + cur.length < len){
        words.push(cur);
          return acc + cur.length;
      }
      return words;
    }, 0);
    newChar = words.length === 1 ? words[0]: words.join(' ');
        return ellipsis ? `${newChar}...`: newChar;

  }