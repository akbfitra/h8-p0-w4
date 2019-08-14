function shoppingTime(memberId, money) {
    // you can only write your code here!
    var object = {}
    var listPurchased = []
    var list = [
        { barang: 'Sepatu Staccatu', harga: 1500000 },
        { barang: 'Baju Zoro', harga: 500000 },
        { barang: 'Baju H&N', harga: 250000 },
        { barang: 'Sweater Uniklooh', harga: 175000 },
        { barang: 'Casing Handphone', harga: 50000 }
    ]
    var uangMasih = money

    if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    if (uangMasih < 50000) return 'Mohon maaf, uang tidak cukup'

    for (var i = 0; i < list.length; i++) {
        if (uangMasih >= list[i].harga) {
            uangMasih -= list[i].harga
            listPurchased.push(list[i].barang)
        }
    }
    object['memberId:'] = memberId
    object['money:'] = money
    object['listPurchased:'] = listPurchased
    object['changeMoney:'] = uangMasih
    return object
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja