import auth from "../model/auth";
import bcrypt from 'bcrypt';



export const userSignup = async (req, res) => {
    console.log("enter");
    try {
        const { first_name, last_name, email, password } = req.body;

        console.log(req.body, "req.body");

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if a user with the same email already exists
        const existingAdmin = await auth.findOne({ email });

        if (existingAdmin) {
            throw new Error('Admin with this email already exists');
        }

        const userData = new auth({ first_name, last_name, email, password: hashedPassword });
        const result = await userData.save(); // Corrected line

        res.send({
            status: 200,
            success: true,
            msg: 'user registered successfully',
            result: result._doc
        });
    } catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
};


//login


export const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body, "req.body");
        const userData = await auth.findOne({ email });


        console.log(userData, "gfkjl;")

        if (!userData) {
            console.log("entrr")
            throw new Error('User not found');
        }

        res.send({
            status: 200,
            success: true,
            msg: 'user login successfully',
        });
    }
    catch (error) {
        res.send({ status: 400, success: false, msg: error.message });

    }
}

//userlist

export const getUserList = async (req, res) => {
    try {

        const userList = await auth.find({}, { password: 0 }); // Exclude the password field

        res.status(200).json({
            success: true,
            message: 'User list retrieved successfully',
            users: userList,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch user list',
            error: error.message,
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await auth.findById(id);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send({
            status: true,
            statusCode: 200,
            message: 'User retrieved successfully',
            user,
        });
    } catch (error) {
        res.status(500).send('An error occurred while fetching the user');
    }
};





//getById


//update


export const updateData = async (req, res) => {
    try {
        // Assuming id is part of the request parameters
        const { id, first_name, last_name } = req.body;

        // Create an object with the fields to be updated
        const updateFields = {
            first_name,
            last_name,
        };

        // Use findByIdAndUpdate to update the document
        const updatedData = await auth.findByIdAndUpdate(
            id,
            updateFields,
            { new: true } // Return the updated document
        );

        if (!updatedData) {
            throw new Error('Data not found');
        }

        res.send({
            status: 200,
            success: true,
            msg: 'Data updated successfully',
            result: updatedData
        });
    } catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
};

export const bulkDelete = async (req, res) => {
    const { ids } = req.body;
    console.log(ids)
    const result = await auth.deleteMany({ _id: { $in: ids } })
    res.send({
        message: "deleted",
        result: result
    })
}

// export const deleteUsers = async (req, res) => {
//     try {
//         const { id } = req.body;
//         console.log(req.body, "req");

//         // Use deleteMany to delete multiple users based on their IDs
//         // const result = await auth.deleteMany({ _id: { $in: id } });
//         const result = await auth.deleteMany({ _id: id });
//         console.log(result, "kjhgfdsa")
//         const updatedUsers = await auth.find(); // Fetch the updated list
//         res.send({ status: 200, success: true, msz: 'Users deleted successfully', data: updatedUsers });
//     } catch (error) {
//         console.error(error);
//         res.send({ status: 400, success: false, msg: error.message });
//     }
// };