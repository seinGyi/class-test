function Devices(){
    this.turnOnOff = function(data) {
        console.log('control lamp', data)
    }
    this.barrierOnOff = function(data) {
        console.log('gpiob', data)
    }
}

module.exports = Devices