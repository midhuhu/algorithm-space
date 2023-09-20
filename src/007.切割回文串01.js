/**
 *
 * @param s 待切割的字符串
 * @param a 当前递归操作的起始索引，默认为0
 * @param v 一个数组，用于保存当前已经找到的回文子串
 * @returns {*[][]|*[]} 结果
 */

const palindromeString = (s, a = 0, v = []) => {
    if (a === s.length) {
        // 递归终止条件
        return [v]
    }
    let result = []
    // 循环目标字符串
    for (let b = a; b < s.length; b++) {
        const item1 = s.slice(a, b + 1)
        const item2 = [...item1].reverse().join('')

        if (item1 === item2) {
            const pre = palindromeString(s, b + 1, [...v, item1])
            result = [...result, ...pre]
        }
    }
    return result
};


console.log(palindromeString("aab"))
console.log(palindromeString("cocoo"))
console.log(palindromeString("huawei"))
