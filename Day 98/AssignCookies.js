// Assign cookies

const findContentChildren = function(g,s){
    let n = g.length;
    let m = s.length;
    let l = 0;
    let r = 0;
    
    s.sort((a,b) => a - b);
    g.sort((a,b) => a - b);

    while(l < m && r < n){
        if (g[r] <= s[l]){
            r++;
        }
        l = l + 1;
    }
    return r;
}


let g = [1,2]
let s = [1,2,3]

console.log(findContentChildren(g,s))