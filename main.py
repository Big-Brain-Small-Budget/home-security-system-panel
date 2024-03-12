def on_received_number(receivedNumber):
    global currentSignal
    if armed == 0:
        currentSignal = receivedNumber
    if armed == 1:
        if 0 == 0:
            pass
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global armed
    music.play(music.builtin_playable_sound_effect(soundExpression.happy),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_string("ARM")
    armed = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def activate():
    global armed, active
    if armed == 1:
        armed = 0
        active = 1

def on_button_pressed_ab():
    global active
    basic.show_string("OFF")
    active = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    activate()
input.on_button_pressed(Button.B, on_button_pressed_b)

currentSignal = 0
active = 0
armed = 0
radio.set_group(241)
signalOffset = 2
music.set_volume(255)
armed = 0
active = 0
music.set_built_in_speaker_enabled(True)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
basic.clear_screen()

def on_forever():
    if active:
        pins.digital_write_pin(DigitalPin.P0, 1)
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.IN_BACKGROUND)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
basic.forever(on_forever)
