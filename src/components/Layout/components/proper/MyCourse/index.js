import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './MyCourse.module.scss'
import Button from '../../Button'
import { useState } from 'react'
import { dataLinkImage } from '../../../../../pages/Home/data'
import ConfigRoutes from '../../../../../config/routes'

const cx = classNames.bind(styles)

function MyCourse() {
    const [course, setCourse] = useState(false);
    const showCourse = () => setCourse(true);
    const hideCourse = () => setCourse(false);
    return (
        <Tippy
            interactive
            visible={course} onClickOutside={hideCourse}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('courses-o')} tabIndex="-1" {...attrs}>
                    <div className={cx('course-heading')}>
                        <h6>Khóa học của tôi</h6>
                        <Button to={ConfigRoutes.MyOnwCourse}>Xem tất cả</Button>
                    </div>
                    <div className={cx('content')}>
                        {dataLinkImage.map((course, index) => <div key={index} className={cx('body')}>
                            <Button className={cx('fix-button')} to='/course'>
                                <img className={cx('thumnail')} src={course.img} alt='' />
                            </Button>
                            <div className={cx('body-child')}>
                                <h3><Button className={cx('h3')} to='/reacjs'>{course.title}</Button></h3>
                                <p className={cx('hours')}>Học {course.hour} trước</p>
                                <Button className={cx('contiunue-Learn')} to='/course'>Tiếp tục học</Button>
                            </div>
                        </div>)}



                    </div>


                </div>
            )}>
            <button onClick={!course ? showCourse : hideCourse} className={cx('Own-course')}>
                Khóa học của tôi
            </button>
        </Tippy>
    )
}
export default MyCourse