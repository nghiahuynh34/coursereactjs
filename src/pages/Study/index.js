import styles from './Study.module.scss'
import classNames from "classnames/bind";
import ConfigRoutes from '../../config/routes'
import { Link } from 'react-router-dom';
import Button from '../../components/Layout/components/Button';
import robot from '../../assets/image/robot.png'
import { dataLinkImage, EnglishLinkImage } from '../Home/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import NewFeedButton from '../../components/Layout/components/NewFeed/NFButton';
import ChatBox from '../../components/Layout/components/ChatBox';
import { logo } from '../../assets/image';
// import axios from 'axios';
const cx = classNames.bind(styles)

function Study() {
    const allCoures = JSON.parse(localStorage.getItem('AllCourses'))
    const user = JSON.parse(localStorage.getItem('currentUser'))

    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>

        <div className={cx('wrapper-content')}>
            <div className={cx('content-top')}>
                <h1 className={cx('path')}>Khóa học</h1>
                <div className={cx('text')}>
                    <p className={cx('text-inner')}>Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu.</p>
                </div>
            </div>
            <div className={cx('course')}>
                <div>
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
                </div>
                <div className={cx('body')}>
                    <section className={cx('module-row')}>
                        {/* {allCoures.topics.map((val) => {

                            return (<section key={val._id} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                <div className={cx('item', 'course-item')}>
                                    <div className={cx('image-content')}>
                                        <Link className={cx('thumb', 'has-link')} to={'/Learning/' + val.slug} target='_self' style={{ backgroundImage: `url(${val.image})` }}>
                                            <Button normal className={cx('btn', 'cta-btn')} to={'/Learning/' + val.slug + ''}>{user.Username ? ('Tiếp tục học') : ('Bất đầu học')}</Button>
                                        </Link>
                                    </div>
                                    <div className={cx('content-wrapper')}>
                                        <Link to={'/Learning/' + val.slug} className={cx('context-content')}>
                                            <h3 className={cx('title')}>
                                                <Link target='_self' to={'/Learning/' + val.slug}>{val.name}</Link>
                                            </h3>
                                            <div className={cx('stars')}>
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <span className={cx('text-mutes')}>
                                                    <span className={cx('fix-font')}>5.0</span>
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
                        } */}
                        {dataLinkImage.map((val, index) => <section key={val.index} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                            <div className={cx('item', 'course-item')}>
                                <div className={cx('image-content')}>
                                    <Link className={cx('thumb', 'has-link')} to={val.link} target='_self' style={{ backgroundImage: `url(${val.img})` }}>
                                        <button className={cx('btn', 'cta-btn')} >{!!user.Username ? ('Tiếp tục học') : ('Bất đầu học')}</button>
                                    </Link>
                                </div>
                                <div className={cx('content-wrapper')}>
                                    <Link to={val.link} className={cx('context-content')}>
                                        <h3 className={cx('title')}>
                                            {val.title}
                                        </h3>
                                        <div className={cx('stars')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                            <span className={cx('text-mutes')}>
                                                <span className={cx('fix-font')}>5.0</span>
                                            </span>
                                        </div>
                                        <div className={cx('slogan')}>
                                            <span className={cx('text-slogan')}>From LE</span>
                                        </div>
                                    </Link>
                                    <div className={cx('author-content')}>
                                        <span>Tác giả/Dịch giả: </span>
                                        <Link className={cx('father-logo')} to={val.link}>
                                            <img className={cx('logo-content')} src={logo} alt='logo' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>)}
                    </section>
                </div>
            </div>
            <div className={cx('course')}>
                <div>
                    <div className={cx('heading-wrapper')}>
                        <h2 className={cx('heading')}>
                            <Link rel='noreferrer' className={cx('wrapper')} to={ConfigRoutes.pathLearning} target="_self">
                                Khóa học tiếng anh
                                <span className={cx('view-all-icon')}><FontAwesomeIcon icon={faArrowRight} /></span>
                            </Link>
                        </h2>
                        <Link rel='noreferrer' className={cx('view-all')} to={ConfigRoutes.pathLearning} target="_self">Xem Thêm
                            <FontAwesomeIcon icon={faChevronRight} /></Link>
                    </div>
                </div>
                <div className={cx('body')}>
                    <section className={cx('module-row')}>
                        {/* {allCoures.english.map((eng) => {
                            return (<section key={eng._id} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                <div className={cx('item', 'course-item')}>
                                    <div className={cx('image-content')}>
                                        <Link className={cx('thumb', 'has-link')} to={'/Learning/' + eng.slug} target='_self' style={{ backgroundImage: `url(${eng.image})` }}>
                                            <Button normal className={cx('btn', 'cta-btn')} to={'/Learning/' + eng.slug}>{user.Username ? ('Tiếp tục học') : ('Bất đầu học')}</Button>
                                        </Link>
                                    </div>
                                    <div className={cx('content-wrapper')}>
                                        <Link to={'/Learning/' + eng.slug} className={cx('context-content')}>
                                            <h3 className={cx('title')}>
                                                <Link target='_self' to={'/Learning/' + eng.slug}>{eng.name}</Link>
                                            </h3>
                                            <div className={cx('stars')}>
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <span className={cx('text-mutes')}>
                                                    <span className={cx('fix-font')}>5.0</span>
                                                </span>
                                            </div>
                                            <div className={cx('slogan')}>
                                                <span className={cx('text-slogan')}>From LE</span>
                                            </div>
                                        </Link>
                                        <div className={cx('author-content')}>
                                            <span>Tác giả/Dịch giả: </span>
                                            <Link className={cx('father-logo')} to={'/Learning/' + eng.slug}>
                                                <img className={cx('logo-content')} src={logo} alt='logo' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>)

                        })
                        } */}
                        {EnglishLinkImage.map((eng, index) => {
                            return (<section key={index} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                <div className={cx('item', 'course-item')}>
                                    <div className={cx('image-content')}>
                                        <Link className={cx('thumb', 'has-link')} to={eng.link} target='_self' style={{ backgroundImage: `url(${eng.img})` }}>
                                            <button className={cx('btn', 'cta-btn')}>{user.Username ? ('Tiếp tục học') : ('Bất đầu học')}</button>
                                        </Link>
                                    </div>
                                    <div className={cx('content-wrapper')}>
                                        <Link to={eng.link} className={cx('context-content')}>
                                            <h3 className={cx('title')}>
                                                {eng.title}
                                            </h3>
                                            <div className={cx('stars')}>
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <FontAwesomeIcon icon={faStar} className={cx('fix-star')} />
                                                <span className={cx('text-mutes')}>
                                                    <span className={cx('fix-font')}>5.0</span>
                                                </span>
                                            </div>
                                            <div className={cx('slogan')}>
                                                <span className={cx('text-slogan')}>From LE</span>
                                            </div>
                                        </Link>
                                        <div className={cx('author-content')}>
                                            <span>Tác giả/Dịch giả: </span>
                                            <Link className={cx('father-logo')} to={eng.link}>
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
            <div className={cx('content-final')}>
                <div className={cx('info')}>
                    <h2>Xem lộ trình nào</h2>
                    <p>Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.</p>
                    <Button fomal to={ConfigRoutes.pathLearning}>Xem lộ trình</Button>
                </div>
                <div className={cx('image')}>
                    <img src={robot} alt='robot' />
                </div>
            </div>
        </div>
    </section>
        <NewFeedButton />
        <ChatBox />
    </>
}
export default Study