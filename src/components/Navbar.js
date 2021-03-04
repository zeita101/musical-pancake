import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nvabar">
            <h1>😺</h1>
            <div className="links">
                <Link to="/">Home</Link><br>
                </br>
                <Link to="/CatAPI">CatAPI</Link>
                <br>
                </br>
                <Link to="/DogAPI">DogAPI</Link>

            </div>
        </nav>
    )
}

export default Navbar;