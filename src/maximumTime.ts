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

