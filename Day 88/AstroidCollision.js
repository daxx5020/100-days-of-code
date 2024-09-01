// Astroid collisions

const asteroidCollision = function(asteroids){
    let st = [];
    let n = asteroids.length;

    for (let i = 0; i < n; i++){
        if (asteroids[i] > 0){
            st.push(asteroids[i]);
        }
        else{
            while(st.length > 0 && st[st.length - 1] > 0 && st[st.length - 1] < Math.abs(asteroids[i])){
                st.pop();
            }

            if (st.length > 0 && st[st.length - 1 ] === Math.abs(asteroids[i])){
                st.pop();
            }
            else if(st.length === 0 || st[st.length - 1] < 0){
                st.push(asteroids[i]);
            }
        }
    }
    return st;
}

let asteroids = [8,-8];
console.log(asteroidCollision(asteroids));