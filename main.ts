music.playMelody("C F B A B A B C5 ", 120)
basic.showString("Hello Listen!")
basic.showString("Guess the Three Tones & I will tell u My Name!")
basic.clearScreen()
basic.showIcon(IconNames.EigthNote)
basic.pause(1000)
music.playTone(220, music.beat(BeatFraction.Double))
basic.pause(1000)
music.playTone(440, music.beat(BeatFraction.Double))
basic.pause(1000)
music.playTone(880, music.beat(BeatFraction.Double))
basic.pause(1000)
basic.showString("The Game Begins!")
let Tone_X = input.buttonIsPressed(Button.A)
let Tone_Y = input.buttonIsPressed(Button.B)
Tone_Y = input.buttonIsPressed(Button.AB)
basic.clearScreen()
basic.showString("Press A for Low, B for Medium, A+B for High")
basic.showString("Ready & Listen!")
basic.pause(3000)
music.playTone(220, music.beat(BeatFraction.Breve))
basic.pause(3000)
if (input.buttonIsPressed(Button.A)) {
    basic.showString("Good!")
} else {
    basic.showString("Try Again!")
}
basic.pause(3000)
music.playTone(440, music.beat(BeatFraction.Breve))
basic.pause(3000)
if (input.buttonIsPressed(Button.B)) {
    basic.showString("Great!")
} else {
    basic.showString("Try Again!")
    basic.pause(3000)
}
music.playTone(880, music.beat(BeatFraction.Breve))
basic.pause(3000)
if (input.buttonIsPressed(Button.AB)) {
    basic.showString("Wonderful!")
    basic.showString("My Name is SARAH Maarabani")
    basic.pause(3000)
} else {
    basic.showString("Try Again!")
    basic.pause(3000)
}
basic.showString("END!")
