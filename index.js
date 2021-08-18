// The goal is to have the function return an object with the letter and length of the longest substring of that letter

longestSubString = ([strOne, strTwo, strThree]) => {
  // Assigning the six possible ways to combine the parameters to seperate variables
  let scenarioOne = strOne + strTwo + strThree;
  let scenarioTwo = strOne + strThree + strTwo;
  let scenarioThree = strTwo + strOne + strThree;
  let scenarioFour =  strTwo + strThree + strOne;
  let scenarioFive =  strThree + strTwo + strOne;
  let scenarioSix = strThree + strOne + strTwo;

  // The variables that will hold the most consecutive letter length for each scenario
  let scenOneMax = 0;
  let scenTwoMax = 0;
  let scenThreeMax = 0;
  let scenFourMax = 0;
  let scenFiveMax = 0;
  let scenSixMax = 0;

  // These are the for loops with nested if conditions to iterate over each character and find the most consecutive letter length and assign it to the corresponding scenMax variable
  for (let firstChar = 0, endChar = 1; endChar < scenarioOne.length;) {
    if(scenarioOne[endChar] === scenarioOne[firstChar]) {
      if(scenOneMax < endChar - firstChar + 1) {
        scenOneMax = endChar - firstChar + 1
      };
      endChar++
      ;
    } else {
      firstChar = endChar;
    };
  };
  for (let firstChar = 0, endChar = 1; endChar < scenarioTwo.length;) {
    if(scenarioTwo[endChar] === scenarioTwo[firstChar]) {
      if(scenTwoMax < endChar - firstChar + 1) {
        scenTwoMax = endChar - firstChar + 1
      };
      endChar++
      ;
    } else {
      firstChar = endChar;
    };
  };
  for (let firstChar = 0, endChar = 1; endChar < scenarioThree.length;) {
    if(scenarioThree[endChar] === scenarioThree[firstChar]) {
      if(scenThreeMax < endChar - firstChar + 1) {
        scenThreeMax = endChar - firstChar + 1
      };
      endChar++
      ;
    } else {
      firstChar = endChar;
    };
  };
  for (let firstChar = 0, endChar = 1; endChar < scenarioFour.length;) {
    if(scenarioFour[endChar] === scenarioFour[firstChar]) {
      if(scenFourMax < endChar - firstChar + 1) {
        scenFourMax = endChar - firstChar + 1
      };
      endChar++
      ;
    } else {
      firstChar = endChar;
    };
  };
  for (let firstChar = 0, endChar = 1; endChar < scenarioFive.length;) {
    if(scenarioFive[endChar] === scenarioFive[firstChar]) {
      if(scenFiveMax < endChar - firstChar + 1) {
        scenFiveMax = endChar - firstChar + 1
      };
      endChar++
      ;
    } else {
      firstChar = endChar;
    };
  };
  for (let firstChar = 0, endChar = 1; endChar < scenarioSix.length;) {
    if(scenarioSix[endChar] === scenarioSix[firstChar]) {
      if(scenSixMax < endChar - firstChar + 1) {
        scenSixMax = endChar - firstChar + 1
      };
      endChar++
      ;
    } else {
      firstChar = endChar;
    };
  };

  // Adding the logic to decide which scenario gets to assign the values to the length and letter variables
  if (scenOneMax > scenTwoMax && scenThreeMax && scenFourMax && scenFiveMax && scenSixMax ) {
    letter = scenarioOne[scenarioOne.length - scenOneMax]
    length = scenOneMax;

  } else if (scenTwoMax > scenOneMax && scenThreeMax && scenFourMax && scenFiveMax && scenSixMax ) {
    letter = scenarioTwo[scenarioTwo.length - scenTwoMax]
    length = scenTwoMax;

  } else if (scenThreeMax > scenOneMax && scenTwoMax && scenFourMax && scenFiveMax && scenSixMax) {
    letter = scenarioThree[scenarioThree.length - scenThreeMax]
    length = scenThreeMax;

  } else if (scenFourMax > scenOneMax && scenTwoMax && scenThreeMax && scenFiveMax && scenSixMax) {
    letter = scenarioFour[scenarioFour.length - scenFourMax]
    length = scenFourMax;
  } else if (scenFiveMax > scenOneMax && scenTwoMax && scenThreeMax && scenFourMax && scenSixMax) {
    letter = scenarioFive[scenarioFive.length - scenFiveMax]
    length = scenFiveMax;
  } else {
    letter = scenarioSix[scenarioSix.length - scenSixMax]
    length = scenSixMax;
  };

  return console.log({letter, length})
};

longestSubString(['aaacc', 'bbaaaaaa', 'ccaba']);
longestSubString(['zxyzz', 'zzzmxy', 'zzzzzz']);
longestSubString(['bbbdaaa', 'accbb', 'bbbdzdz']);
