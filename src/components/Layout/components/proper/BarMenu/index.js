
import classNames from 'classnames/bind'
import styles from './BarMenu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBookOpenReader, faCircleExclamation, faFileSignature, faPen, faGear, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import ConfigRoutes from '../../../../../config/routes'
import { menuItems, navLinkStyle } from "../../../DefaultLayout/Sidebar/menuItems"
import { useContext } from 'react'
import { StoreContext } from '../../../../../store';
const cx = classNames.bind(styles)

function BarMenu() {
    const { Username, avatar } = JSON.parse(localStorage.getItem('currentUser'))
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }



    const context = useContext(StoreContext)
    return (
        context.barmenu && <div className={cx('model', context.barmenu ? ("") : ("closing"))}>
            <div className={cx('body')}>

                <div className={cx("overlay")} >
                    <FontAwesomeIcon onClick={context.handleBarMenu} className={cx('closebtn')} icon={faXmark} />
                    {Username ? (<div className={cx("user")}>
                        <div className={cx('avatar')}>
                            <div className={cx('avatar-child')}>
                                <img src={avatar ? ('https://www.gravatar.com/avatar/fa88b4d7b23fa21224fca92bbf4b16c8?s=140&d=retro') : ('https://bootdey.com/img/Content/avatar/avatar7.png')} alt={Username} />
                            </div>
                        </div>
                        <div className={cx('info')}>
                            <span className={cx('name')}>{Username}</span>
                        </div>
                    </div>) : (<div className={cx("user-new")}>
                        <Link className={cx('bnt-login')} to={ConfigRoutes.Login}>Đăng nhập</Link>
                    </div>)}

                    <div className={cx('list-item')}>
                        {Username &&
                            <ul className={cx('details', 'detail-list')}>
                                <li className={cx('item-child')}>
                                    <NavLink style={navLinkStyle} to={ConfigRoutes.profile} className={cx('sidebar-item')} >
                                        <em>
                                            <FontAwesomeIcon icon={faBookOpenReader} />
                                        </em>
                                        <span>Trang cá nhân</span>
                                    </NavLink>
                                </li>
                                <li className={cx('item-child')}>
                                    <NavLink style={navLinkStyle} to={ConfigRoutes.MyOnwCourse} className={cx('sidebar-item')} >
                                        <em>
                                            <FontAwesomeIcon icon={faBookOpenReader} />
                                        </em>
                                        <span>Khóa học của tôi</span>
                                    </NavLink>
                                </li>
                                <li className={cx('item-child')}>
                                    <button onClick={() => {
                                        context.setNewBlog(true)
                                        context.setBarmenu(false)
                                    }} className={cx('sidebar-item')} >
                                        <em>
                                            <FontAwesomeIcon icon={faPen} />
                                        </em>
                                        <span>Viết bài</span>
                                    </button>
                                </li>
                            </ul>}
                        <ul className={cx('details', 'detail-list')}>
                            {
                                menuItems.map((item, index) => (
                                    <li key={index} className={cx('item-child')}>
                                        <NavLink style={navLinkStyle} to={item.path} className={cx('sidebar-item')} >
                                            <em>
                                                {item.icon}
                                            </em>
                                            <span>{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className={cx('details', 'detail-list')}>
                            <li className={cx('item-child')}>
                                <NavLink style={navLinkStyle} to={ConfigRoutes.Introduce} className={cx('sidebar-item')} >
                                    <em>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </em>
                                    <span>Giới thiệu</span>
                                </NavLink>
                            </li>
                            <li className={cx('item-child')}>
                                <NavLink style={navLinkStyle} to={ConfigRoutes.Contact} className={cx('sidebar-item')} >
                                    <em>
                                        <FontAwesomeIcon icon={faFileSignature} />
                                    </em>
                                    <span>Liên hệ</span>
                                </NavLink>
                            </li>
                            {Username &&
                                <li className={cx('item-child')}>
                                    <NavLink style={navLinkStyle} to={ConfigRoutes.setting} className={cx('sidebar-item')} >
                                        <em>
                                            <FontAwesomeIcon icon={faGear} />
                                        </em>
                                        <span>Cài đặt tài khoản</span>
                                    </NavLink>
                                </li>}
                            {Username &&
                                <li className={cx('item-child')}>
                                    <NavLink style={navLinkStyle} to={ConfigRoutes.Security} className={cx('sidebar-item')} >
                                        <em>
                                            <FontAwesomeIcon icon={faShieldHalved} />
                                        </em>
                                        <span>Bảo mật và đăng nhập</span>
                                    </NavLink>
                                </li>
                            }
                            {/* <ul>
                                <li><NavLink to={ConfigRoutes.setting}><span>Cài đặt tài khoản</span></NavLink></li>

                            </ul> */}
                        </ul>
                        {Username &&
                            <ul className={cx('details', 'detail-list')}>

                                <li className={cx('item-child')}>
                                    <button className={cx('sidebar-item')} onClick={handleLogout}>
                                        <em>
                                            <FontAwesomeIcon icon={faBookOpenReader} />
                                        </em>
                                        <span>Đăng xuất</span>
                                    </button>
                                </li>
                            </ul>
                        }
                    </div>

                </div>
            </div>
        </div>


    )
}
export default BarMenu