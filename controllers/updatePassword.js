const UserSchema = require("../models/User");
exports.updatePassword = async (req, res) => {
    
    const { email, newPassword } = req.body;

    try {
        const user = await UserSchema.findOne({ email });
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        const Passwordhash = bcrypt.hashSync(newPassword, 10);
        user.Password = Passwordhash;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the password' });
    }
  };