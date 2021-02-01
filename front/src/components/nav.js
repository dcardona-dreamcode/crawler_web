import React from 'react';

function Nav() {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" href="/">buscador</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/crawler">crawler</a>
            </li>
        </ul>
    );
}
export default Nav;