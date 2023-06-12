// weekly review
let arr = [1, 3, 2, 1, 1, 1, 2, 4, 4, 5, 5, 6, 7, 8, 3]
for (let i = 0; i < arr.length; i++) {
    let count=0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]){
            count++;
        }
    }
    console.log(arr[i],':',count)
}
