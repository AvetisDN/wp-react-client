import React, { PureComponent } from 'react';

import SidebarMenu from './SidebarMenu';
import SidebarInfo from './SidebarInfo';

class Sidebar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <React.Fragment>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                <aside id="colorlib-aside" role="complementary" className="js-fullheight">
                    
                    <SidebarMenu/>
                    <SidebarInfo/>
                    
                </aside>
            </React.Fragment>
        )
    }
}

export default Sidebar