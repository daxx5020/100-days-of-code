// Maximum ractangle


const maximumRectangle = function(matrix) {
    if (matrix.length === 0) return 0;

    const n = matrix.length;
    const m = matrix[0].length;
    const heights = new Array(m).fill(0);
    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            heights[j] = matrix[i][j] === '0' ? 0 : heights[j] + 1;
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};


const largestRectangleArea = function(heights) {
    const stack = [];
    let maxArea = 0;
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};
