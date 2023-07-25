/**
给你一个整数 finalSum 。请你将它拆分成若干个 互不相同 的正偶数之和，且拆分出来的正偶数数目 最多 。

比方说，给你 finalSum = 12 ，那么这些拆分是 符合要求 的（互不相同的正偶数且和为 finalSum）：(2 + 10) ，(2 + 4 + 6) 和 (4 + 8) 。它们中，(2 + 4 + 6) 包含最多数目的整数。注意 finalSum 不能拆分成 (2 + 2 + 4 + 4) ，因为拆分出来的整数必须互不相同。
请你返回一个整数数组，表示将整数拆分成 最多 数目的正偶数数组。如果没有办法将 finalSum 进行拆分，请你返回一个 空 数组。你可以按 任意 顺序返回这些整数。


示例 1：
输入：finalSum = 12
输出：[2,4,6]
解释：以下是一些符合要求的拆分：(2 + 10)，(2 + 4 + 6) 和 (4 + 8) 。
(2 + 4 + 6) 为最多数目的整数，数目为 3 ，所以我们返回 [2,4,6] 。
[2,6,4] ，[6,2,4] 等等也都是可行的解。

示例 2：
输入：finalSum = 7
输出：[]
解释：没有办法将 finalSum 进行拆分。
所以返回空数组。

示例 3：
输入：finalSum = 28
输出：[6,8,2,12]
解释：以下是一些符合要求的拆分：(2 + 26)，(6 + 8 + 2 + 12) 和 (4 + 24) 。
(6 + 8 + 2 + 12) 有最多数目的整数，数目为 4 ，所以我们返回 [6,8,2,12] 。
[10,2,4,12] ，[6,2,4,16] 等等也都是可行的解。
 */


function maximumEvenSplit(finalSum: number): number[] {
    console.time()
    console.log(1)
    let nums: number[] = []
    for (let i = 1; i <= finalSum; i++) {
        // 取正偶数
        if (i % 2 === 0) {
            nums.push(i)
        }
    }
    console.log(2, nums)
    let result: number[] = []
    let n = 0
    // 回溯 找出所有符合相加等于finalSum的正偶数数组
    function sum(startIndex: number, currentResult: number[], currentSum: number) {
        // console.log(n++)
        if (currentSum === finalSum && currentResult.length > result.length) {
            result.push(...currentResult)
            return
        }
        if (currentSum > finalSum) {
            return
        }

        for (let i = startIndex; i < nums.length; i++) {
            currentResult.push(nums[i])
            currentSum += nums[i]

            sum(i + 1, currentResult, currentSum)

            currentResult.pop()
            currentSum -= nums[i]
        }
    }
    sum(0, [], 0)
    console.timeEnd()
    return result
};


// console.log('maximumEvenSplit1', maximumEvenSplit(12))

// console.log('maximumEvenSplit2', maximumEvenSplit(950))
console.log('maximumEvenSplit3', maximumEvenSplit(100))
// console.log('maximumEvenSplit4', maximumEvenSplit(2))
