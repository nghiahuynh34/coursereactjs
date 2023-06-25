import "bootstrap/dist/css/bootstrap.min.css";
import styles from './MangeCourses.module.scss'
import classNames from "classnames/bind";
import ConfigRoutes from '../../config/routes'
import { Link } from "react-router-dom";
import { logo } from "../../assets/image";
// import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "../../components/Layout/components/Button";
import { faAdd, faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function manageCourses() {
    const allCoures = JSON.parse(localStorage.getItem('AllCourses'))
    return <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>
        <div className={cx('header-wapper')}>
            <Link className={cx('header-logo')} to={ConfigRoutes.root}>
                <img alt='logo' src={logo} />
            </Link>
            <div className={cx('header-course-title')}>LE ADMIN</div>
            <div className={cx('header-actions')}>
                <button className={cx('action-bnt')}>

                    <img alt='logo' className={cx('header-icon')} src={logo} />
                    <span className={cx('header-label')}>Huynh nghia</span>
                </button>
            </div>
        </div>
        <div className="container">
            <div className={cx('course')}>
                <div>
                    <div className={cx('heading-wrapper', 'heading-margin')}>
                        <h2 className={cx('heading')}>
                            <Link rel='noreferrer' className={cx('wrapper')} to={ConfigRoutes.pathLearning} target="_self">
                                Khóa học lập trình
                            </Link>
                        </h2>

                        <button className={cx('bnt-add-topics')}>
                            <Link rel='noreferrer' className={cx('wrapper1')} to={ConfigRoutes.ManageTopics} target="_self">
                                <FontAwesomeIcon className={cx('icon-add')} icon={faAdd} />
                                Thêm Khóa học
                            </Link>
                        </button>
                    </div>
                </div>

                <div className={cx('body')}>
                    <section className={cx('module-row')}>
                        {allCoures.topics.map((val) => {

                            return (<section key={val._id} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                <div className={cx('item', 'course-item')}>
                                    <div className={cx('image-content')}>
                                        <Link className={cx('thumb', 'has-link')} to={'/admin/manage-courses/' + val.slug} target='_self' style={{ backgroundImage: `url(${val.image})` }}>
                                            <Button normal className={cx('btn', 'cta-btn')} to={'/admin/manage-courses/' + val.slug + ''}>Chỉnh sửa</Button>
                                        </Link>
                                    </div>
                                    <div className={cx('content-wrapper')}>
                                        <Link to={'/admin/manage-courses/' + val.slug} className={cx('context-content')}>
                                            <h3 className={cx('title')}>
                                                <Link target='_self' to={'/admin/manage-courses/' + val.slug}>{val.name}</Link>
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
                                            <Link className={cx('father-logo')} to={'/admin/manage-courses/' + val.slug}>
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
            <div className={cx('course')}>
                <div>
                    <div className={cx('heading-wrapper')}>
                        <h2 className={cx('heading')}>
                            <Link rel='noreferrer' className={cx('wrapper')} to={ConfigRoutes.pathLearning} target="_self">
                                Khóa học tiếng anh

                            </Link>
                        </h2>

                    </div>
                </div>
                <div className={cx('body')}>
                    <section className={cx('module-row')}>
                        {allCoures.english.map((eng) => {
                            return (<section key={eng._id} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                <div className={cx('item', 'course-item')}>
                                    <div className={cx('image-content')}>
                                        <Link className={cx('thumb', 'has-link')} to={'/admin/manage-courses/' + eng.slug} target='_self' style={{ backgroundImage: `url(${eng.image})` }}>
                                            <button className={cx('btn', 'cta-btn')} >Chỉnh sửa</button>
                                        </Link>
                                    </div>
                                    <div className={cx('content-wrapper')}>
                                        <Link to={'/admin/manage-courses/' + eng.slug} className={cx('context-content')}>
                                            <h3 className={cx('title')}>
                                                {eng.name}
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
                                            <Link className={cx('father-logo')} to={'/admin/manage-courses/' + eng.slug}>
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
}
export default manageCourses