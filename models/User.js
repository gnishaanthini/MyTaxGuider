import bcrypt from "bcryptjs"
import db from '../db/connect.js'

class User {
    constructor(username, password, userType) {
        this.username=username
        this.password=password
        this.userType=userType
    }

    async create() {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        return db.query(
            'INSERT INTO Users(username, password, userType) VALUES (?, ?, ?)',
            [this.username, this.password, this.userType]
        )
    }

    static findOne(username, userType) {
        return db.query(
            'SELECT * FROM Users WHERE username = ? AND userType= ? LIMIT 1',
            [username, userType]
        )
    }
}

export default User