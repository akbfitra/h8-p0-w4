function changeMe(arr) {
    // you can only write your code here!
    if (!arr.length) {
        console.log('')
    }
    var object = {}
    for (var i = 0; i < arr.length; i++) {
        object['firstName'] = arr[i][0]
        object['lastName'] = arr[i][1]
        object['gender'] = arr[i][2]
        var tahun = Math.abs(2019 - (arr[i][3]))
        object['age'] = tahun
        if (arr[i][3] == undefined) {
            object['age'] = 'invalid birth year'
        }
        var nama = i + 1 + '. ' + object.firstName + ' ' + object.lastName + ': '
        console.log(nama)
        console.log(object)
    }

}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""