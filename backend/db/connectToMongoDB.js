import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://user:user@cluster0.whdico0.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0"
		);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
