
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
// import { useState } from 'react'
import Button from '../Button'
import { MyCourse, Bell, Avatar } from '../proper'
import Search from '../search'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { StoreContext } from '../../../../store';
import Configroutes from '../../../../config/routes'
// import axios from 'axios'


const cx = classNames.bind(styles)
function Header() {
    const location = useLocation()
    const { nickname } = JSON.parse(localStorage.getItem('currentUser'))
    // const [datas, setDatas] = useState({})
    // const [userState, setUserState] = useState()
    // useEffect(() => {
    //     axios.get("http://localhost:3000/users/persional-profile", {
    //         headers: {
    //             'access-token': localStorage.getItem('token')
    //         }
    //     })
    //         .then(res => {
    //             setDatas({ ...res.data.data })

    //             // if (res.data.err === 0) {
    //             //     setUserState(localStorage.removeItem('token'));
    //             //     const data = { Username: null, email: null, admin: null, avatar: null }
    //             //     localStorage.setItem('currentUser', JSON.stringify(data));
    //             // }
    //         })
    //         .catch(() => {
    //             // setUserState(localStorage.removeItem('token'))
    //             setUserState(localStorage.removeItem('token'));
    //             const data = { Username: null, email: null, admin: null, avatar: null }
    //             localStorage.setItem('currentUser', JSON.stringify(data));

    //         })
    // }, [])

    const context = useContext(StoreContext)
    const check = `/${nickname}`
    return (
        <div className={cx('wrapper', location.pathname === check ? ('nav-transparent') : (''))}>
            <div div className={cx('inner')} >
                <div className={cx('logo')}>
                    <div className={cx('bar-menu')}>
                        <FontAwesomeIcon onClick={context.handleBarMenu} icon={faBars} />
                    </div>
                    <Link to="/">
                        <img src={logo} alt="F8" />
                    </Link>
                    {!(location.pathname === check) ? <h3 className={cx('logoHeading')}>Học Lập Trình</h3> : ''}

                </div>
                {!(location.pathname === check) ? <Search /> : ''}
                <div className={cx('action')}>
                    {localStorage.getItem('token') ? (
                        <>

                            {!(location.pathname === check) ? <MyCourse /> : ''}
                            <Bell />
                            <Avatar />
                        </>
                    ) : (
                        <Button primary to={Configroutes.Login}>Đăng Nhập</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header