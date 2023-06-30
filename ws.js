const { WebSocketServer } = require("ws");
const server = require("http").createServer()

const ws = new WebSocketServer({ port: 4100, path: "/ws", host: "192.168.128.9" })

ws.on("connection", (socket) => {
    socket.on("message", (payload) => {
        // console.log(payload.toString())
        console.log(`websocket:Received: ${payload.toString("utf-8")}`)
    })
    socket.on("error", (err) => {
        console.log("websocket:Error: %d", err)
    })
})

ws.on("listening", () => {
    console.log("server: online")
})

// server.listen(4100, "192.168.128.9", () => {
//     console.log("server: online")
// })