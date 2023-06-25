import classNames from 'classnames/bind'
import styles from './Comment.module.scss'

import { useContext, useState } from 'react';
import { StoreContext } from '../../../../../store';
import DraftEditor from '../../Editor/BraftEditor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function Comment() {

    const context = useContext(StoreContext)
    const { Username, avatar } = JSON.parse(localStorage.getItem('currentUser'))
    const storegaeComments = JSON.parse(localStorage.getItem('comments'))
    // const [comment, setComment] = useState('')
    const [comments, setComments] = useState(storegaeComments ?? [])
    const handleSent = () => {
        setComments(prev => {
            var hour = new Date().getMinutes()
            var comment = context.comment
            const newComments = [{ comment, hour }, ...prev]
            const jsonComments = JSON.stringify(newComments)
            localStorage.setItem('comments', jsonComments)
            return newComments
        })
        context.setComment('')
    }

    return (context.comments && <div>
        <div className={cx('wrapper', context.addstyle ? ("") : ("closing"))}>
            <div className={cx('container')}>
                <div className={cx('closebnt')} onClick={context.handleAddStyle}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('body')}>
                    <div className={cx('detailRow')}>
                        <div className={cx('contentHeading')}>
                            <div>
                                <h4>35 Hỏi đáp</h4>
                                <p className={cx('help')}>(Nếu thấy bình luận spam, các bạn bấm report giúp admin)</p>
                            </div>
                        </div>
                        <div className={cx('commentWrapper')}>
                            <div className={cx('avatarWrapper')}>
                                <div className={cx('feedbackAvatar')}>
                                    <img src={avatar ? avatar : 'https://bootdey.com/img/Content/avatar/avatar7.png'} className={cx('myAvatar')} alt={Username} />
                                </div>
                            </div>
                            <div className={cx('commentContent')}>
                                {context.feedback ? (<><DraftEditor mesage="Bạn có thắc mắc gì trong bài học này?" />
                                    <div className={cx('actionwrapper')}>
                                        <button onClick={context.handleFeedBack} className={cx('cancel-bnt')}>Hủy</button>
                                        <button onClick={handleSent} className={cx('bnt-accept', 'bnt-active')}>Bình luận</button>
                                    </div>
                                </>) : (
                                    <div onClick={context.handleFeedBack} className={cx('placeholder')}>
                                        <span>Bạn có thắc mắc gì trong bài này?</span>
                                    </div>
                                )}

                            </div>
                        </div>
                        {
                            comments.map((com, val) => <div className={cx('detailComment')}>
                                <div className={cx('avatarcomment')}>
                                    <a href='/@cat-andrea'>
                                        <div className={cx('avatarwrapperComment')}>
                                            <div className={cx('feedbackAvatar')}>
                                                <img src={avatar ? avatar : 'https://bootdey.com/img/Content/avatar/avatar7.png'} className={cx('myAvatar')} alt={Username} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={cx('commentBody')}>
                                    <div className={cx('commentInner')}>
                                        <div className={cx('commentWrapperauthor')}>
                                            <div className={cx('commentContent')}>
                                                <div className={cx('commentContentHeading')}>
                                                    <a href='/@10962'>
                                                        <span className={cx('commentAuthor')}>{Username}</span>
                                                    </a>
                                                </div>
                                                <div className={cx('commentText')}>
                                                    <div className={cx('MarkdownParser-wrapper')}>
                                                        <p>{com.comment}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('commentTime')}>
                                        <div className={cx('creatAt')}>
                                            <div className={cx('createdAtLeft')}>
                                                <button className={cx('iconWrapper')}>
                                                    <span className={cx('likeComment')}>Thích</span>
                                                </button>
                                                .
                                                <span className={cx('repleComment')}>Trả lời</span>
                                            </div>
                                            <div className={cx('createdAtRight')}>
                                                <span className={cx('createAtDotRight')}>.</span>
                                                <span className={cx('time')}>{new Date().getMinutes() - com.hour + ' Phút trước'}</span>
                                                <span className={cx('moreBntWrapper')}>
                                                    <span className={cx('createAtDotRight')}>.</span>
                                                    <button className={cx('moreBnt')}><FontAwesomeIcon icon={faEllipsis} /></button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }
                        <div className={cx('detailComment')}>
                            <div className={cx('avatarcomment')}>
                                <a href='/@cat-andrea'>
                                    <div className={cx('avatarwrapperComment')}>
                                        <div className={cx('feedbackAvatar')}>
                                            <img src='https://www.gravatar.com/avatar/fa88b4d7b23fa21224fca92bbf4b16c8?s=140&d=retro' className={cx('myAvatar')} alt='cát trịnh' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx('commentBody')}>
                                <div className={cx('commentInner')}>
                                    <div className={cx('commentWrapperauthor')}>
                                        <div className={cx('commentContent')}>
                                            <div className={cx('commentContentHeading')}>
                                                <a href='/@10962'>
                                                    <span className={cx('commentAuthor')}>Cát trịnh</span>
                                                </a>
                                            </div>
                                            <div className={cx('commentText')}>
                                                <div className={cx('MarkdownParser-wrapper')}>
                                                    <p>Phân biệt host và server như thế nào a?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('commentTime')}>
                                    <div className={cx('creatAt')}>
                                        <div className={cx('createdAtLeft')}>
                                            <button className={cx('iconWrapper')}>
                                                <span className={cx('likeComment')}>Thích</span>
                                            </button>
                                            .
                                            <span className={cx('repleComment')}>Trả lời</span>
                                        </div>
                                        <div className={cx('createdAtRight')}>
                                            <span className={cx('createAtDotRight')}>.</span>
                                            <span className={cx('time')}>10 giờ trước</span>
                                            <span className={cx('moreBntWrapper')}>
                                                <span className={cx('createAtDotRight')}>.</span>
                                                <button className={cx('moreBnt')}><FontAwesomeIcon icon={faEllipsis} /></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={cx('detailComment')}>
                            <div className={cx('avatarcomment')}>
                                <a href='/@cat-andrea'>
                                    <div className={cx('avatarwrapperComment')}>
                                        <div className={cx('feedbackAvatar')}>
                                            <img src='https://files.fullstack.edu.vn/f8-prod/user_photos/299347/63fcc4580e828.jpg' className={cx('myAvatar')} alt='Minh Trần' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx('commentBody')}>
                                <div className={cx('commentInner')}>
                                    <div className={cx('commentWrapperauthor')}>
                                        <div className={cx('commentContent')}>
                                            <div className={cx('commentContentHeading')}>
                                                <a href='/@10962'>
                                                    <span className={cx('commentAuthor')}>Minh Trần</span>
                                                </a>
                                            </div>
                                            <div className={cx('commentText')}>
                                                <div className={cx('MarkdownParser-wrapper')}>
                                                    <p>Cho mình hỏi, mình ms bắt đầu học lập trình frontend và mình chưa biết gì về lập trình thì mình có nên học cơ bản như c++ trước hay bắt đầu học luôn khóa là được ạ mọi người?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('commentTime')}>
                                    <div className={cx('creatAt')}>
                                        <div className={cx('createdAtLeft')}>
                                            <button className={cx('iconWrapper')}>
                                                <span className={cx('likeComment')}>Thích</span>
                                            </button>
                                            .
                                            <span className={cx('repleComment')}>Trả lời</span>
                                        </div>
                                        <div className={cx('createdAtRight')}>
                                            <span className={cx('createAtDotRight')}>.</span>
                                            <span className={cx('time')}>10 giờ trước</span>
                                            <span className={cx('moreBntWrapper')}>
                                                <span className={cx('createAtDotRight')}>.</span>
                                                <button className={cx('moreBnt')}><FontAwesomeIcon icon={faEllipsis} /></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={cx('detailComment')}>
                            <div className={cx('avatarcomment')}>
                                <a href='/@cat-andrea'>
                                    <div className={cx('avatarwrapperComment')}>
                                        <div className={cx('feedbackAvatar')}>
                                            <img src='https://files.fullstack.edu.vn/f8-prod/user_photos/310988/642922c0253fe.jpg' className={cx('myAvatar')} alt='Đạt phạm' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx('commentBody')}>
                                <div className={cx('commentInner')}>
                                    <div className={cx('commentWrapperauthor')}>
                                        <div className={cx('commentContent')}>
                                            <div className={cx('commentContentHeading')}>
                                                <a href='/@10962'>
                                                    <span className={cx('commentAuthor')}>Đạt phạm</span>
                                                </a>
                                            </div>
                                            <div className={cx('commentText')}>
                                                <div className={cx('MarkdownParser-wrapper')}>
                                                    <p>trả đi với trả về gọi là gì vậy ạ?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('commentTime')}>
                                    <div className={cx('creatAt')}>
                                        <div className={cx('createdAtLeft')}>
                                            <button className={cx('iconWrapper')}>
                                                <span className={cx('likeComment')}>Thích</span>
                                            </button>
                                            .
                                            <span className={cx('repleComment')}>Trả lời</span>
                                        </div>
                                        <div className={cx('createdAtRight')}>
                                            <span className={cx('createAtDotRight')}>.</span>
                                            <span className={cx('time')}>12 giờ trước</span>
                                            <span className={cx('moreBntWrapper')}>
                                                <span className={cx('createAtDotRight')}>.</span>
                                                <button className={cx('moreBnt')}><FontAwesomeIcon icon={faEllipsis} /></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('the-rest')} onClick={context.handleAddStyle}></div>
        </div>
    </div>)
}

export default Comment