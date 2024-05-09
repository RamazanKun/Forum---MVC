import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>    
            <h1>Forum</h1>
            <NavLink to="/add-post">Gönderiler</NavLink>
            <NavLink to="/">Gönderi Ekle</NavLink>
        </header>
    )
}
export default Header