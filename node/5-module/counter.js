let count = 0;

export function increase() {
  count++;
}

//export - �ش� js���� �ܺο��� ��밡��
export function getCount() {
  return count;
}

// module.exports.getCount = getCount;
// module.exports.increase = increase;
// console.log(module);
