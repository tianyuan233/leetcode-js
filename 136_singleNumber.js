var singleNumber = function(nums) {

    nums.sort((a,b) => a-b);
    console.log(nums);
    for (let index = 0; index < nums.length; index+=2) {
        console.log("index:",index,"data:",nums[index]);
        console.log("index+1:", index + 1, "data:", nums[index +1]);
        console.log("----");
        if (nums[index] !== nums[index+1]) return nums[index];   
    }
};



console.log(singleNumber([4, 1, 2, 1, 2]));