import Header from "../components/Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from './Default.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}
export default DefaultLayout