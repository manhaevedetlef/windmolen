



let draai = 0
input.onButtonPressed(Button.A, function () {
    draai += 1
})
input.onButtonPressed(Button.B, function () {
    draai = 0
})
basic.forever(function () {
    for (let index = 0; index < draai; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }


    while (draai) {
        true
    }
})
