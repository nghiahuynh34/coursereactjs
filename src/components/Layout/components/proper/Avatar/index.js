import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Avatar.module.scss'
import Button from '../../Button'
import { useContext } from 'react'
import { StoreContext } from '../../../../../store'
import ConfigRoutes from '../../../../../config/routes'

const cx = classNames.bind(styles)

function Avatar({ data }) {
    const context = useContext(StoreContext)
    const handleLogout = () => {
        localStorage.removeItem('token');
        const data1 = { Username: null, email: null, admin: null, avatar: null }
        localStorage.setItem('currentUser', JSON.stringify(data1));
        window.location.href = '/login';
    }

    return (
        <Tippy
            placement='bottom-end'
            interactive
            visible={context.avatar} onClickOutside={context.handleAvater}
            render={attrs => (
                <div className={cx('user')} tabIndex="-1" {...attrs}>
                    <div className={cx('wrapper')}>
                        <div className={cx('menu-user')}>
                            <div className={cx('avatar')}>
                                <div className={cx('avatar-child')}>
                                    {data.avatar ? (<img src='https://www.gravatar.com/avatar/fa88b4d7b23fa21224fca92bbf4b16c8?s=140&d=retro' alt={data.Username} />) : (

                                        <img src='https://bootdey.com/img/Content/avatar/avatar7.png' alt={data.Username} />
                                    )}
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <span className={cx('name')}>{data.Username}</span>
                                <div className={cx('username')}>@{data.Username?.replaceAll(" ", "")}</div>
                            </div>
                        </div>

                        <ul className={cx('details')}>
                            <li>
                                <Button className={cx('profile')} to={ConfigRoutes.profile}>Trang cá nhân</Button>
                            </li>

                        </ul>

                        {data.admin &&
                            <ul className={cx('details')}>
                                <li>
                                    <Button className={cx('profile')} to={ConfigRoutes.manageCourses}>Quản lý khóa học</Button>
                                </li>
                                <li>
                                    <Button className={cx('profile')} to={ConfigRoutes.manageUsers}>Quản lý user</Button>
                                </li>
                            </ul>}

                        <ul className={cx('details')}>
                            <li>
                                <Button className={cx('profile')} to={ConfigRoutes.setting}>Cài đặt</Button>
                            </li>
                        </ul>

                        <ul className={cx('details')}>

                            <li>
                                <button className={cx('profile', 'bnt-logout')} onClick={handleLogout}>Đăng xuất</button>
                            </li>
                        </ul>


                    </div>
                </div>
            )}>
            <div onClick={context.handleAvater} className={cx('avatar-user')}>
                <div className={cx('avatar-children')}>
                    {data.avatar ? (<img src='https://www.gravatar.com/avatar/fa88b4d7b23fa21224fca92bbf4b16c8?s=140&d=retro' alt={data.Username} />) : (

                        <img src='https://bootdey.com/img/Content/avatar/avatar7.png' alt={data.Username} />
                    )}
                </div>
            </div>

        </Tippy>
    )
}
export default Avatar