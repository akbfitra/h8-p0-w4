function urutkanAbjad(str) {
    // you can only write your code here!
    var pisah = str.split('')
    var balik = pisah.sort()
    var join = balik.join('')

    return join
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'