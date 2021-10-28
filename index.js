const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1000;

let User = {
    username: "dogecoin",
    password: "password1",
    email: "test@test.com",
    courses: {
        course: {
            classId: "CMSC2204",
            courseName: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course1: {
            classId: "CMSC2204",
            courseName: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course2: {
            classId: "CMSC2204",
            courseName: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        }
    }
}

app.get('/getUser', (req, res) => {
    try{
        return res.status(200).json(User);
    }
    catch {
        return res.status(500);
    }
});

app.post('/addUser', (req, res) => {
    try {
        console.log(req.body);
        return res.status(200).json("Added user username successfully");
    }
    catch {
        return res.status(500);

    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});