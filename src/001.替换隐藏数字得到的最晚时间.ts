// 给你一个字符串 time ，格式为 hh:mm（小时：分钟），其中某几位数字被隐藏（用 ? 表示）。

// 有效的时间为 00:00 到 23:59 之间的所有时间，包括 00:00 和 23:59 。

// 替换 time 中隐藏的数字，返回你可以得到的最晚有效时间。


// 示例 1：
// 输入：time = "2?:?0"
// 输出："23:50"
// 解释：以数字 '2' 开头的最晚一小时是 23 ，以 '0' 结尾的最晚一分钟是 50 。

// 示例 2：
// 输入：time = "0?:3?"
// 输出："09:39"

// 示例 3：
// 输入：time = "1?:22"
// 输出："19:22"

function maximumTime(time: string) {
    let a, b, c, d;
    if (time[0] === '?') {
        a = (time[1] === '?' || Number(time[1]) <= 3) ? '2' : '1';
    } else {
        a = time[0];
    }

    if (time[1] === '?') {
        b = (Number(a) === 2) ? '3' : '9';
    } else {
        b = time[1];
    }

    if (time[3] === '?') {
        c = '5';
    } else {
        c = time[3];
    }

    if (time[4] === '?') {
        d = '9';
    } else {
        d = time[4];
    }

    return a + b + ':' + c + d;
}


console.log('return', maximumTime('2?:0?'))
console.log('return', maximumTime('?5:3?'))
console.log('return', maximumTime('?2:3?'))
console.log('return', maximumTime('1?:3?'))
console.log('return', maximumTime('??:??'))

