/**
 * 给你一个 m x n 的整数矩阵 points （下标从 0 开始）。一开始你的得分为 0 ，你想最大化从矩阵中得到的分数。
 *
 * 你的得分方式为：每一行 中选取一个格子，选中坐标为 (r, c) 的格子会给你的总得分 增加 points[r][c] 。
 *
 * 然而，相邻行之间被选中的格子如果隔得太远，你会失去一些得分。对于相邻行 r 和 r + 1 （其中 0 <= r < m - 1），选中坐标为 (r, c1) 和 (r + 1, c2) 的格子，你的总得分 减少 abs(c1 - c2) 。
 *
 * 请你返回你能得到的 最大 得分。
 *
 * abs(x) 定义为：
 *
 * 如果 x >= 0 ，那么值为 x 。
 * 如果 x < 0 ，那么值为 -x 。
 */

function maxPoints(points: number[][]): number {
    const m: number = points.length;
    const n: number = points[0].length;

    // 创建一个与 points 相同大小的 dp 数组
    const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 初始化 dp 数组的第一行
            if (i === 0) {
                dp[i][j] = points[i][j];
            } else {
                // 计算当前格子的最大得分
                let maxScore = 0;
                for (let k = 0; k < n; k++) {
                    maxScore = Math.max(maxScore, dp[i - 1][k] + points[i][j] - Math.abs(j - k));
                }
                dp[i][j] = maxScore;
            }
        }
    }

    // 返回最后一行的最大得分
    return Math.max(...dp[m - 1]);
}

console.log(maxPoints([[1,2,3],[1,5,1],[3,1,1]]))
console.log(maxPoints([[1,5],[2,3],[4,2]]))
console.log(maxPoints([[2,4,0,5,5],[0,5,4,2,5],[2,0,2,3,1],[3,0,5,5,2]]))
console.log(maxPoints([[0,3,0,4,2],[5,4,2,4,1],[5,0,0,5,1],[2,0,1,0,3]]))
console.log(maxPoints([
    [4,4,2,2,1],    // 4
    [5,5,2,1,2],    // 5
    [3,1,5,5,2],    // 3
    [3,2,0,0,3]     // 3
]))
