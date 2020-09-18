const jwt = require('jsonwebtoken');


const generarJWT = (uid)=>{
    
    return new Promise((resolve,reject)=>{
        const payload = {
            uid: uid
        };
    
        jwt.sign(payload, 'practica2',{
            expiresIn:'24h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el JWT');
            }else{
                resolve(token);
            }
        });
    });    
}

module.exports ={
    generarJWT
}