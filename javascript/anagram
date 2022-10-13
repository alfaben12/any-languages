const isAnagram = (str1, str2) => {

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();


  if (str1.length !== str2.length) {
     return false
  }

  let sortStr1 = str1.split('').sort().join('').trim();
  let sortStr2 = str2.split('').sort().join('').trim();

  return sortStr1 === sortStr2
 };

console.log(isAnagram('dog', 'goD'));
