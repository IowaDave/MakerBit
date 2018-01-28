basic.forever(() => {
    MakerBit.forwardMotorA()
    for (let q = 0; q <= 10; q++) {
        MakerBit.motorSpeedA(1023 * ((10 - q) * (10 - q)) / 100)
        basic.pause(500)
    }
    MakerBit.reverseMotorA()
    for (let r = 0; r <= 10; r++) {
        MakerBit.motorSpeedA(1023 * (r * r) / 100)
        basic.pause(500)
    }
    MakerBit.stopMotorA()
    basic.pause(500)
    MakerBit.speedAll(880)
    MakerBit.allForward()
    basic.pause(3000)
    MakerBit.allStop()
    basic.pause(3000)

})
