function isNotANumber (value) {
  if (typeof(value) === number) {
    if (value <= 0 ||value <= 0 ) {
      return true
    }
  }
  else return false
}

// LS solution follows

function isNotANumber2 (value) {
  return value !== value
}

// I think my solution also works, but theirs is obviously more concise.