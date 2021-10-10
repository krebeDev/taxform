const UNITS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

const TEENS = {
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
}

const X_TIES = {
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
}

const isValidPair = (x, y) => {
  return X_TIES.hasOwnProperty(x) && UNITS.hasOwnProperty(y) && x !== y
}

const wordsToNumbers = (input) => {
  const transformedInput = input.trim().toLowerCase()

  if (!transformedInput || /\d/.test(transformedInput)) {
    return { error: 'Please enter a valid rate only in words' }
  }

  if (/zero|hundred|thousand|million/.test(transformedInput)) {
    return {
      error:
        'Minimum/maximum allowable rates are "one" and "ninty-nine" respectively',
    }
  }

  const wordsArray = transformedInput.split(/[\s-]+/)

  if (wordsArray.length > 2) {
    return {
      error: 'Invalid rate. Only enter a single or double digit rate in words',
    }
  } else if (wordsArray.length === 2) {
    const wordAtFirstIndex = wordsArray[0]
    const wordAtSecondIndex = wordsArray[1]
    if (isValidPair(wordAtFirstIndex, wordAtSecondIndex)) {
      return { number: X_TIES[wordAtFirstIndex] + UNITS[wordAtSecondIndex] }
    } else {
      return {
        error:
          'Hints: Ensure your spellings are correct. Also, only follow a double-digit by a single-digit number. E.g "twenty one"',
      }
    }
  } else if (wordsArray.length === 1) {
    const number =
      UNITS[transformedInput] ||
      TEENS[transformedInput] ||
      X_TIES[transformedInput]

    return number ? { number } : { error: 'Incorrect spelling' }
  }
}

export default wordsToNumbers
