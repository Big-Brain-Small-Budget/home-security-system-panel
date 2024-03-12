input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.showString("ARM")
    armed = 1
})
function activate () {
    basic.showString("G")
    if (armed == 1) {
        armed = 0
        active = 1
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("OFF")
    active = 0
})
input.onButtonPressed(Button.B, function () {
    activate()
})
input.onGesture(Gesture.Shake, function () {
    if (input.acceleration(Dimension.Strength) > 1) {
        activate()
    }
})
let lastSignal = 0
let active = 0
let armed = 0
let signalOffset = 10
music.setVolume(255)
armed = 0
active = 0
music.setBuiltInSpeakerEnabled(true)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
basic.forever(function () {
    let currentSignal = 0
    if (active) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (currentSignal < lastSignal - signalOffset) {
        activate()
    } else if (currentSignal > lastSignal + signalOffset) {
        activate()
    } else {
    	
    }
    lastSignal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
