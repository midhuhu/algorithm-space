/* 
编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。
返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。
请你在不使用内置方法 Array.map 的前提下解决这个问题。

 
示例 1:
输入：arr = [1,2,3], fn = function plusone(n) { return n + 1; }
输出：[2,3,4]
解释： 
const newArray = map(arr, plusone); // [2,3,4]
此映射函数返回值是将数组中每个元素的值加 1。

示例 2:
输入：arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
输出：[1,3,5]
解释：此映射函数返回值根据输入数组索引增加每个值。

示例 3:
输入：arr = [10,20,30], fn = function constant() { return 42; }
输出：[42,42,42]
解释：此映射函数返回值恒为 42。 
*/

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let new_arr: number[] = []
    for (let i = 0; i < arr.length; i++) {
        new_arr[i] = fn(arr[i], i)
    }
    return new_arr
};

function plusone(n: number) { return n + 1; }
console.log('map1', map([1, 2, 3], plusone))

function plusI(n: number, i: number) { return n + i; }
console.log('map2', map([1, 2, 3], plusI))

function constant() { return 42; }
console.log('map3', map([10, 20, 30], constant))
