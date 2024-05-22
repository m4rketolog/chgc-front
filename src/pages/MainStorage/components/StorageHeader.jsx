import './StorageHeader.css'
const StorageHeader = () => {
    return (
        <header>
            <nav className="nav-main">
                <button className="show-more">
                    Показать Больше
                </button>
                <div className="icon-box">
                    <img className={"icon-box-avatar"} src={"./public/img/avatar.jpg"} alt="avatar"/>
                </div>
            </nav>

        </header>
    )
}
export default StorageHeader;