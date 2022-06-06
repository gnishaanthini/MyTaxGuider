import db from '../db/connect.js'


class Faq {
    constructor(question, created_by) {
        this.question=question
        this.created_by=created_by
    }

    async create() {
        //const salt = await bcrypt.genSalt(10)
        //this.password = await bcrypt.hash(this.password, salt)
        return db.query(
            'INSERT INTO faq(question, created_by) VALUES (?, ?)',
            [this.question, this.created_by]
        )
    }

    static findfaq(id) {
        return db.query(
            'SELECT * FROM faq WHERE id = ?  LIMIT 1',
            [id]
        )
    }

    static getAllfaq() {
        return db.query(
            'SELECT * FROM faq'
        )
    }

    static answerQuection(id, answer, answered_by) {
        return db.query('UPDATE faq SET answer = ?, answered_by = ? WHERE id = ?',[answer, answered_by, id])
    }
}

export default Faq