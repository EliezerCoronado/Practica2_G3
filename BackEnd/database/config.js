const mongoose = require('mongoose');

const dbConnection = async ()=>{

    try{
        //admin
        //9bAQEWsPmJ9gsv8
        //mongodb+srv://admin:9bAQEWsPmJ9gsv8@cluster0.fimi7.mongodb.net/clinica
        await mongoose.connect('mongodb+srv://admin:9bAQEWsPmJ9gsv8@cluster0.fimi7.mongodb.net/clinica', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
        });

        console.log('DB online');
    }catch(error){
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
    
}

module.exports ={
    dbConnection
}