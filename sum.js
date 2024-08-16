var twoSum = function(nums, target) {
    let map = {}; // Create a hash map to store the value and its index
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Calculate the complement

        // console.log(map)
        if (map[complement] !== undefined) {
            console.log([map[complement], i])// Check if the complement exists in the map
            return [map[complement], i]; // If it does, return the indices
        }
        map[nums[i]] = i; // Otherwise, add the current number and its index to the map
        console.log("complement", complement);
        console.log("map[complement]", map[complement])
    }
    return [];
};

twoSum([2,7,11,15], 26);