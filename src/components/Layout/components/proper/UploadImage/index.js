import classNames from 'classnames/bind'
import styles from './UploadImage.module.scss'
import Tippy from '@tippyjs/react/headless'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StoreContext } from '../../../../../store'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function UploadImages({ children }) {
    // const [bell, setBell] = useState(false);
    const context = useContext(StoreContext)
    // const hideBell = () => setBell(false);
    return (
        <Tippy
            interactive
            visible={context.upImage} onClickOutside={context.handleUpImage}
            placement='bottom-end'
            render={attrs => (
                <>
                    <label for="OptionImage" className={cx('upload')} tabIndex="-1" {...attrs}>
                        <div className={cx('upload-heading')}>
                            <FontAwesomeIcon icon={faUpload} />
                        </div>
                        <div className={cx('upload-content')}>
                            <p>Tải ảnh lên</p>
                        </div>

                    </label>
                    <input id='OptionImage' type='file' accept='image/jpg, image/jpeg, image/png' style={{ display: "none" }} />
                </>
            )}>
            {children}
        </Tippy>
    )
}
export default UploadImages