input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.showString("ARM")
    armed = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    if (armed == 1) {
        armed = 0
        active = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("OFF")
    active = 0
})
input.onButtonPressed(Button.B, function () {
    if (armed == 1) {
        armed = 0
        active = 1
    }
})
let active = 0
let armed = 0
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
    if (active) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
