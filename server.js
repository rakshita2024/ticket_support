// // D9JuRsTf8BmPwQYm

const express = require('express');
const mongoose = require('mongoose');
const ticketRouter = require('./router/ticket');
const app = express();
const cors = require('cors');
const PORT = 3000;


app.use(cors());
app.use(express.json());



main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://ajdroliya047:CXNTWWJFSGCMkM4E@cluster0.nlaibb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('database connection started');
}

const corsOptions = {
    origin: 'http://localhost:3001', // Your React frontend's origin
    optionsSuccessStatus: 200, // Some legacy browsers require this
  };


//  router
app.use('/api', ticketRouter);

app.use(cors(corsOptions));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
