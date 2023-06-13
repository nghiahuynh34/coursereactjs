import styles from './Disscuss.module.scss'
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import NewFeedButton from '../../components/Layout/components/NewFeed/NFButton';
import ChatBox from '../../components/Layout/components/ChatBox';

const cx = classNames.bind(styles)

function Disscuss() {
    return (<>
        <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>
            <div className={cx('discuss-contain')}>
                <h2 className={cx('discuss-heading')}>Bài viết nổi bật</h2>
                <p className={cx('discuss-text')}>Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.</p>
            </div>

            <div className={cx('profile-container')}>
                <section className={cx('module-row')}>

                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-8')}>
                        <div className={cx('box-wrapper')}>
                            <div className={cx('box-title')}>
                                <img className={cx('discuss-image')} src='https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg' alt='avatar' />
                                <span className={cx('discuss-name')}>A king</span>
                            </div>
                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới</h3>
                                    <p className={cx('info-desc')}>Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng đủ để dùng và phát triển. Tuy nhiên, xu hướng mới là webapp nên tôi phải cung cấp tool, giao diện người dùng....
                                        ...</p>
                                    <div className={cx('discuss-info')}>
                                        <span className={cx('discuss-tags')}>ReactJS</span>
                                        <span>15 ngày trước</span>
                                        <span className={cx('discuss-dot')}>2 phút đọc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('box-wrapper')}>
                            <div className={cx('box-title')}>
                                <img className={cx('discuss-image')} src='https://files.fullstack.edu.vn/f8-prod/user_photos/315518/643b789615dd1.jpg' alt='avatar' />
                                <span className={cx('discuss-name')}>Vũ chi</span>
                            </div>
                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>Học viên Funix lạc đường tới F8</h3>
                                    <p className={cx('info-desc')}>Mình đã tham gia khóa học lập trình 6 tháng ở funix và cũng có nhiều lý do khác dẫn đến quá hạn quá học và cũng đã hoàn thành 4...</p>
                                    <div className={cx('discuss-info')}>
                                        <span className={cx('discuss-tags')}>ReactJS</span>
                                        <span>Một tháng trước</span>
                                        <span className={cx('discuss-dot')}>1 phút đọc</span>
                                    </div>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/leason-for-user'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg' alt='1' /></Link>
                            </div>
                        </div>
                        <div className={cx('box-wrapper')}>
                            <div className={cx('box-title')}>
                                <img className={cx('discuss-image')} src='https://files.fullstack.edu.vn/f8-prod/user_photos/184722/62383632b8e58.jpg' alt='avatar' />
                                <span className={cx('discuss-name')}>GzW</span>
                            </div>
                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>Learn JavaScript while Playing Games — Gamify Your Learning</h3>
                                    <p className={cx('info-desc')}>rong bài viết này, tôi muốn giới thiệu các trang web khác nhau mà bạn có thể sử dụng để học JavaScript khi chơi trò chơi. Phương...</p>
                                    <div className={cx('discuss-info')}>

                                        <span>2 tháng trước</span>
                                        <span className={cx('discuss-dot')}>8 phút đọc</span>
                                    </div>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/leason-for-user'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/blog_posts/6936/6422afa5a62f8.jpg' alt='1' /></Link>
                            </div>
                        </div>
                        <div className={cx('box-wrapper')}>
                            <div className={cx('box-title')}>
                                <img className={cx('discuss-image')} src='https://files.fullstack.edu.vn/f8-prod/user_photos/184722/62383632b8e58.jpg' alt='avatar' />
                                <span className={cx('discuss-name')}>GzW</span>
                            </div>
                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>Learn JavaScript while Playing Games — Gamify Your Learning</h3>
                                    <p className={cx('info-desc')}>rong bài viết này, tôi muốn giới thiệu các trang web khác nhau mà bạn có thể sử dụng để học JavaScript khi chơi trò chơi. Phương...</p>
                                    <div className={cx('discuss-info')}>

                                        <span>2 tháng trước</span>
                                        <span className={cx('discuss-dot')}>8 phút đọc</span>
                                    </div>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/leason-for-user'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/blog_posts/6936/6422afa5a62f8.jpg' alt='1' /></Link>
                            </div>
                        </div>
                        <div className={cx('box-wrapper')}>
                            <div className={cx('box-title')}>
                                <img className={cx('discuss-image')} src='https://files.fullstack.edu.vn/f8-prod/user_photos/184722/62383632b8e58.jpg' alt='avatar' />
                                <span className={cx('discuss-name')}>GzW</span>
                            </div>
                            <div className={cx('profile-inner')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>Learn JavaScript while Playing Games — Gamify Your Learning</h3>
                                    <p className={cx('info-desc')}>rong bài viết này, tôi muốn giới thiệu các trang web khác nhau mà bạn có thể sử dụng để học JavaScript khi chơi trò chơi. Phương...</p>
                                    <div className={cx('discuss-info')}>

                                        <span>2 tháng trước</span>
                                        <span className={cx('discuss-dot')}>8 phút đọc</span>
                                    </div>
                                </div>
                                <Link className={cx('profile-thumb')} to='/Learning/leason-for-user'><img className={cx('thumb-img')} src='https://files.fullstack.edu.vn/f8-prod/blog_posts/6936/6422afa5a62f8.jpg' alt='1' /></Link>
                            </div>
                        </div>
                    </section>
                    <section className={cx('col', 'col-c-12', 'col-m-12', 'col-l-4')}>
                        <div className={cx('content-left')}>

                            <div className={cx('box-wrapper')}>
                                <h4 className={cx('box-title')}>Hoạt động gần đây</h4>
                                <div><div className={cx('participation')}>
                                    <span>Chưa có hoạt động nào gần đây</span>
                                </div></div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
        <NewFeedButton />
        <ChatBox />
    </>
    )

}
export default Disscuss