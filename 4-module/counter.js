let count = 0;

function increase() {
  count++;
}

//export - �ش� js���� �ܺο��� ��밡��
function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module);
