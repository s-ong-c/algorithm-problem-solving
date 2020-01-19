function solution(number, k) {
  const array = [];
  for (let i = 0; i < number.length; i++) {
    array;
    const target = number[i];

    while (k > 0 && array.length > 0 && array[array.length - 1] < target) {
      array.pop();

      k--;
    }

    array.push(target);
  }
  array.splice(array.length - k, k);
  var answer = array.join("");
  answer;
  return answer;
}
console.log(solution("1924", 2));
