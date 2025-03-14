import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Footer>
             <Link key={1} className="nav-link text-light" href="https://github.com/KayBroRob">
                 GitHub
             </Link>,
             <Link key={2} className="nav-link text-light" href="https://www.linkedin.com/in/kaylyn-robinson-411175121/">
                 LinkedIn
             </Link>,
        </Footer>
    );
}

