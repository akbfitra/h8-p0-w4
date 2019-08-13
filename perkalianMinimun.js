function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    temp = []

    for (var i = 1; i <= angka; i++) {
        for (var j = 1; j <= angka; j++) {
            if (i * j === angka) {
                temp.push(i.toString() + j.toString())
            }
        }
    }

    var pembanding = temp[0].length
    for (var h = 0; h < temp.length; h++) {
        if (pembanding > temp[h].length) {
            pembanding = temp[h].length
        }
    }
    return pembanding
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2