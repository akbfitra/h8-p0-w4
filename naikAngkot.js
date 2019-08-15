function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var output = []

    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < arrPenumpang[i].length; j++) {
            object = {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: 0
            }

            var indexN = 0
            var indexT = 0
            for (var k = 0; k < rute.length; k++) {
                if (arrPenumpang[i][1] == rute[k]) {
                    indexN = k
                }
                if (arrPenumpang[i][2] == rute[k]) {
                    indexT = k
                }
            }
            var uang = 0
            for (var l = indexN; l <= indexT; l++) {
                if (rute[l] != arrPenumpang[i][2]) {
                    uang += 2000
                }
                object.bayar = uang
            }

        }
        output.push(object)


    }
    return output

}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]