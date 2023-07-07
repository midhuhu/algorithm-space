function _maximumTime(time: string) {
    let a = time[0] === '?' ? (time[1] === '?' || Number(time[1]) <= 3) ? '2' : '1' : time[0];
    let b = time[1] === '?' ? Number(a) === 2 ? '3' : '9' : time[1];
    let c = time[3] === '?' ? '5' : time[3];
    let d = time[4] === '?' ? '9' : time[4];

    return `${a}${b}:${c}${d}`;
}


console.log('return', _maximumTime('2?:0?'))
console.log('return', _maximumTime('?5:3?'))
console.log('return', _maximumTime('?2:3?'))
console.log('return', _maximumTime('1?:3?'))
console.log('return', _maximumTime('??:??'))

