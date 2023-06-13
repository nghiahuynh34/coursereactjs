import { Link } from 'react-router-dom';
import styles from './Register.module.scss'
import classNames from "classnames/bind";
import axios from 'axios';
import Configroutes from '../../config/routes'
import { useState, useContext } from 'react';
import { LE } from '../../assets/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Layout/components/Button';
import { StoreContext } from '../../store';
import { isEmpty, isEmail, isStrongPassword } from 'validator'
import AlertMassage from "../../components/Layout/components/AlertMassage";
const cx = classNames.bind(styles)

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')
    const [validateMsg, setValidateMsg] = useState({})
    const [state, setState] = useState(true)

    const context = useContext(StoreContext)
    const handleState = () => {
        setState(false)

    }
    const msg = {}
    const ValidatAll = () => {
        if (isEmpty(name)) {
            msg.name = 'Vui lòng nhập tên'
        }
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập email'
        }
        if (isEmpty(pass)) {
            msg.pass = 'Vui lòng nhập mật khẩu'
        } else if (!isStrongPassword(pass)) {
            msg.pass = 'Tối thiểu 8 chữ:ABcd123@'
        }

        if (isEmpty(rePass)) {
            msg.rePass = 'Vui lòng nhập mật khẩu'
        }
        setValidateMsg({ ...msg, ...validateMsg })

        if (Object.keys(msg).length > 0) { return false }
        return true
    }
    const onChangeName = (e) => {
        setName(e.target.value)
        validateMsg.name = ''
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        validateMsg.email = ''
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onChangePass = (e) => {
        setPass(e.target.value)
        validateMsg.pass = ''
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onChangeRePass = (e) => {
        setRePass(e.target.value)
        validateMsg.rePass = ''
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onBlurName = () => {
        if (isEmpty(name)) {
            validateMsg.name = 'Vui lòng nhập tên'
        }
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onBlurEmail = () => {

        if (isEmpty(email)) {
            validateMsg.email = 'Vui lòng nhập email'
        } else if (!isEmail(email)) {
            validateMsg.email = 'Email không đúng cú pháp'
        }

        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onBlurPass = () => {
        if (isEmpty(pass)) {
            validateMsg.pass = 'Vui lòng nhập mật khẩu'
        } else if (!isStrongPassword(pass)) {
            validateMsg.pass = 'Tối thiểu 8 chữ:ABcd123@'
        }

        setValidateMsg({ ...msg, ...validateMsg })
    }
    const onBlurPrePass = () => {

        if (isEmpty(rePass)) {
            validateMsg.rePass = 'Vui lòng nhập mật khẩu'
        } else if (rePass !== pass) {
            validateMsg.rePass = 'Mật khẩu không khớp'
        }
        setValidateMsg({ ...msg, ...validateMsg })
    }
    const hanldSubmit = (e) => {
        const isValid = ValidatAll()
        if (!isValid) {
            e.preventDefault()

            return
        }
        else {
            e.preventDefault()
            const data = {
                name,
                email,
                pass
            }
            console.log(data)
            axios.post("http://localhost:3000/auths/resgister/auth-resgister", { data })
                .then(res => {
                    console.log(res.data)
                    if (res.data.success === 1) {
                        setTimeout(() => {
                            context.setAlertMassage(!context.alertMassage)
                            localStorage.setItem('token', res.data.acesstoken)
                            localStorage.setItem('currentUser', res.data.curentUser)
                            window.location.href = '/OverBoarding'
                        }, 3000)

                        context.setAlertMassage(!context.alertMassage)
                    } else if (res.data.success === 0) {
                        validateMsg.email = res.data.msg
                        setValidateMsg({ ...validateMsg, ...msg })
                    } else {
                        alert(res.data.msg)
                    }
                })
                .catch(() => console.log('loi'))

        }
    }
    return (<>
        <div className={cx('wrapper', 'hasBg')} >
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {!state &&
                        (<div className={cx('backbnt')} onClick={() => setState(true)}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>)
                    }
                    <div className={cx('header')}>
                        <Link to={Configroutes.root}>
                            <img className={cx('logo')} src={LE} alt='logo' />
                        </Link>
                        <h1 className={cx('title')}>Đăng ký tài khoản LE
                        </h1>
                    </div>
                    <div className={cx('body')}>
                        {state ? (<div className={cx('main-step')}>
                            <div className={cx('sigin-button')} onClick={handleState}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                <span className={cx('text')}>Sử dụng email</span>
                            </div>

                            <div className={cx('sigin-button')}>
                                <img alt='logo' className={cx('icon')} src='https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg' />
                                <span className={cx('text')}>Tiếp tục với Google</span>
                            </div>

                            <div className={cx('sigin-button')}>
                                <img alt='logo' className={cx('icon')} src='https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg' />
                                <span className={cx('text')}>Tiếp tục với FaceBook</span>
                            </div>

                            <div className={cx('sigin-button')}>
                                <img alt='logo' className={cx('icon')} src='https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg' />
                                <span className={cx('text')}>Tiếp tục với GitHub</span>
                            </div>
                        </div>) : (<form>
                            <div className={cx('formBody')} id='form' >

                                <div className={cx('form-content')} id='form-content'>
                                    <div className={cx('input-content')}>
                                        <div className={cx('labelGroup')}>
                                            <label className={cx('label')}>Họ và tên</label>
                                        </div>
                                        <div className={cx('inputGroup')}>

                                            <input
                                                placeholder='Nhập họ và tên'
                                                name='fullname'
                                                id='fullname'
                                                type='text'
                                                onBlur={onBlurName}
                                                onChange={onChangeName}

                                            />

                                        </div>
                                        <span className={cx('message')} id='form-error'>{validateMsg.name}</span>

                                    </div>

                                </div>
                                <div className={cx('form-contentR')}>
                                    <div className={cx('input-content')}>
                                        <div className={cx('labelGroup')}>
                                            <label className={cx('label')}>Email</label>

                                        </div>
                                        <div className={cx('inputGroup')}>
                                            <input
                                                placeholder='Nhập email'
                                                name='email'
                                                id='email'
                                                type='email'
                                                autoComplete='email'
                                                onBlur={onBlurEmail}
                                                onChange={onChangeEmail}
                                            // onInput={handleInput}
                                            />

                                        </div>
                                        <span className={cx('message')} id='form-error'>{validateMsg.email}</span>


                                    </div>

                                </div>
                                <div className={cx('form-content')}>
                                    <div className={cx('input-content')}>
                                        <div className={cx('labelGroup')}>
                                            <label className={cx('label')}>Mật khẩu</label>

                                        </div>
                                        <div className={cx('inputGroup')}>

                                            <input
                                                placeholder='Nhập mật khẩu'
                                                name='password'
                                                id='password'
                                                type='password'
                                                autoComplete='new-password'
                                                onBlur={onBlurPass}
                                                onChange={onChangePass}
                                            />

                                        </div>
                                        <span className={cx('message')} id='form-error'>{validateMsg.pass}</span>

                                    </div>

                                </div>
                                <div className={cx('form-contentR')}>
                                    <div className={cx('input-content')}>
                                        <div className={cx('labelGroup')}>
                                            <label className={cx('label')}> Xác nhận mật khẩu</label>

                                        </div>
                                        <div className={cx('inputGroup')}>

                                            <input
                                                placeholder='Nhập lại mật khẩu'
                                                name='new-password'
                                                id='new-password'
                                                type='password'
                                                autoComplete='new-password'
                                                onBlur={onBlurPrePass}
                                                onChange={onChangeRePass}
                                            />

                                        </div>
                                        <span className={cx('message')} id='form-error'>{validateMsg.rePass}</span>

                                    </div>

                                </div>
                                <Button primary onClick={hanldSubmit} className={cx('sumbnt')} id='bnt-submit'>
                                    <div className={cx('inner', 'module-inner')}><span className={cx('module-text')}>Đăng ký</span></div>
                                </Button>
                            </div>
                        </form>)}
                        <p className={cx('noAccount')}>
                            Bạn đã có tài khoản?
                            <Link to={Configroutes.Login}>Đăng nhập</Link>
                        </p>
                    </div>
                </div>
                <div className={cx('about')}>
                    <Link target='_blank' to={Configroutes.Introduce}>Giới thiệu về LE</Link>
                    <span>|</span>
                    <Link target='_blank' to={Configroutes.Contact}>Liên hệ</Link>
                </div>
            </div>
        </div>
        <AlertMassage message="Đăng ký tài khoản thành công tại LE" content="Thành công!" />
    </>)
}
export default Register