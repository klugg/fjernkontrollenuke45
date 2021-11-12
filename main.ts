input.onButtonPressed(Button.A, function () {
    radio.sendValue("throttle", 10)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("throttle", -10)
})
radio.setGroup(99)
basic.showString("5")
loops.everyInterval(50, function () {
    radio.sendValue("turn", input.rotation(Rotation.Roll))
})
