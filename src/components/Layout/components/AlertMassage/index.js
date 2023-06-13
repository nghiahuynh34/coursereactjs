import classNames from "classnames/bind"
import styles from './alertMassage.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { StoreContext } from '../../../../store';
const cx = classNames.bind(styles)


function AlertMassage({ message, content }) {
    const context = useContext(StoreContext)
    return (context.alertMassage && <div>
        <div className={cx('modal', 'fade-in', 'medium')}>
            {/* <div className={cx('content')}> */}
            <div className={cx('toast', 'toast--success')}>
                <div className={cx("toast__icon")}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className={cx("toast__body")}>
                    <h3 className={cx("toast__title")}>{content}</h3>
                    <p className={cx("toast__msg")}>{message}</p>
                </div>
                <div className={cx("toast__close")}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            {/* </div> */}
        </div>
        <div className={cx('overlay', 'fade-in')}></div>

    </div>)
}
export default AlertMassage