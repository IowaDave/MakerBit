/************************************************************
 * MakerBit - a package of custom functions designed for    *
 * Roger Wagner's MakerBit extender for micro:bit.          *
 * Version 1.0 January 26, 2018                             *
 * Includes only basic functions for bi-directional motors. *
 * Author: David Sparks, a.k.a. "Iowa Dave"                 *
 ************************************************************/

// module-level variables

let speedA = 1023
let speedB = 1023

/**
 * MakerBit blocks
 */
//% weight=100 color=#8dbdb1 icon="\uf004"
namespace MakerBit {

    /*
     * TODO: forwardMotorA starts Motor A moving forward
     */
    //% weight=88
    //% block
    export function forwardMotorA() {
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, speedA)
    }

    /*
     * TODO: reverseMotorA starts Motor A moving backward
     */
    //% weight=86
    //% block
    export function reverseMotorA() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P13, speedA)
    }

    /*
     * TODO: stopMotorA de-energizes Motor A 
     */
    //% weight=84
    //% block
    export function stopMotorA() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
    }

    /*
     * TODO: setSpeedA establishes the speed of motor A
     * @param speed
     */
    //
    //% weight=82
    //% block
    export function motorSpeedA(speed: number) {
        if (speed > 1023) {
            speedA = 1023
        } else if (speed < 0) {
            speedA = 0
        } else { speedA = speed }
        pins.analogWritePin(AnalogPin.P13, speedA)
    }

    /*
     * TODO: forwardMotorB starts Motor B moving forward
     */
    //% weight=78
    //% block
    export function forwardMotorB() {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P14, speedA)
    }

    /*
     * TODO: reverseMotorB starts Motor B moving backward
     */
    //% weight=76
    //% block
    export function reverseMotorB() {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P14, speedA)
    }

    /*
     * TODO: stopMotorB de-energizes Motor B
     */
    //% weight=74
    //% block
    export function stopMotorB() {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
    }

    /*
     * TODO: setSpeedB establishes the speed of motor B
     * @param speed
     */
    //
    //% weight=72
    //% block
    export function motorSpeedB(speed: number) {
        if (speed > 1023) {
            speedB = 1023
        } else if (speed < 0) {
            speedB = 0
        } else { speedB = speed }
        pins.analogWritePin(AnalogPin.P13, speedA)
    }

    /*
     * TODO: allForward starts both motors moving forward
     */
    //% weight=98
    //% block
    export function allForward() {
        MakerBit.forwardMotorA()
        MakerBit.forwardMotorB()
    }

    /*
     * TODO: allReverse starts both motors moving backward
     */
    //% weight=96
    //% block
    export function allReverse() {
        MakerBit.reverseMotorA()
        MakerBit.reverseMotorB()
    }

    /*
     * TODO: allStop de-energizes both motors
     */
    //% weight=94
    //% block
    export function allStop() {
        MakerBit.stopMotorA()
        MakerBit.stopMotorB()
    }

    /*
     * TODO: speedAll sets a the same speed on both motors
     * @param speed
     */
    //% weight=92
    //% block
    export function speedAll(speed: number) {
        if (speed > 1023) {
            speed = 1023
        } else if (speed < 0) {
            speed = 0
        }
        speedA = speed
        speedB = speed
        pins.analogWritePin(AnalogPin.P13, speedA)
        pins.analogWritePin(AnalogPin.P14, speedB)
    }

}