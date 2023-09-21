/**
 * 现给定一个对象或数组 obj，返回一个 精简对象 。精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为 假 值。
 *
 * 你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。
 *
 *
 *
 * 示例 1：
 *
 * 输入：obj = [null, 0, false, 1]
 * 输出：[1]
 * 解释：数组中的所有假值已被移除。
 * 示例 2：
 *
 * 输入：obj = {"a": null, "b": [false, 1]}
 * 输出：{"b": [1]}
 * 解释：obj["a"] 和 obj["b"][0] 包含假值，因此被移除。
 * 示例 3：
 *
 * 输入：obj = [null, 0, 5, [0], [false, 16]]
 * 输出：[5, [], [16]]
 * 解释：obj[0], obj[1], obj[3][0], 和 obj[4][0] 包含假值，因此被移除。
 *
 *
 * 提示：
 *
 * obj 是一个有效的 JSON 对象
 * 2 <= JSON.stringify(obj).length <= 106
 */


type obj = Record<string, any> | Array<any>


/**
 * 解答版本
 * @param obj
 */
const compactObject = (obj: obj) => {
    let arr: any[] = []
    let abj: Record<string, any> = {}
    if (Array.isArray(obj)) {
        obj.forEach(objKey => {
            if (Object.prototype.toString.call(objKey) !== '[object Object]' && Object.prototype.toString.call(objKey) !== '[object Array]') {
                objKey && arr.push(objKey)
            } else {
                arr.push(compactObject(objKey as any))
            }
        })
        return arr
    }
    for (const objKey in obj) {
        if (Array.isArray(obj[objKey]) || Object.prototype.toString.call(obj[objKey]) === '[object Object]') {
            abj[objKey] = compactObject(obj[objKey] as any)
        } else {
            if (obj[objKey]) {
                abj[objKey] = obj[objKey]
            }
        }
    }
    return abj

};

/**
 * 订正版本
 */
function compactObject1(obj: Record<string, any>): Record<string, any> {
    // 不是对象就可能是null或者字符，数字（因为题目说是JSON转化，排除函数和奇怪的东西）
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // 数组的话可以直接枚举
    if (Array.isArray(obj)) {
        const res = [];
        for (let it of obj) {
            const val = compactObject1(it);
            if (val) res.push(val);
        }
        return res;
    }
    // 对象需要把key拿出来
    const res: any = {};
    const keys = Object.keys(obj);
    for (let key of keys) {
        const val = compactObject1(obj[key]);
        if (val) res[key] = val;
    }
    return res;
}


// console.log(compactObject([null, 0, false, 1]))
// console.log(compactObject([null, 0, false, 1, [1, false]]))
// console.log(compactObject([null, 0, 5, [0], [false, 16], {'a': 1, 'b': false}]))
// console.log(compactObject({"a": null, "b": [false, 1]}))
// console.log(compactObject({"a": null, "b": {"c": 1, "d": false}}))

console.log(compactObject1([null, 0, false, 1]))
console.log(compactObject1([null, 0, false, 1, [1, false]]))
console.log(compactObject1([null, 0, 5, [0], [false, 16], {'a': 1, 'b': false}]))
console.log(compactObject1({"a": null, "b": [false, 1]}))
console.log(compactObject1({"a": null, "b": {"c": 1, "d": false}}))
