function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!")
    }
}

fly(3)

var fly = function (num) {
    for (var i = 0; i < num; i++) {
        console.log("Flop, flop")
    }
}
quack(3)

