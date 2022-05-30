import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Wrapper from '../assets/wrappers/Faqstyle'

function FAQ() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How many programmers does it take to screw in a lightbulb?',
            answer: 'None. We don\'t address hardware issues.',
            open: true
        },
        {
            question: 'Who is the most awesome person?',
            answer: 'You. The Viewer.',
            open: false
        },
        {
            question: 'How many questions does it take to make a successful FAQ Page?',
            answer: 'This many.',
            open: false
        }
    ]);

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

    return (
        <div>
            <Navbar/>
            <Wrapper>
            <div className="faqs">
                {faqs.map((faq, i) => (
                //<FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                <div className='faq'>
                <div
                className={"faq " + (faq.open ? 'open' : '')}
                key={i}
                onClick={() => toggleFAQ(i)}
            >
                <div className="faq-question">
                    {faq.question}
                </div>
                <div className="faq-answer">
                    {faq.answer}
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