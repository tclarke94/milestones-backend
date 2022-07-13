require('dotenv').config();

const { PORT = 3000, MONGODB_URL } = process.env;



const mongoose = require('mongoose');




const mongoURI = 
process.env.NODE_ENV === 'production'
? process.env.DB_URL
:'mongodb+srv://test:test@cluster0.k5sit.mongodb.net/milestone?retryWrites=true&w=majority'


mongoose.connect(mongoURI);

// connecting events
mongoose.connection
.on('open', () => console.log('you are connected!'))
.on('close', () => console.log('you are disconnected!'))
.on('error', (error) => console.log(error))

module.exports=mongoose