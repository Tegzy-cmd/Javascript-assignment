function arrayCount(arr) {
    const occurrence = {};
    for (const num of arr) {
      occurrence[num] = occurrence[num] ? occurrence[num] + 1 : 1;
    }
    return occurrence;
  }