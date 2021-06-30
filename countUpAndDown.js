function countUpAndDown(n){
    console.log("We are going up!!!")
    for(let i=0;i<=n;i++){
        console.log(i);
    }
    console.log(`We are going down now hold tight`);
    for(let j=n;j>=0;j--){
        console.log(j);
    }
}

countUpAndDown(10);