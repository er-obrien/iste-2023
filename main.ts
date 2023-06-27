enum RadioMessage {
    message1 = 49434,
    napping = 38771
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.soundLevel())
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        datalogger.log(
        datalogger.createCV("A", input.soundLevel()),
        datalogger.createCV("B", input.lightLevel())
        )
        basic.pause(5000)
    }
})
basic.forever(function () {
	
})
