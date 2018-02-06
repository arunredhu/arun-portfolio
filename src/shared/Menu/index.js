import { h } from 'preact';
import { Link } from 'preact-router/match';

import { routePaths } from '../routePaths';

import './style';

const Menu = ({ routePaths, currentRoute }) => {
    console.log(currentRoute)
    return (
        <div class="menu-container flex">
            {
                routePaths.map(({ label, routePath }, index) => (
                    <div class="menu-item">
                        <a href={routePath} class={`transition ${routePath === currentRoute.routePath ? 'active' : ''}`}>
                            {label}
                        </a>
                        <label></label>
                    </div>
                ))
            }
        </div>
    )
}

Menu.defaultProps = {
    routePaths
}

export default Menu;