input.onButtonPressed(Button.A, function () {
    if (125 < input.lightLevel()) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
})
