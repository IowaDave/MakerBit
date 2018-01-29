basic.forever(() => {
    MakerBit.forwardMotorA()
    for (let q = 0; q <= 10; q++) {
        MakerBit.motorA(1023 * ((10 - q) * (10 - q)) / 100)
        basic.pause(500)
    }
    MakerBit.reverseMotorA()
    for (let r = 0; r <= 10; r++) {
        MakerBit.motorA(1023 * (r * r) / 100)
        basic.pause(500)
    }
    MakerBit.stopMotorA()
    basic.pause(500)
})
