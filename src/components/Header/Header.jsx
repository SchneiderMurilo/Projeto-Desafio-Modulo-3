import logo from "../../assets/logo.svg"
import profileImage from "../../assets/profile.jpeg"
import "./Header.css"

export default function Header() {

    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />

            <div className="profile">
                <img src={profileImage} alt="profile" />
                <p>Bem vinda, Isa.</p>
            </div>
        </div>
    )

}