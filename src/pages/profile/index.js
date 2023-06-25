import styles from './profile.module.scss'
import classNames from "classnames/bind";
import { HelloWorld } from '../../assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { dataLinkImage } from '../Home/data';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { UploadImage } from '../../components/Layout/components/proper'
import { StoreContext } from '../../store';
const cx = classNames.bind(styles)
function Profile() {
    const { nickname } = useParams()
    const [user, setUser] = useState({})
    const context = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/users/getUse/" + nickname,
            {
                headers: {
                    'access-token': localStorage.getItem('token')
                }
            })
            .then((res) => {
                setUser(res.data.data)
            }
            ).catch(() => {
                navigate({
                    pathname: '/Login'
                })
            })
        // eslint-disable-next-line
    }, [nickname])

    return <div className={cx('profile-wrapper')}>
        <div className={cx('profile-content')}>
            <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1100px' }}>
                <div className={cx('profile-banner')} style={{ backgroundImage: `url(${HelloWorld})`, position: 'relative' }}>
                    <div className={cx('profile-user')}>
                        <div className={cx('profile-avatar-user')}>
                            <div className={cx('fallack-avatar')}>
                                <img className={cx('image')} src='https://bootdey.com/img/Content/avatar/avatar7.png' alt='avatar' />
                            </div>
                        </div>
                        <div className={cx('profile-user-name')}>
                            <span>{user.Username ? user.Username : ''}</span>
                        </div>
                    </div>
                    <UploadImage>
                        <div onClick={context.handleUpImage} className={cx('profile-bnt-change-cover')}>
                            <FontAwesomeIcon className={cx('icon-fix', 'icon')} icon={faCamera} />
                            <span className={cx('edit-image')}>Chỉnh sửa ảnh bìa</span>
                        </div>
                    </UploadImage>

                </div>
                <div className={cx('profile-container')}>
                    <section className={cx('module-row')}>
                        <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-5')}>
                            <div className={cx('content-left')}>
                                <div className={cx('box-wrapper')}>
                                    <h4 className={cx('box-title')}>Giới thiệu</h4>
                                    <div><div className={cx('participation')}>
                                        <div className={cx('participation-icon')}>
                                            <FontAwesomeIcon icon={faUserGroup} />
                                        </div>
                                        <span>Thành viên của <span className={cx('hightlight')}>Học lập trình-LE</span> năm nay</span>
                                    </div></div>
                                </div>
                                <div className={cx('box-wrapper')}>
                                    <h4 className={cx('box-title')}>Hoạt động gần đây</h4>
                                    <div><div className={cx('participation')}>
                                        <span className={cx('fix-size')}>Chưa có hoạt động nào gần đây</span>
                                    </div></div>
                                </div>
                            </div>
                        </section>
                        <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-7')}>
                            <div className={cx('box-wrapper')}>
                                <h4 className={cx('box-title')}>Các khóa học đã tham gia</h4>
                                <div>
                                    {dataLinkImage.map((course, index) => <div key={index} className={cx('profile-inner')}>
                                        <Link className={cx('profile-thumb')} to={course.link}><img className={cx('thumb-img')} src={course.img} alt='1' /></Link>
                                        <div className={cx('info')}>
                                            <h3 className={cx('info-title')}><Link to={course.link}>{course.title}</Link></h3>
                                            <p className={cx('info-desc')}>{course.discp}</p>
                                        </div>
                                    </div>)
                                    }

                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </div>
    </div>
}
export default Profile