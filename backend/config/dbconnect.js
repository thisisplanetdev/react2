const { default: mongoose } = require("mongoose");

const dbConnection = ()=>{
    try {
        const connect = mongoose.connect(process.env.mongourl);
        console.log("connected to mongoose succesfully")
    } catch (error) {
        console.log(" there was a error in mongoose connection",error);
        process.exit(1);
    }
}

module.exports ={ dbConnection}