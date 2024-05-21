nums = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {
    const elementCount = {};
    const majorityThreshold = Math.floor(nums.length / 2);
  
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      elementCount[element] = (elementCount[element] || 0) + 1;
      if (elementCount[element] > majorityThreshold) {
        return element;
      }
    }
};

console.log(findMajorityElement(nums))