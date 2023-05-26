import './style.css'
import logo from '../../assets/logo.png'
import Button from '../Button'
export default function Header() {
    return (
        <div className='header_container'>
            <div className='header'>
                <div className='left_section'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='center_section'>
                    <ul>
                        <li>How it works</li>
                        <li>pricing</li>
                        <li>Refer a Friend</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div className='right_section'>
                    <Button name={'Login'} color={'white'} />
                    <Button name={'Register'} color={'blue'} />
                </div>
            </div>
        </div>
    )
}
