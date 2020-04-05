import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
//import MenuStore from '../../store/MenuStore';

class SidebarMenu extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.fetchMainMenu()
    }

    fetchMainMenu() {
        axios.get(`${process.env.REACT_APP_API_MENU}/menus/main-menu`)
            .then( response => {
                this.setState({
                    items: response.data.items
                })
            } )
            .catch( err => {
                console.error(err);                
            })
        /*MenuStore.prototype.getMainMenu()
            .then(res => {
                this.setState({
                    items: res
                })
                console.log(this.state.items);
                
            })
            .catch(err => {
                console.error(err);
                
            }) */
    }

    render() {
        return (
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    {this.state.items.length>0 && 
                        this.state.items.map( (item, index) => {
                            let url = ''
                            switch (item.type) {
                                case 'custom': url = item.url;
                                                break;
                                case 'taxonomy': url = '/blog/' + item.slug;
                                                break;
                                
                                default: url = '/' + item.slug;
                            }
                            return (
                                <li key={index}>
                                    <NavLink exact to={url}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })                    
                    }
                </ul>
            </nav>
        )
    }
}

export default SidebarMenu