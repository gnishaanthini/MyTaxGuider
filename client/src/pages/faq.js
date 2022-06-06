import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Wrapper from '../assets/wrappers/Faqstyle'
import { useAppContext } from '../context/appContext'
import { FormRow } from '../components';

function FAQ() {
    const [count, setCount] = useState(1)
    const { authFetch, user } = useAppContext()
    const [newQuestion, setNewQuestion] = useState("")
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
    // const showReply = () => {

    // }
    const onSubmit = async (e) => {
        e.preventDefault()
        await authFetch.post('/faq/question', {question :newQuestion, created_by: user.username})
        setNewQuestion("")
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
                    <div className='faq'>
                    <div
                    className={"faq " + (faq.open ? 'open' : '')}
                    key={i}
                    onClick={() => toggleFAQ(i)}>
                        <div className="faq-question">
                            {faq.question}
                        </div>
                        <div className="faq-answer">
                            {faq.answer}
                            {/* <button class='add-answer'>Reply</button> */}
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