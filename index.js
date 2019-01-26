const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const Gpio = require('./GPIOs')

const  device = new Gpio()

app.get('/', (req, res) => {
    res.end('Socket server') // Truckscale server
  })

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

    socket.on('gpio', (data) => {
        console.log('received gpio channel', data)
        device.turnOnOff(data)
    })

    socket.on('gpiob', (data) => {
        console.log('received barrier', data)
        device.barrierOnOff(data)
    })
})

http.listen(3000, () => {
    console.info('listening on *:3000')
})