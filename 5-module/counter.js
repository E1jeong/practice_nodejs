let count = 0;

export function increase() {
  count++;
}

//export - 해당 js파일 외부에서 사용가능
export function getCount() {
  return count;
}

// module.exports.getCount = getCount;
// module.exports.increase = increase;
// console.log(module);
