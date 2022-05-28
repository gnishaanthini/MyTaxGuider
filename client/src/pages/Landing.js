import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
    const { user } = useAppContext()
    return (
        <Wrapper>
            <div className='container page'>
                <div className='info'>
                    <Logo className='logo'/>
                    <h1>
                        tax <span>guider</span> app
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad repellendus quasi modi aliquid. Quae veritatis asperiores at dolorum, quidem quod dicta ipsam, quia consequatur provident, vero maxime voluptatem doloribus!</p>
                    {!user && <Link to='/register' className='btn btn-hero btn-wrapper'>Login/Register</Link>}
                    {user && <Link to='/home' className='btn btn-hero btn-wrapper'>Go to Dashboard</Link>}
                </div>
                <img src={main} alt='tax hunt' className='img main-img'/>
            </div>
        </Wrapper>
    )
}



export default Landing