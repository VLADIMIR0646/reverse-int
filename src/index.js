module.exports = function reverse(n) {


   let result = [];
   let arr = Array.from(String(n))
   if ((arr[0] === '-')) {
      result = (arr.slice(1));
   } else {
      result = arr;
   }
   return Number(result.reverse().join(''));
}

// console.log(reverse(-123));
// console.log(reverse(+456789));
// console.log(reverse(987654));
// console.log(reverse(0102));

