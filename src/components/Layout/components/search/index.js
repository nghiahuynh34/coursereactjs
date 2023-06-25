import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import axios from 'axios'
import { Wrapper as ProperWrapper } from '../../components/proper'
import CourseItem from '../CourseItem'
import ArticleItem from '../ArticleItem'
import VideoItem from '../VideoItem'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { useDebounce } from '../../../../hooks'
import { Link } from 'react-router-dom'
import ConfigRoutes from '../../../../config/routes'


const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [serachResult, setSearchResult] = useState([])
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const debounce = useDebounce(searchValue, 500)

    const refInput = useRef()

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)

        axios.get(`http://localhost:3000/api/courses/search`, {
            params: {
                q: debounce,
            }
        })
            .then(res => {

                setTimeout(() => {
                    setLoading(false)
                    setSearchResult(res.data.data)
                }, 500)
            })
            .catch(() => {
                setLoading(false)
            })

    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        refInput.current.focus()

    }

    const handleClickOutSide = () => {
        setShow(false)
    }

    return (<Tippy
        interactive
        visible={show && searchValue.length > 0}
        render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <ProperWrapper>
                    {!loading && serachResult.length > 0 && <div className={cx('search-find')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>{`Kết quả cho '${searchValue}'`}</span>
                    </div>}
                    {!loading && serachResult.length <= 0 && <div className={cx('search-find')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>{`Không tìm thấy Kết quả cho '${searchValue}'`}</span>
                    </div>}


                    {loading && <div className={cx('search-find')}>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <span>{`Tìm '${searchValue}'`}</span>
                    </div>}


                    {serachResult.length > 0 && <><div className={cx('search-heading')}>
                        <h5>KHÓA HỌC</h5>
                        <Link to={ConfigRoutes.study}>Xem Thêm</Link>
                    </div>
                        {serachResult.map((data) => {
                            return <CourseItem key={data._id} data={data} />
                        })}

                        <div className={cx('search-heading')}>
                            <h5>BÀI VIẾT</h5>
                            <Link to={ConfigRoutes.study}>Xem Thêm</Link>
                        </div>
                        <ArticleItem />
                        <ArticleItem />

                        <div className={cx('search-heading')}>
                            <h5>VIDEO</h5>
                            <Link to={ConfigRoutes.study}>Xem Thêm</Link>
                        </div>
                        <VideoItem />
                        <VideoItem />
                    </>

                    }

                </ProperWrapper>
            </div>
        )}
        onClickOutside={handleClickOutSide}
    >

        <div className={cx('body-search')}>
            <div>

                <div className={cx('search')}>


                    <button type='reset' className={cx('search-bnt')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input
                        type='text'
                        ref={refInput}
                        value={searchValue}
                        placeholder='Tiềm kiếm khóa học, bài viết, video...'
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShow(true)}

                    />
                    {!!searchValue &&
                        <button
                            className={cx('clear')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    }

                </div>
            </div>
        </div>



    </Tippy>
    )
}


export default Search
