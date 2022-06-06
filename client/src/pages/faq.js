import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Wrapper from '../assets/wrappers/Faqstyle'
import { useAppContext } from '../context/appContext'
import { FormRow } from '../components';

function FAQ() {
    const [count, setCount] = useState(1)
    const { authFetch, user } = useAppContext()
    const [newQuestion, setNewQuestion] = useState("")
    const [newAnswer, setNewAnswer] = useState("")
    const [faqs, setfaqs] = useState([]);

    
    useEffect(()=> {
        const fetchData = async() => {
            const response = await authFetch.get('/faq/getfaqs');
            setfaqs(response?.data?.faqs);
        
        };
        fetchData();
    }, [count]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((fq, i) => {
            if (i === index) {
                fq.open = !fq.open
            } else {
                fq.open = false;
            }
            return fq;
        }))
    }
    
    const handleChange = (e) => {
        setNewQuestion(e.target.value)
    }

    const handleChangeAns = (e) => {
        setNewAnswer(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await authFetch.post('/faq/question', {question :newQuestion, created_by: user.username})
        setNewQuestion("")
        setCount(count+1)
    }

    const onSubmitAns = async (e, id) => {
        e.preventDefault()
        await authFetch.post('/faq/answer', {id, answer :newAnswer, answered_by: user.username})
        setNewAnswer("")
        setCount(count+1)
    }

    return (
        <div>
            <Navbar/>
            <Wrapper>

            <div>
                <form className='form' onSubmit={onSubmit}>
                    <FormRow
                    type='faq-question'
                    name='faq-question'
                    value={newQuestion}
                    handleChange={handleChange}
                    />
                    <button type='submit' className='btn btn-block' >submit</button>
                </form>
            </div>


            <div className="faqs">
                {faqs.map((faq, i) => (
                //<FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    <div className='faq' key={faq.id}>
                    <div
                    className={"faq " + (faq.open ? 'open' : '')}
                    key={i}
                    onClick={() => toggleFAQ(i)}>

                        <div className="faq-question">
                            <span className='created-by'>{faq.created_by}>> </span>{faq.question}
                        </div>

                        <div className="faq-answer" onClick={(e) => e.stopPropagation()}>
                        {faq.answer && <span className='answered-by'>{faq.answered_by}>> </span>}
                        { faq.answer }
                        
                        {!faq.answer && (user.userType==='Employee' || user.userType==='Admin') &&
                            <form className='form' onSubmit={(e) => onSubmitAns(e, faq.id)}>
                            <FormRow
                            type='faq-answer'
                            name='faq-answer'
                            value={newAnswer}
                            handleChange={handleChangeAns}
                            />
                            <button type='submit' className='btn btn-block' >submit</button>
                        </form>
                        }
                        </div>

                    </div>
                </div>
                ))}
            </div>

            
		    </Wrapper>
        </div>
    );

}

export default FAQ;