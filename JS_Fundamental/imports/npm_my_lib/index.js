const isPalindrome = function (str) {
    if (Number.isInteger(str)) {
        str = str.toString()
    }
    if (str.length === 1) return true
    let r = str.length - 1
    for (let l = 0; l < Math.floor(str.length / 2); l++) {
        if (!(str[l] === str[r])) return false
        r--
    }
    return true
};

module.exports = isPalindrome;
