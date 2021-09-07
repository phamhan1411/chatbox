const express = require("express")
const api = express()
const mysql = require('mysql')
const cors = require("cors")
const md5 = require('md5')
const socket = require('socket.io')
const path = require('path')
const PORT = 8080;

// Have Node serve the files for our built React app
api.use(express.static(path.resolve(__dirname, 'build')))

// Handle GET requests to /api route
api.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" })
})

// All other GET requests not handled before will return our React app
api.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

api.use(cors())
api.use(express.json())
api.use(express.urlencoded({
    extended: true
}))

const connection = mysql.createConnection({
    host: "localhost",
    user: "root", //u405150895_phamhan	
    password: "", 
    database: "phamhan" //u405150895_phamhan
})

connection.connect((error) => {
    error ? console.log(error) : console.log("Connect thành công")
})

api.get("/api/message_lines", (req, res) => {
    const sql = "SELECT * FROM chatbox_line"
    connection.query(sql, (error, result) => {
        if(error) throw error
        const lines = result.length
        res.json({lines})
    })
})

api.post("/api/get_message", (req, res) => {
    const { number } = req.body
    const sql = "(SELECT * FROM chatbox_line ORDER BY chat_id DESC LIMIT "
                + number 
                + ") ORDER BY chat_id"
    const messages = []
    connection.query(sql , (error, results) => {
        if(error) throw error
        results.map(item => {
            messages.push({
                id : item.chat_id,
                author : item.chat_author,
                message : item.chat_message,
                time : item.chat_time,
                same_author : "",
                start : "",
                end : "",
            })
        })
        res.send({messages : messages})
    })
})

api.post("/api/login", (req, res) => {
    if(req.body.username !== "" && req.body.password !== ""){
        const sql = "SELECT * FROM user_info WHERE user_name='"
                + req.body.username
                + "' AND user_password='"
                + md5(req.body.password)
                + "'"
        connection.query(sql, (error, results) => {
            if(error) throw error
            if(results.length == 1){
                results.map(item => {
                    res.json({
                        isLogin: true,
                        userID: item.user_id,
                        userName: item.user_name
                    })
                })
            }else{
                res.json({
                    isLogin: false
                })
            }
        })
    }
    
})

const server = api.listen(PORT, () => console.log(`API đang chạy trên PORT ${PORT}`))

io = socket(server)

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("send_message", (data) => {
        const { message } = data
        if(message === "/clear"){
            //delete db
            const sql = "TRUNCATE TABLE chatbox_line"
            connection.query(sql)
        }else if(message !== ""){
            //update db sql
            var sql = "INSERT INTO chatbox_line (chat_author, chat_message) VALUES ('"
                + data.username
                + "', '"
                + data.message 
                + "')"
            connection.query(sql)
        }
        socket.emit("received_message", {
            newMessage: true
        })
    })

    socket.on("disconnect", () => {
        console.log("Ngắt kết nối")
    })
})