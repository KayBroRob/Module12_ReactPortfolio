export default function Footer({links}) {
    return (
        <nav className="navbar footerbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <div className="collapse footerbar-collapse" id="footerbarSupportedContent">
                    <ul className="footervbar-footer me-auto mb-2 mb-lg-0">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}