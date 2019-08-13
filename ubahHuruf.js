function ubahHuruf(kata) {
    // you can only write your code here!
    var abjadKecil = 'abcdefghijklmnopqrstuvwxyza'
    var abjadKapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
    var temp = ''

    for (var i = 0; i < kata.length; i++) {

        for (var j = 0; j < abjadKecil.length - 1; j++) {

            if (kata[i] === abjadKecil[j]) {
                temp += abjadKecil[abjadKecil.indexOf(kata[i]) + 1]
            }
            if (kata[i] === abjadKapital[j]) {
                temp += abjadKapital[abjadKapital.indexOf(kata[i]) + 1]
            }
        }

    }
    return temp

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu