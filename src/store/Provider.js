
import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
    const [show, setShow] = useState(false)
    const [comments, setComments] = useState(false)
    const [feedback, setFeedBack] = useState(false)
    const [stract, setStract] = useState(true)
    const [barmenu, setBarmenu] = useState(false)
    const [addstyle, setAddStyle] = useState(false)
    const [loading, setLoading] = useState(false)
    const [alertMassage, setAlertMassage] = useState(false)
    const [avatar, setAvatar] = useState(false);
    const [list, setList] = useState(true);
    const [showChatBox, setShowChatBox] = useState(false)
    const [newBlog, setNewBlog] = useState(false)
    const [messageWatch, setMessageWatch] = useState(false)
    const [getBlog, setGetBlog] = useState('')




    const handleShow = () => {
        setShow(!show)
    }
    const handleComment = () => {

        setComments(true)
        setAddStyle(!addstyle)
    }
    const handleFeedBack = () => {
        setFeedBack(!feedback)
    }
    const handleStract = () => {
        setStract(!stract)
    }
    const handleBarMenu = () => {
        setBarmenu(!barmenu)
    }
    const handleAddStyle = () => {
        setAddStyle(!addstyle)
        setComments(true)
    }
    const handleAvater = () => {
        setAvatar(!avatar)
    }
    const handleList = () => {
        setList(!list)
    }
    const handleNewlog = () => {
        setNewBlog(!newBlog)
    }


    const value = {
        show,
        comments,
        feedback,
        stract,
        barmenu,
        addstyle,
        loading,
        avatar,
        alertMassage,
        list,
        showChatBox,
        newBlog,
        messageWatch,
        getBlog,
        setNewBlog,
        setShowChatBox,
        setShow,
        setLoading,
        setAlertMassage,
        handleShow,
        handleComment,
        handleFeedBack,
        handleStract,
        handleBarMenu,
        handleAddStyle,
        handleAvater,
        handleList,
        handleNewlog,
        setMessageWatch,
        setGetBlog
    }
    return (<Context.Provider value={value}>
        {children}
    </Context.Provider>)

}
export default Provider