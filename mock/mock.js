const express = require('express');

const app = express();

app.get('/list', (req, res) => {
    res.set({
        "Content-Type": "text/plain;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    });
    res.send({
        status: 200,
        success: true,
        data: [
            {
                name: "uzi",
                id: 1
            },
            {
                name: "jacklove",
                id: 2
            }
        ]
    })
})

app.listen(9091);