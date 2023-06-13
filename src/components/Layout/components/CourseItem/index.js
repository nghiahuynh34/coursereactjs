
import classNames from 'classnames/bind'
import styles from './CourseItem.module.scss'
const cx = classNames.bind(styles)
function CourseItem({ data }) {
    return (
        <a className={cx('wrapper')} href='/courses'>
            <div className={cx('avatar')}>
                <img src={data.image} alt={data.name} />
            </div>
            <span>{data.name}</span>
        </a>
    )
}
export default CourseItem