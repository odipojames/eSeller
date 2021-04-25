const shuffleArray = (array: any) => {
    if (!array) {
        return array
    }
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  export { shuffleArray }
