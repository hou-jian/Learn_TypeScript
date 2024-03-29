// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
myFavoriteNumber = true; // 报错

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): number {
  return something.length; // 这里就会报错 number 里没有 length 属性
}

function getString(something: string | number): string {
  return something.toString(); // toString 是它们共有的，不会报错
}





