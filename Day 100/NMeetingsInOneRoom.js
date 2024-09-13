// N Meetings in one room

const maxMeetings = function(n, start, end){
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push({ start: start[i], end: end[i], pos: i + 1 });
    }

    arr.sort((a, b) => {
        if (a.end === b.end) {
            return a.start - b.start;
        }
        return a.end - b.end;
    });

    let ans = 1;
    let endMeeting = arr[0].end;

    for (let i = 1; i < n; i++) {
        if (arr[i].start > endMeeting) {
            ans++;
            endMeeting = arr[i].end;
        }
    }

    return ans;
}

let n = 6
let start = [1, 3, 0, 5, 8, 5]
let end =  [2, 4, 6, 7, 9, 9]

console.log(maxMeetings(n, start, end))