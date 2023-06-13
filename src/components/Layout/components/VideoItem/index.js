
import classNames from 'classnames/bind'
import styles from './VideoItem.module.scss'
const cx = classNames.bind(styles)
function VideoItem() {
    return (
        <a className={cx('wrapper')} href='/courses'>
            <div className={cx('avatar')}>
                <img src="https://i.ytimg.com/vi/ysjJlvQ3FFc/maxresdefault.jpg" alt='NodeJS là gì? Tại sao phải sử dụng NodeJS?' />
            </div>
            <span>NodeJS là gì? Tại sao phải sử dụng NodeJS?</span>
        </a>
    )
}
export default VideoItem