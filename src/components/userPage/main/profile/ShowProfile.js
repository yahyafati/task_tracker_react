import React, {useState, useEffect} from "react";
import {FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {BsPerson} from "react-icons/bs";
import {AiFillEdit, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {TiGroup} from "react-icons/ti";

const ShowProfile = ({match}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user)
    }, [])
    console.log()
    return <div className="container">
        <Link className="edit-link" to={`${match.url}/edit`}>
            Edit
        </Link>
        <div className="title_pic_container">
            <div className="pic-container">
                <FaUserCircle className="profile_pic"/>
                <Link to="/" className="changePhoto">
                    Change Photo
                </Link>
            </div>
            <div className="dep_title">{user.departmentTitle}</div>
        </div>
        <div className="detail name">
            <BsPerson className="icon"/>
            {user.fullName}
        </div>
        <div className="detail email">
            <AiOutlineMail className="icon"/>
            {user.email}
        </div>
        <div className="detail phone">
            <AiOutlinePhone className="icon"/>
            {user.phone}
            <Link to="/" className="changePhone">
                <AiFillEdit className="edit"/>
                <div className="text">Change</div>
            </Link>
        </div>
        <div className="detail department">
            <TiGroup className="icon"/>
            {user.department.name}
        </div>
    </div>

}

export default ShowProfile;