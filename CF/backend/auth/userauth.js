const mongoose = require('mongoose');

// Define a schema for the user data
const userSchema = new mongoose.Schema({
    username: String,
    accountId: String
});

// Define a model for the user data
const User = mongoose.model('User', userSchema);

// Function to store user data in MongoDB
exports.register = async (req, res) => {
    console.log("body: ", req.body)
    try {
        const { username, accountId } = req.body;
        // Create a new user object with the provided data
        const user = new User({ username, accountId });

        // Save the user object to the database
        await user.save();

        console.log('User data stored successfully!' + username, accountId);
        res.status(200).send('User data stored successfully!');

    } catch (error) {
        console.error('Error storing user data:', error);
        res.status(501).send('Error storing user data:')
    }
}

// export default storeUserData;