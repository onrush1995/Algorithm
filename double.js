function double(arr){
    let double=[];
    for (let i=0;i<arr.length;i++){
        double.push(arr[i]*2);
    }
    return double;
}

console.log(double([1,2,3]));