import styles from './MyOwnCourse.module.scss'
import classNames from "classnames/bind";
// import ConfigRoutes from '../../config/routes'
import { Link } from 'react-router-dom';
import Button from '../../components/Layout/components/Button';
// // import { dataLinkImage } from '../Home/data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import NewFeedButton from '../../components/Layout/components/NewFeed/NFButton';
import ChatBox from '../../components/Layout/components/ChatBox';
import { logo } from '../../assets/image';
import { dataLinkImage } from '../Home/data';
const cx = classNames.bind(styles)

function MyOwnCourse() {
    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ style: 'max-width: 1920px;' }}>

        <div className={cx('wrapper-content')}>
            <div className={cx('content-top')}>
                <h1 className={cx('path')}>Khóa học của tôi</h1>
                <div className={cx('text')}>
                    <p className={cx('text-inner')}>Dưới đây là các khóa học mà bạn đã đăng ký.</p>
                </div>
            </div>
            <div className={cx('course')}>
                {/* <div>
                    <div className={cx('heading-wrapper')}>
                        <h2 className={cx('heading')}>
                            <Link rel='noreferrer' className={cx('wrapper')} to={ConfigRoutes.pathLearning} target="_self">
                                Khóa học lập trình
                                <span className={cx('view-all-icon')}><FontAwesomeIcon icon={faArrowRight} /></span>
                            </Link>
                        </h2>
                        <Link rel='noreferrer' className={cx('view-all')} to={ConfigRoutes.pathLearning} target="_self">Xem Thêm
                            <FontAwesomeIcon icon={faChevronRight} /></Link>
                    </div>
                </div> */}
                <div className={cx('body')}>
                    <section className={cx('module-row')}>
                        {dataLinkImage.map((val, index) => {

                            return (<section key={index} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                <div className={cx('item', 'course-item')}>
                                    <div className={cx('image-content')}>
                                        <Link className={cx('thumb', 'has-link')} to={'/Learning/' + val.slug} target='_self' style={{ backgroundImage: `url(${val.img})` }}>
                                            <Button normal className={cx('btn', 'cta-btn')} to={'/Learning/' + val.slug + ''}>Tiếp tục học</Button>
                                        </Link>
                                    </div>
                                    <div className={cx('content-wrapper')}>
                                        <Link to={'/Learning/' + val.slug} className={cx('context-content')}>
                                            <h3 className={cx('title')}>
                                                <Link target='_self' to={'/Learning/' + val.slug}>{val.title}</Link>
                                            </h3>
                                            <div className={cx('stars')}>
                                                {/* <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} /> */}
                                                <span className={cx('text-mutes', 'fix-font')}>
                                                    Học cách đây {val.hour}
                                                </span>
                                            </div>
                                            <div className={cx('slogan')}>
                                                <span className={cx('text-slogan')}>From LE</span>
                                            </div>
                                        </Link>
                                        <div className={cx('author-content')}>
                                            <span>Tác giả/Dịch giả: </span>
                                            <Link className={cx('father-logo')} to={'/Learning/' + val.slug}>
                                                <img className={cx('logo-content')} src={logo} alt='logo' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>)


                        })
                        }
                    </section>
                </div>
            </div>
        </div>
    </section>
        <NewFeedButton />
        <ChatBox />
    </>
}
export default MyOwnCourse