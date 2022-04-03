
function NavBar(user) {
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/Stores/List">Block Review</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div clclassNameass="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li class="nav-item">
                    <a className="nav-link" href="/my/create">마이 페이지</a>
                </li>   
                <li class="nav-item">
                    <a className="nav-link" href="/store/create">지점 등록</a>
                </li>                                
            </ul>
        </div>
    </nav>
}

export default NavBar