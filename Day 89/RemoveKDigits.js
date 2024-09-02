// Remove k digits

const removeKDigits = function(num, k) {
    let st = [];
    let n = num.length;

    for (let i = 0; i < n; i++) {
        while (st.length !== 0 && k > 0 && st[st.length - 1] > num[i]) {
            st.pop();
            k--;
        }
        st.push(num[i]);
    }

    while (k > 0) {
        st.pop();
        k--;
    }

    let res = "";
    while (st.length !== 0) {
        res = st.pop() + res;
    }

    // Remove leading zeroes
    res = res.replace(/^0+/, '');

    return res.length === 0 ? "0" : res;
};

let num = "1432219";
let k = 3;

console.log(removeKDigits(num, k));