function solve(s){
    // this will help track any open bracket that has not yet been paired
    let openBracketCount = 0;
  
    // this will track any times we need to reverse a bracket
    let countReversals = 0;
  
    // check each character in array
    for (let i=0; i<s.length; i++) {
      const curr = s[i]
      // if we found an open bracket, increment count
      if (curr === "(") {
        openBracketCount += 1
      } 
      // if we found a balanced pair, decrement from openBracketCount
      else if (openBracketCount > 0 && curr === ")") {
        openBracketCount -= 1
      }
      
      // curr is ")" at this point  
      // since we don't have a open bracket to pair this to
      // reverse the ")" to an "(" and increment the open bracket count
      else {
        countReversals += 1
        openBracketCount += 1
      }
    }
  
    // At this point, if we have open brackets left, we need to reverse
    // half of them to create balanced pairs of open and closed brackets
    // So we increment our countReversals to track these necessary reversals
    // We use Math.ceil to properly round to an integer
  
    countReversals += Math.ceil(openBracketCount/2)
  
    // check if we have an even number of open brackets, otherwise return -1
    // because we can't make balanced pairs with an odd number
  
    return openBracketCount%2 === 0 ? countReversals : -1
  }
