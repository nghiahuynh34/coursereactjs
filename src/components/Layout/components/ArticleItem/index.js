
import classNames from 'classnames/bind'
import styles from './ArticleItem.module.scss'
const cx = classNames.bind(styles)
function ArticleItem() {
    return (
        <a className={cx('wrapper')} href='/courses'>
            <div className={cx('avatar')}>
                <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg" alt='Tạo dự án ReactJS với Webpack và Babel' />
            </div>
            <span>Tạo dự án ReactJS với Webpack và Babel</span>
        </a>
    )
}
export default ArticleItem