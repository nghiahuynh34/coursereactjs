import { NavLink } from 'react-router-dom';
import styles from './Security.module.scss'
import classNames from "classnames/bind";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { G } from '../../assets/image'
import { dataRouteProfiles, navLinkStyle } from '../SettingPersonal/data';

const cx = classNames.bind(styles)
function Setting() {
    return (<div className={cx('setting-wrapper')}>
        <div className={cx('setting-side-left')}>
            <h1 className={cx('setting-heading')}>Cài Đặt</h1>
            <ul className={cx('setting-list')}>
                {dataRouteProfiles.map((val, index) =>
                    <li key={index}>
                        <NavLink style={navLinkStyle} to={val.route}  >
                            <FontAwesomeIcon icon={val.icon} className={cx('setting-icon')} />
                            <span>{val.discp}</span>
                        </NavLink>
                    </li>)}
                {/* <li>
                    <Link>
                        <FontAwesomeIcon icon={faBell} className={cx('setting-icon')} />
                        <span>Thông báo</span>
                    </Link>
                </li> */}
            </ul>
        </div>
        <div className={cx('setting-side-right')}>
            <section className='row'>
                <section className=' col col-sm-12 col-md-12 col-lg-12'>
                    <div className={cx('setting-content')}>
                        <div className={cx('groupfield-wrapper')}>
                            <h2 className={cx('field-heading')}>Liên kết tài khoản đăng nhập</h2>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>Liên kết Google</h3>
                                    <div className={cx('field-description')}>
                                        <div className={cx("description")}>
                                            <p>Chưa liên kết Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}><img className={cx('google')} src={G} alt='logo' />  Liên kết Google</button>
                                </div>
                            </div>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>Liên kết Facebook</h3>
                                    <div className={cx('photo-content')}>
                                        <div className={cx("description")}>
                                            <p>Chưa liên kết Facebook</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}><FontAwesomeIcon className={cx('facebook')} icon={faFacebook} />  Liên kết Facebook</button>
                                </div>
                            </div>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>Liên kết số điện thoại</h3>
                                    <div className={cx("description")}>
                                        <p>Chưa liên kết số điện thoại</p>
                                    </div>
                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}><FontAwesomeIcon className={cx('phone')} icon={faPhone} />  Liên kết số điện thoại</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('groupfield-wrapper')}>
                            <h2 className={cx('field-heading')}>Mạng xã hội</h2>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>Facebook</h3>
                                    <div className={cx('field-description')}>
                                        <input type='text' className={cx("field-input-content")} value='' placeholder='https://www.facebook.com/hoclaptrinhLE' maxLength='50' disabled />

                                    </div>
                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}>Chỉnh sửa</button>
                                </div>
                            </div>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>Youtube</h3>
                                    <div className={cx('field-description')}>
                                        <input type='text' className={cx("field-input-content")} placeholder='https://www.Youtube.com/hoclaptrinhLE' value='' maxLength='50' disabled />

                                    </div>
                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}>Chỉnh sửa</button>
                                </div>
                            </div>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>LinkedIn</h3>
                                    <div className={cx('field-description')}>
                                        <input type='text' className={cx("field-input-content")} placeholder='https://www.LinkIn.com/hoclaptrinhLE' value='' maxLength='50' disabled />

                                    </div>

                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}>Chỉnh sửa</button>
                                </div>
                            </div>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>Instagram</h3>
                                    <div className={cx('field-description')}>
                                        <input type='text' className={cx("field-input-content")} placeholder='https://www.Instagram.com/hoclaptrinhLE' value='' maxLength='50' disabled />

                                    </div>

                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}>Chỉnh sửa</button>
                                </div>
                            </div>
                            <div className={cx('field-wrapper')}>
                                <div className={cx('field-input')}>
                                    <h3 className={cx('field-label')}>Twitter</h3>
                                    <div className={cx('field-description')}>
                                        <input type='text' className={cx("field-input-content")} placeholder='https://www.Twitter.com/hoclaptrinhLE' value='' maxLength='50' disabled />

                                    </div>

                                </div>
                                <div className={cx('field-bnt')}>
                                    <button className={cx('field-button')}>Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>)
}
export default Setting