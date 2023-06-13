
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'
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
import axios from 'axios'


const cx = classNames.bind(styles)
function Header() {
    const location = useLocation()
    const [datas, setDatas] = useState({})
    const [userState, setUserState] = useState(localStorage.getItem('token'))
    useEffect(() => {
        axios.get("http://localhost:3000/users/persional-profile", {
            headers: {
                'access-token': localStorage.getItem('token')
            }
        })
            .then(res => {
                setDatas({ ...res.data.data })
                if (res.data.err === 0) {
                    setUserState(localStorage.removeItem('token'));
                    const data = { Username: null, email: null, admin: null, avatar: null }
                    localStorage.setItem('currentUser', JSON.stringify(data));
                }
            })
            .catch(() => {
                // setUserState(localStorage.removeItem('token'))
                alert("lôi server")

            })
    }, [])

    const context = useContext(StoreContext)

    return (
        <div className={cx('wrapper', location.pathname === Configroutes.profile ? ('nav-transparent') : (''))}>
            <div div className={cx('inner')} >
                <div className={cx('logo')}>
                    <div className={cx('bar-menu')}>
                        <FontAwesomeIcon onClick={context.handleBarMenu} icon={faBars} />
                    </div>
                    <Link to="/">
                        <img src={logo} alt="F8" />
                    </Link>
                    {!(location.pathname === Configroutes.profile) && <h3 className={cx('logoHeading')}>Học Lập Trình</h3>}

                </div>
                {!(location.pathname === Configroutes.profile) && <Search />}
                <div className={cx('action')}>
                    {userState ? (
                        <>

                            {!(location.pathname === Configroutes.profile) && <MyCourse />}
                            <Bell />
                            <Avatar data={datas} />
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