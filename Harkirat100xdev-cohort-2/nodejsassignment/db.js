const mongoose = require("mongoose")

module.exports = () => {
    const connectionParam = {
        useNewUrlParser: true,
		useUnifiedTopology: true,
    };
    try {
        // const uri = 'mongodb+srv://shubham7276:shubham7276@cluster0.3jerenb.mongodb.net/userlogins'
        const uri = 'mongodb+srv://new-user-123:new-user-123@cluster0.3jerenb.mongodb.net/user-app'
        mongoose.connect(uri);
        console.log("Connected to database succefully");
    } catch (error) {
        console.log(error);
		console.log("Could not connect database!");
    }
}