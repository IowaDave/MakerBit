/************************************************************
 * MakerBit - a package of custom functions designed for    *
 * Roger Wagner's MakerBit extender for micro:bit.          *
 * Version 1.1 January 28, 2018                             *
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
     * starts Motor A moving forward
     */
    //% weight=88
    //% blockGap=4
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
    //% blockGap=4
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
    //% blockGap=4
    //% block
    export function stopMotorA() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
    }

    /*
     * TODO: motorA establishes the speed of motor A
     * @param speed
     */
    //% weight=82
    //% blockGap=4
    //% block
    export function motorA(speed: number) {
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
    //% blockGap=4
    //% block
    export function forwardMotorB() {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P14, speedB)
    }

    /*
     * TODO: reverseMotorB starts Motor B moving backward
     */
    //% weight=76
    //% blockGap=4
    //% block
    export function reverseMotorB() {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P14, speedB)
    }

    /*
     * TODO: stopMotorB de-energizes Motor B
     */
    //% weight=74
    //% blockGap=4
    //% block
    export function stopMotorB() {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
    }

    /*
     * TODO: motorB establishes the speed of motor B
     * @param speed
     */
    //% weight=72
    //% blockGap=4
    //% block
    export function motorB(speed: number) {
        if (speed > 1023) {
            speedB = 1023
        } else if (speed < 0) {
            speedB = 0
        } else { speedB = speed }
        pins.analogWritePin(AnalogPin.P14, speedB)
    }

    /*
     * TODO: allForward runs both motors moving forward a certain time
     * *@param time
     */
    //% weight=98
    //% blockGap=4
    //% block
    export function allForward(time: number) {
        MakerBit.forwardMotorA()
        MakerBit.forwardMotorB()
        // run continuously unless a positive non-zero time is given
        if (time > 0) {
            // 
            basic.pause(time)
            allStop()
        }
    }

    /*
     * TODO: allReverse runs both motors in reverse a certain time
     * *@param time
     */
    //% weight=96
    //% blockGap=4
    //% block
    export function allReverse(time: number) {
        MakerBit.reverseMotorA()
        MakerBit.reverseMotorB()
        // run continuously unless a positive non-zero time is given
        if (time > 0){
            basic.pause(time)
            allStop()
        }
    }

    /*
     * TODO: allStop de-energizes both motors
     */
    //% weight=94
    //% blockGap=4
    //% block
    export function allStop() {
        MakerBit.stopMotorA()
        MakerBit.stopMotorB()
    }

    /*
     * TODO: allMotors sets a the same speed on both motors
     * @param speed
     */
    //% weight=92
    //% blockGap=16
    //% block
    export function allMotors(speed: number) {
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

    /*
     * TODO: aSlowerThanB sets the motor A speed to a percentage of the motor B speed. Zero percent to 100 percent
     *@param percent
     */
    //% weight=80
    //% blockGap=16
    //% block
    export function aSlowerThanB(percent: number) {
        if (percent > 100) {
            percent = 100
        } else if (percent < 0) { percent = 0 }
        speedA = speedB * percent / 100
        pins.analogWritePin(AnalogPin.P13, speedA)
    }

    /*
     * TODO: bSlowerThanA sets the motor B speed to a percentage of the motor A speed. Zero percent to 100 percent
     *@param percent
     */
    //% weight=70
    //% blockGap=16
    //% block
    export function bSlowerThanA(percent: number) {
        if (percent > 100) {
            percent = 100
        } else if (percent < 0) { percent = 0 }
        speedB = speedA * percent / 100
        pins.analogWritePin(AnalogPin.P14, speedB)
    }


}


