import styles from './ManageUsers.module.scss'
import classNames from "classnames/bind";
import ConfigRoutes from '../../config/routes'
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../../assets/image'
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faBars, faTrash, faPenFancy, faXmark, faRefresh } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
// import ShowMessageWatch from '../../components/Layout/components/ShowMessageWatch';
const cx = classNames.bind(styles)

function ManageUsers() {
    const context = useContext(StoreContext)
    const [searchPar] = useSearchParams()
    const [users, setUsers] = useState([])
    const [active, setactive] = useState('')
    const [name, setName] = useState('')
    const [Country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [admin, setAdmin] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [nickname, setNickName] = useState('')
    const location = useLocation()
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:3000/users/AllUsers", {
            headers: {
                'access-token': localStorage.getItem('token')
            }
        })
            .then(res => {
                if (res.data.err === 1) {
                    alert(res.data.msg)

                } else {
                    setUsers([...res.data.users])
                    setactive("stepitem-active")
                    navigate({
                        pathname: '/admin/manage-users',
                    })
                }

            })
            .catch(() => {
                alert("lỗi server")

            })
        // eslint-disable-next-line
    }, [])



    const handleSubmitEdit = () => {
        const data = {
            Username: name,
            nickname: nickname,
            phoneNumber: phoneNumber,
            admin: admin,
            image: image,
            address: address,
            Country: Country,
            email: email
        }
        console.log(data)
        axios.put(`http://localhost:3000/users/Admin/${searchPar.get('id')}/update`, {
            headers: {
                'access-token': localStorage.getItem('token')
            }, data: data
        })
            .then(res => {
                if (res.data.success === 1) {
                    alert("Sửa thành công")
                }
                else if (res.data.err === 0) {
                    console.log('ok')
                }
            })
            .catch(() => {
                alert("lỗi server")
            })
    }

    const onHandleRefresh = () => {
        setName('')
        setAdmin('')
        setAddress('')
        setImage('')
        setCountry('')
        setEmail('')
        setNickName('')
        setPhoneNumber('')
        navigate({
            pathname: '/admin/manage-users',
        })
    }
    function handleOnlickId(id) {
        axios.get(`http://localhost:3000/users/${id}/edit`, {
            headers: {
                'access-token': localStorage.getItem('token')
            }
        })
            .then(res => {

                setName(res.data.data.Username)
                setAdmin(res.data.data.admin)
                setAddress(res.data.data.address)
                setImage(res.data.data.avatar)
                setCountry(res.data.data.Country)
                setEmail(res.data.data.email)
                setNickName(res.data.data.nickname)
                setPhoneNumber(res.data.data.phoneNumber)
            })
            .catch(() => {
                alert("lỗi server")
            })
    }
    const handleDeleteCourse = () => {

        axios.delete(`http://localhost:3000/users/${searchPar.get('id')}`, {
            headers: {
                'access-token': localStorage.getItem('token')
            },
        })
            .then(res => {
                if (res.data.success === 1) {
                    alert("Xóa khóa học thành công")
                } else {
                    alert("lỗi xóa khóa học thất bại")
                }
            })
            .catch(() => alert('lỗi server'))
    }

    return <> <section className={cx('module-grid', 'module-fullwidth')} style={{ maxWidth: '1920px' }}>

        <div className={cx('header-wapper')}>
            <Link className={cx('header-logo')} to={ConfigRoutes.root}>
                <img alt='logo' src={logo} />
            </Link>
            <div className={cx('header-course-title')}>LE ADMIN</div>
            <div className={cx('header-actions')}>
                <button className={cx('action-bnt')}>

                    <img alt='logo' className={cx('header-icon')} src={logo} />
                    <span className={cx('header-label')}>Huynh nghia</span>
                </button>

            </div>
        </div>
        {context.list && <> <div className={cx('track-wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <h1 className={cx('heading')}>Tài khoản Users</h1>
                    <button className={cx('track-close-btn')}>
                        <FontAwesomeIcon onClick={context.handleList} icon={faXmark} />
                    </button>
                </header>
                <div className={cx('body')}>
                    {users.map((user, index) => <div key={user._id} className={cx('trackitem-step-list', 'trackitem-open')}>
                        <div className={cx('stepitem-wrapper', searchPar.get('id') === user._id ? active : '')}>
                            <div onClick={() => {
                                handleOnlickId(user._id)
                                navigate({
                                    pathname: location.pathname,
                                    search: `?id=${user._id}`,
                                })
                            }
                            } className={cx('stepitem-info')}>
                                <h3 className={cx('stepitem-title')}>{index + 1}.{user.email}</h3>

                            </div>

                            {/* <div className={cx('stepitem-icon-box')}>
                                <FontAwesomeIcon className={cx('stepitem-state', 'stepitem-locked')} icon={faLock} />
                            </div> */}
                        </div>

                    </div>
                    )}
                </div>
            </div>


        </div>
            <div className={cx('track-overlay')}></div></>}

        <div className={cx('content-wrapper', context.list ? ('') : ('content-full'))}>
            <div className={cx('video-content', context.list ? ('') : ('video_fullWidth'))}>
                <div className={cx('content-top')}>
                    <form className={cx('form')}>
                        <div className={cx('child-form')}>
                            <div className={cx('form-1')}>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Tên</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={name}
                                            placeholder='Nhập tên...'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Nick name</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={nickname || ''}
                                            placeholder='Nhập nickname...'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            onChange={(e) => setNickName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Điện thoại</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={phoneNumber}
                                            placeholder='Nhập số điện thoại...'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Địa chỉ</label>
                                    <div className={cx('input-wrapper')}>
                                        {/* <select className={cx('inputs', 'inputss', 'fix-fontsize')} value={subject} onChange={(e) => setSubject(e.target.value)}>
                                            <option value="">-- Chọn loại khóa học --</option>
                                            <option value="English" >Tiếng anh</option>
                                            <option value="LT">Lập trình</option>
                                        </select> */}

                                        <input
                                            type='text'
                                            value={address}
                                            placeholder='Nhập địa chỉ...'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            // onBlur={onBlurEmail}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className={cx('form-2')}>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Quyền</label>
                                    <div className={cx('input-wrapper')}>
                                        <select className={cx('inputs', 'inputss', 'fix-fontsize')} value={admin} onChange={(e) => setAdmin(e.target.value)}>
                                            <option value="">-- Chọn quyền --</option>
                                            <option value="true" >Admin</option>
                                            <option value="false">User</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Ảnh</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={image}
                                            placeholder='Nhập link ảnh...'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            // onBlur={onBlurPhone}
                                            onChange={(e) => setImage(e.target.value)}
                                        // disabled={searchPar.get('id') ? false : true}

                                        />
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Email</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={email}
                                            placeholder='Nhập email...'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            // onBlur={onBlurPhone}
                                            onChange={(e) => setEmail(e.target.value)}
                                        // disabled={searchPar.get('id') ? false : true}

                                        />
                                    </div>
                                </div>
                                <div className={cx('text-input')}>
                                    <label className={cx('label')}>Quốc gia</label>
                                    <div className={cx('input-wrapper')}>
                                        <input
                                            type='text'
                                            value={Country}
                                            placeholder='Nhập quốc gia...'
                                            className={cx('inputs', 'inputss', 'fix-fontsize')}
                                            // onBlur={onBlurPhone}
                                            onChange={(e) => setCountry(e.target.value)}
                                        // disabled={searchPar.get('id') ? false : true}

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={cx('textarea-input')}>
                            <label className={cx('label')}>Nội dung</label>
                            <div className={cx('input-wrapper')}>
                                <textarea
                                    placeholder='Nhập nội dung...'
                                    value={description}
                                    className={cx('module-testarea', 'fix-fontsize')}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div> */}

                    </form>

                </div>

            </div>
            <div className={cx('video-wrapper')}>
                <div className={cx('learning-center')}>
                    <div className={cx('videoplayer-wrapper')}>
                        <div className={cx('videoplayer-player')} style={{ width: '100%', height: '100%', }}>
                            <div style={{ width: '100%', height: '100%', backgroundSize: ' cover', backgroundPosition: 'center center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url("${image}")` }}>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div className={cx('actionBar-wrapper')}>
            <button onClick={onHandleRefresh} className={cx('actionBar-bnt', 'actionBar-refres')}>
                <FontAwesomeIcon icon={faRefresh} />
                <span>Refresh</span>
            </button>
            <button onClick={handleDeleteCourse} className={cx('actionBar-bnt', 'actionBar-primary')}>
                <FontAwesomeIcon icon={faTrash} />
                <span>Xóa</span>
            </button>
            <button onClick={handleSubmitEdit} className={cx('actionBar-bnt', 'actionBar-edit')}>
                <span>Sửa</span>
                <FontAwesomeIcon icon={faPenFancy} />
            </button>
            <div className={cx('toggle-wrapper')}>
                <button className={cx('toggle-btn')}>
                    {context.list ? (<FontAwesomeIcon onClick={context.handleList} icon={faArrowRight} />) : (<FontAwesomeIcon onClick={context.handleList} icon={faBars} />)

                    }
                </button>
            </div>

        </div>

    </section>
    </>
}
export default ManageUsers
