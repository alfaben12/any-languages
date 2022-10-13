function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}

checkPalindrome("whwhw") ? "Palindrome" : "Nope")
