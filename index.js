import http from "http"
import { getTokenInfo } from "./getBalance.js"
import { writeToFile } from "./writeToFile.js"

const host = 'localhost'
const port = 3000

let balanceArray = await getTokenInfo()

const server = http.createServer((req, res) =>{
    res.setHeader("Content-Type", "application/json");
    writeToFile(JSON.stringify(balanceArray))
    res.end(JSON.stringify(balanceArray))

    setInterval(async function() {
        balanceArray = []
        balanceArray = await getTokenInfo()
        writeToFile(JSON.stringify(balanceArray))
        res.end(JSON.stringify(balanceArray))
    }, 60000)
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})
