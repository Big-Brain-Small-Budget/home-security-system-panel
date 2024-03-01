input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.showString("ARM")
    pins.digitalWritePin(DigitalPin.P1, 1)
})
music.setBuiltInSpeakerEnabled(true)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
basic.showString("OFF")
basic.forever(function () {
	
})
