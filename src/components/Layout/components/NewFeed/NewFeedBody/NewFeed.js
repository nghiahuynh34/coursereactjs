import classNames from "classnames/bind"
import styles from '../NewFeed.module.scss'
import { Link } from "react-router-dom"
import Configroutes from '../../../../../config/routes'

import { robot } from '../../../../../assets/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles)

function NewFeed() {
    return (<div className={cx('new-feeds-list')}>
        <div className={cx('new-feed-item')}>
            <h4 className={cx('new-feed-title')}>Chào mừng bạn đã đến với LE</h4>
            <p className={cx('new-feed-time')}>12 giờ trước</p>
            <div className={cx('new-feed-wrapper', 'new-feed-content')}>
                <p>Hãy bắt đầu trải nghiệm những khóa học cùng với LE nào!!!!</p>
                <p>
                    <Link to='https://fullstack.edu.vn/external-url?continue=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D10j9phjctxI'>
                        <img alt="thumbnail" src={robot} />
                    </Link>
                </p>
                <p>
                    <em>Have a nice day everyone!</em>
                </p>
            </div>
            <p className={cx('author')}>
                Đăng bởi
                <Link className={cx('name')} to={Configroutes.profile}>
                    Huỳnh Nghĩa
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                </Link>
            </p>
        </div>
    </div>)
}

export default NewFeed