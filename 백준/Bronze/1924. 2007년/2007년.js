const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
const inputs = inputStr.split(' ').map((val) => +val);
const dueMonth = inputs[0] < 10 ? '0' + inputs[0] : '' + inputs[0];
const dueDate = inputs[1] < 10 ? '0' + inputs[1] : '' + inputs[1];

/** 기능 구현 */

/** solution 함수 정의  */
function solution(mm, dd) {
  const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const defaultDate = new Date(`2007-01-01`); // Monday
  const dueDate = new Date(`2007-${mm}-${dd}`);
  let dayGap = 1 + (((dueDate.getTime() - defaultDate.getTime()) / (1000 * 60 * 60 * 24)) % weeks.length);
  if (dayGap === weeks.length) dayGap -= 7;

  console.log(weeks[dayGap]);
}

/** solution 함수 호출 */
solution(dueMonth, dueDate);
