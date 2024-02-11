const mongoose = require("mongoose")

module.exports = () => {
    try {
        const uri = 'mongodb+srv://new-user-123:new-user-123@cluster0.3jerenb.mongodb.net/employee-system'
        mongoose.connect(process.env.DB || uri);
        console.log("Connected to database succefully");
    } catch (error) {
        console.log(error);
		console.log("Could not connect database!");
    }
}
