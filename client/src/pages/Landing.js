import { Link } from 'react-router-dom'

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
    return (
        <Wrapper>
            <div className='container page'>
                <div className='info'>
                    <Logo className='logo'/>
                    <h1>
                        tax <span>guider</span> app
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad repellendus quasi modi aliquid. Quae veritatis asperiores at dolorum, quidem quod dicta ipsam, quia consequatur provident, vero maxime voluptatem doloribus!</p>
                    <Link to='/register' className='btn btn-hero btn-wrapper'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img'/>
            </div>
        </Wrapper>
    )
}



export default Landing