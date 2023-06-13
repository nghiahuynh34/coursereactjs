import styles from './Learning.module.scss'
import classNames from "classnames/bind";
import ConfigRoutes from '../../config/routes'
import { Link, useParams, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../../assets/image'
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faBars, faChevronLeft, faChevronRight, faCircleInfo, faComment, faHeart, faNoteSticky, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import ShowMessageWatch from '../../components/Layout/components/ShowMessageWatch';
const cx = classNames.bind(styles)

function Learning() {
    const context = useContext(StoreContext)
    const [searchPar] = useSearchParams()
    const [course, setCourse] = useState([])
    const [topics, setTopics] = useState({})
    const [courseDetail, setCourseDetail] = useState({})
    const [active, setactive] = useState('')
    const [playvideo, setPlayVideo] = useState(false)
    // const [getID, setGetID] = useState(searchPar.get('id'))
    // const [image, setImage] = useState('')
    // const [pathroute, setPathRoute] = useState({
    //     pathname: location.pathname,
    //     search: '?id=2384',
    // })
    const location = useLocation()
    // eslint-disable-next-line
    const navigate = useNavigate();
    // eslint-disable-next-line
    const { slug } = useParams()

    const handlePlayVideo = () => {
        setPlayVideo(true)
    }


    useEffect(() => {
        axios.get("http://localhost:3000/course/" + slug, {
            headers: {
                'access-token': localStorage.getItem('token')
            }
        })
            .then(res => {
                if (res.data.err === 0) {
                    // navigate({
                    //     pathname: '/Login',
                    // })
                    context.setMessageWatch(true)

                } else {
                    context.setMessageWatch(false)
                    setCourse([...res.data.data])
                    setTopics({ ...res.data.topics })
                    navigate({
                        pathname: location.pathname,
                        search: `?id=${res.data.data[0]._id}`,
                    })
                    setactive("stepitem-active")
                }

            })
            .catch(() => {
                context.setMessageWatch(true)

            })

        // eslint-disable-next-line
    }, [slug])

    useEffect(() => {
        axios.get("http://localhost:3000/api/course/" + searchPar.get('id'))
            .then(res => {
                setCourseDetail({ ...res.data.course })
            })
            .catch(() => {
                alert("lỗi server")
            })
        // eslint-disable-next-line
    }, [searchPar.get('id')])


    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>

        <div className={cx('header-wapper')}>
            <div onClick={() => navigate({
                pathname: '/'
            })} title='Rời khỏi đây' className={cx('back-bnt')}>
                <FontAwesomeIcon className={cx('header-icon')} icon={faChevronLeft} />
            </div>
            <Link className={cx('header-logo')} to={ConfigRoutes.root}>
                <img alt='logo' src={logo} />
            </Link>
            <div className={cx('header-course-title')}>{topics.name}</div>
            <div className={cx('header-actions')}>
                <button className={cx('action-bnt')}>
                    <FontAwesomeIcon className={cx('header-icon')} icon={faNoteSticky} />
                    <span className={cx('header-label')}>Ghi chú</span>
                </button>
                <button className={cx('action-bnt')}>
                    <FontAwesomeIcon className={cx('header-icon')} icon={faCircleInfo} />
                    <span className={cx('header-label')}>Hướng dẫn</span>
                </button>
            </div>
        </div>
        {context.list && <> <div className={cx('track-wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <h1 className={cx('heading')}>Nội dung khóa học</h1>
                    <button className={cx('track-close-btn')}>
                        <FontAwesomeIcon onClick={context.handleList} icon={faXmark} />
                    </button>
                </header>
                <div className={cx('body')}>
                    {course.map((crs, index) => <div key={crs._id} className={cx('trackitem-step-list', 'trackitem-open')}>
                        <div className={cx('stepitem-wrapper', searchPar.get('id') === crs._id ? active : '')}>
                            <div onClick={() => {
                                navigate({
                                    pathname: location.pathname,
                                    search: `?id=${crs._id}`,

                                })

                            }} className={cx('stepitem-info')}>
                                <h3 className={cx('stepitem-title')}>{index + 1}.{crs.name}</h3>

                            </div>

                            {/* <div className={cx('stepitem-icon-box')}>
                                <FontAwesomeIcon className={cx('stepitem-state', 'stepitem-locked')} icon={faLock} />
                            </div> */}
                        </div>

                    </div>
                    )}
                </div>
            </div>


        </div>
            <div className={cx('track-overlay')}></div></>}

        <div className={cx('content-wrapper', context.list ? ('') : ('content-full'))}>
            <div className={cx('video-wrapper')}>
                <div className={cx('learning-center')}>
                    <div className={cx('videoplayer-wrapper')}>
                        <div className={cx('videoplayer-player')} style={{ width: '100%', height: '100%', }}>
                            {!playvideo ? (<div style={{ width: '100%', height: '100%', backgroundSize: ' cover', backgroundPosition: 'center center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url("${courseDetail.image}")` }}>
                                <div className={cx('react-player-shadow')} style={{ background: 'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)', borderRadius: '64px', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div onClick={handlePlayVideo} style={{ borderStyle: 'solid', borderWidth: ' 16px 0px 16px 26px ', borderColor: 'transparent transparent transparent white', marginLeft: '7px' }}></div>
                                </div>

                            </div>) : (<div style={{ width: '100%', height: '100%' }}>
                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${courseDetail.videoID}`} title={courseDetail.name} allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" id='widget'></iframe>
                            </div>)}

                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('video-content', context.list ? ('') : ('video_fullWidth'))}>
                <div className={cx('content-top')}>
                    <header>
                        <h1 className={cx('heading-heading')}>{courseDetail.name}</h1>
                        <p className={cx('heading-update')}>
                            Cập nhật tháng 5 năm 2023
                        </p>
                    </header>
                    <button className={cx('video-addnote')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <span className={cx('video-label')}>Thêm ghi chú
                            <span className={cx('video-number')}>00:00</span></span>
                    </button>
                </div>
                <div className={cx('markdown-wrapper')}>
                    <p>
                        Hãy đăng ký và tham gia các khóa học trên LE để học và trải nghiệm những bài học mới và đầy thú vị các bạn nhé
                    </p>
                    <ul>
                        <li>
                            Đăng ký các khóa học:
                            <Link to={ConfigRoutes.study} target='_blank'>Khóa học</Link>
                        </li>
                        <li>
                            Đăng ký Lộ trình:
                            <Link to={ConfigRoutes.pathLearning} target='_blank'>Lộ trình</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className={cx('power-wrapper')}>
                Love You
                <FontAwesomeIcon className={cx('power-heart')} icon={faHeart} />
                <span className={cx('power-dot')}>.</span>
                Make By LE
            </p>
        </div>
        <div className={cx('actionBar-wrapper')}>
            <button className={cx('actionBar-bnt', 'actionBar-disable')}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Bài trước</span>
            </button>
            <button className={cx('actionBar-bnt', 'actionBar-disable', 'actionBar-primary')}>
                <span>Bài tiếp theo</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className={cx('toggle-wrapper')}>
                <button className={cx('toggle-btn')}>
                    {context.list ? (<FontAwesomeIcon onClick={context.handleList} icon={faArrowRight} />) : (<FontAwesomeIcon onClick={context.handleList} icon={faBars} />)

                    }
                </button>
            </div>

        </div>
        <div className={cx('main-comment', context.list ? ('main-show') : (''))}>
            <button onClick={context.handleComment} className={cx('button-wrapper')}>
                <FontAwesomeIcon icon={faComment} />
                <span className={cx('button-title')}>Hỏi đáp</span>
            </button>
        </div>
    </section>
        <ShowMessageWatch />
    </>
}
export default Learning