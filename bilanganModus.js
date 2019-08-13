function cariModus(arr) {
    // you can only write your code here!
    var tempModus = 0
    var pembanding = 0
    for (var i = 0; i < arr.length; i++) {
        var nilaiModus = 0
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                nilaiModus++
            }
            if (pembanding < nilaiModus) {
                tempModus = arr[j]
                pembanding = nilaiModus
            }
        }
    }
    if (pembanding <= 1) {
        return -1
    }
    if (pembanding === arr.length) {
        return -1
    } else
        return tempModus

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([10, 5, 10, 6, 5]));