import classNames from "classnames/bind"
import styles from '../ChatBox.module.scss'
import { useContext, useState } from "react"
import { StoreContext } from "../../../../../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons"
import { logo } from "../../../../../assets/image"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"



const cx = classNames.bind(styles)

function ChatBoxBody() {
    const storegaeComments = JSON.parse(localStorage.getItem('chatbox'))
    const context = useContext(StoreContext)
    const [shadow, setShadow] = useState('')
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState(storegaeComments ?? [])
    const handleSent = () => {
        setComments(prev => {
            const newComments = [...prev, comment]
            const jsonComments = JSON.stringify(newComments)
            localStorage.setItem('chatbox', jsonComments)
            return newComments
        })
        setComment('')
    }


    return (
        context.showChatBox && <div className={cx('modal', 'fade-in', 'medium')}>
            <div className={cx('wrapper-chatbox')}>
                <div className={cx("header")}>
                    <span className={cx('fix-text')}>Giải Đáp</span>
                    <FontAwesomeIcon className={cx('fix-icon')} onClick={() => context.setShowChatBox(false)} icon={faXmark} />
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-body')}>
                        <div className={cx('content-item')}>
                            <img className={cx('logo-admin')} src={logo} alt="admin" />
                            <p className={cx('message')}>LE xin chào bạn,
                                LE luôn sẵn sàng để giải đáp mọi thắc mắc của bạn bất cứ lúc nào.
                                Nếu có bất kì câu hỏi nào thì hãy tự tin hỏi LE nhé!!</p>

                        </div>
                        {comments.map((val, index) => {
                            return (
                                <div key={index} className={cx('content-item1')}>
                                    <p className={cx('message2')}>{val}</p>

                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className={cx('footer-chatbox')} style={{ boxShadow: shadow }}>
                    <div className={cx('input-group')}>
                        <textarea
                            value={comment}
                            placeholder="Nhập câu hỏi của bạn..."
                            className={cx('inputtext')}
                            onFocus={() => setShadow('rgba(0, 0, 0, .1) 0px -2px 8px')}
                            onBlur={() => setShadow('')}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <div className={cx('bnt-action')}>
                            <FontAwesomeIcon onClick={handleSent} icon={faPaperPlane} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBoxBody