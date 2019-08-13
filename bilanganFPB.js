function fpb(angka1, angka2) {
    // you can only write your code here!
    var hasil1 = []
    var hasil2 = []
    for (var i = 0; i < angka1; i++) {
        if (angka1 % i === 0) {
            hasil1.push(i)
        }
    }

    for (var j = 0; j < angka2; j++) {
        if (angka2 % j === 0) {
            hasil2.push(j)
        }
    }


    var out1 = []
    for (var k = 0; k < hasil1.length; k++) {
        for (var l = 0; l < hasil2.length; l++) {
            if (hasil1[k] === hasil2[l]) {
                out1.push(hasil2[l])
            }
        }
    }


    var terbesar = out1[0]
    for (var m = 1; m < out1.length; m++) {
        if (out1[m] < terbesar) {
            out1 = out1[m]
        }
    }

    // return out1

    var out = out1[0]
    for (var m = 1; m < out1.length; m++) {
        if (out1[m] > out) {
            out = out1[m]
        }
    }
    return out
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1