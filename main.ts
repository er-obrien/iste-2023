enum RadioMessage {
    message1 = 49434,
    napping = 38771
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    basic.showNumber(input.lightLevel())
    datalogger.log(
    datalogger.createCV("A", input.soundLevel()),
    datalogger.createCV("B", input.lightLevel())
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.EighthNote)
    basic.showNumber(input.soundLevel())
})
basic.forever(function () {
	
})
