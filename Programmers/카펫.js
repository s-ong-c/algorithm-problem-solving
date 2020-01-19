function solution(brown, red) {
  const total = brown + red;
  var answer = [];
  for (let y = 3; y <= red + 2; y++) {
    for (let x = y; x * 2 + (y - 2) * 2 <= brown; x++) {
      if ((x - 2) * (y - 2) == red) {
        answer.push(x, y);
      }
    }
  }

  return answer.slice(0, 2);
}
