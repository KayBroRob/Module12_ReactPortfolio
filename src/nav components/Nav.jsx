import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar>
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                 AboutMe
                </Link>,
                <Link key={2} className="nav-link text-light" to="/portfolio">
                  Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light" to="/contactme">
                  Contact Me
                </Link>,
                <Link key={4} className="nav-link text-light" to="/resume">
                  Resume
                </Link>,
            ]}
         </Navbar>
    );
}