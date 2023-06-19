import styles from './sliderShow.module.scss'
import classNames from "classnames/bind";
import Slider from 'react-slick';
import "../../assets/slick/slick-theme.css";
import "../../assets/slick/slick.css";
import ConfigRoutes from '../../config/routes'
import { useState, useEffect } from 'react';
import { dataDigitalBestSeller, dataLinkImage, VideoLinkImage, EnglishLinkImage } from './data'
import { PreviousBtn, NextBtn } from './FixButton/fixButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight, faComment, faEye, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/image';
import Button from '../../components/Layout/components/Button';
import NewFeedButton from '../../components/Layout/components/NewFeed/NFButton';
import GoTop from '../../components/Layout/components/GoTop';
import ChatBox from '../../components/Layout/components/ChatBox'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)




function Home() {
    const [defaultImage, setDefaultImage] = useState({});
    const [datas, setDatas] = useState([]);
    const [dataEnglish, setDataEnglish] = useState([]);
    const user = JSON.parse(localStorage.getItem('currentUser'))
    // const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/api/Topics')
            .then(res => {
                setDatas([...res.data.data1])
                setDataEnglish([...res.data.data2])
            })
            .catch(() => {
                localStorage.removeItem('token');
                const data = { Username: null, email: null, admin: null, avatar: null }
                localStorage.setItem('currentUser', JSON.stringify(data));
            })
    }, [])
    const allDatas = { topics: [...datas], english: [...dataEnglish] }
    localStorage.setItem("AllCourses", JSON.stringify(allDatas))
    const settings = {
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        }));
    };
    return (
        <>
            <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>
                <div className={cx('slide-show')}>
                    <div className={cx('wraper-slide')}>

                        <Slider {...settings}>
                            {dataDigitalBestSeller.map((item) => (
                                <div className={cx('body-card')}>
                                    <div className={cx("card-top")}>
                                        <img
                                            src={
                                                defaultImage[item.title] === item.title
                                                    ? defaultImage.linkDefault
                                                    : item.linkImg
                                            }
                                            alt={item.title}
                                            onError={handleErrorImage}
                                        />

                                    </div>
                                </div>
                            ))}

                        </Slider>

                    </div>
                </div>
                <div className={cx('wrapper-content')}>
                    <div className={cx('course')}>
                        <div>
                            <div className={cx('heading-wrapper', 'heading-margin')}>
                                <h2 className={cx('heading')}>
                                    <Link rel='noreferrer' className={cx('wrapper')} to={ConfigRoutes.pathLearning} target="_self">
                                        Khóa học lập trình
                                        <span className={cx('view-all-icon')}><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </Link>
                                </h2>
                                <Link rel='noreferrer' className={cx('view-all')} to={ConfigRoutes.pathLearning} target="_self">Lộ trình
                                    <FontAwesomeIcon icon={faChevronRight} /></Link>
                            </div>
                        </div>

                        <div className={cx('body')}>
                            <section className={cx('module-row')}>
                                {/* {datas.map((val) => {
                                    return (<section key={val._id} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                        <div className={cx('item', 'course-item')}>
                                            <div className={cx('image-content')}>
                                                <Link className={cx('thumb', 'has-link')} to={'/Learning/' + val.slug} target='_self' style={{ backgroundImage: `url(${val.image})` }}>
                                                    <Button normal className={cx('btn', 'cta-btn')} to={'/Learning/' + val.slug + ''}>{!!user.Username ? ('Tiếp tục học') : ('Bất đầu học')}</Button>
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
                                                <Button normal className={cx('btn', 'cta-btn')} to={val.link}>{user.Username ? ('Tiếp tục học') : ('Bất đầu học')}</Button>
                                            </Link>
                                        </div>
                                        <div className={cx('content-wrapper')}>
                                            <Link to={val.link} className={cx('context-content')}>
                                                <h3 className={cx('title')}>
                                                    <Link target='_self' to={val.link}>{val.title}</Link>
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
                                <Link rel='noreferrer' className={cx('view-all')} to={ConfigRoutes.pathLearning} target="_self">Lộ trình
                                    <FontAwesomeIcon icon={faChevronRight} /></Link>
                            </div>
                        </div>
                        <div className={cx('body')}>
                            <section className={cx('module-row')}>
                                {/* {dataEnglish.map((eng) => {
                                    return (<section key={eng._id} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                        <div className={cx('item', 'course-item')}>
                                            <div className={cx('image-content')}>
                                                <Link className={cx('thumb', 'has-link')} to={'/Learning/' + eng.slug} target='_self' style={{ backgroundImage: `url(${eng.image})` }}>
                                                    <Button normal className={cx('btn', 'cta-btn')} to={'/Learning/' + eng.slug}>{!!user.Username ? ('Tiếp tục học') : ('Bất đầu học')}</Button>
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
                    <div className={cx('course')}>
                        <div>
                            <div className={cx('heading-wrapper')}>
                                <h2 className={cx('heading')}>
                                    <Link rel='noreferrer' className={cx('wrapper')} to={ConfigRoutes.pathLearning} target="_self">
                                        Video nổi bật
                                        <span className={cx('view-all-icon')}><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </Link>
                                </h2>
                                <Link rel='noreferrer' className={cx('view-all')} to={ConfigRoutes.pathLearning} target="_self">Xem khóa học
                                    <FontAwesomeIcon icon={faChevronRight} /></Link>
                            </div>
                        </div>
                        <div className={cx('body')}>
                            <section className={cx('module-row')}>
                                {VideoLinkImage.map((img, index) => {
                                    return (<section key={index} className={cx('module-col', 'module-c-12', 'module-m-4', 'module-l-3', 'res-module')}>
                                        <div className={cx('item', 'course-item')}>
                                            <div className={cx('image-content')}>
                                                <Link className={cx('thumb', 'has-link')} to={img.link} target='_self' style={{ backgroundImage: `url(${img.img})` }}>
                                                    <Button normal className={cx('btn', 'cta-btn')} to={img.link}>Xem video</Button>
                                                </Link>
                                            </div>
                                            <div className={cx('content-wrapper')}>
                                                <Link to={img.link} className={cx('context-content')}>
                                                    <h3 className={cx('title')}>
                                                        <Link target='_self' to={img.link}>{img.title}</Link>
                                                    </h3>
                                                    <div className={cx('stars')}>
                                                        <FontAwesomeIcon className={cx('fix-color')} icon={faEye} />

                                                        <span className={cx('text-mutes')}>
                                                            <span >{img.watch}</span>
                                                        </span>
                                                        <FontAwesomeIcon icon={faThumbsUp} className={cx('fix-margin', 'fix-color')} />
                                                        <span className={cx('text-mutes')}>
                                                            <span>{img.like}</span>
                                                        </span>
                                                        <FontAwesomeIcon icon={faComment} className={cx('fix-margin', 'fix-color')} />
                                                        <span className={cx('text-mutes')}>
                                                            <span>{img.comment}</span>
                                                        </span>
                                                    </div>
                                                    <div className={cx('slogan')}>
                                                        <span className={cx('text-slogan')}>From LE</span>
                                                    </div>
                                                </Link>
                                                <div className={cx('author-content')}>
                                                    <span>Tác giả/Dịch giả: </span>
                                                    <Link className={cx('father-logo', 'display-author')} to={img.link}>
                                                        <img className={cx('logo-content', 'margin-logo')} src={logo} alt='logo' />
                                                        <img className={cx('logo-content')} src={img.author} alt='logo' />
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
            <GoTop />
            <ChatBox />
            <NewFeedButton />

        </>
    )
}
export default Home