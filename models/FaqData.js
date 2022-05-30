import db from '../db/connect.js'

class Faq {
    constructor(quection, answer) {
        this.quection=quection
        this.answer=this.answer
    }

    async create() {
        //const salt = await bcrypt.genSalt(10)
        //this.password = await bcrypt.hash(this.password, salt)
        return db.query(
            'INSERT INTO faq(quection, answer) VALUES (?, ?, ?)',
            [this.quection, this.answer]
        )
    }

    static findfaq(username, userType) {
        return db.query(
            'SELECT * FROM faq WHERE quection = ?  LIMIT 1',
            [quection]
        )
    }

    static getAllfaq(id) {
        return db.query(
            'SELECT * FROM faq'
        )
    }
}

export default FaqData