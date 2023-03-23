var twoSum = function(nums, target) {
    let map = new Object();
    for(let i in nums){
        if ( map[target - nums[i]]){
            return [map[target - nums[i]], i]
        } else{
            map[nums[i]] = i
        }
    }
};


nums = [2,7,11,15], target = 9

console.log(twoSum(nums, target))