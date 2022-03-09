import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className='nav'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/articles">Articles</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>

        </ul>
    )
}


export default NavBar;