import { hi } from './hello';
function summ(a, b) {
    console.log('计算:' + a + '+' + b + '=');
    return a + b;
}
const objMan = {
    name: '马冬梅',
    age: 88,
    text: '马什么梅？'
};
objMan.age = 18;
console.log(objMan);
console.log(Promise);
console.log(summ(123, 454), hi);
