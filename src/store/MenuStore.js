import axios from 'axios';

class MenuStore {
    async getMainMenu() {
        let mainMenu = await axios.get(`${process.env.REACT_APP_API_MENU}/menus/main-menu`)
            /*.then( response => {
                mainMenu = response.data.items;
                return mainMenu;
            } )
            .catch( err => {
                console.error(err);                
            })*/
            mainMenu = mainMenu.status === 200 ? mainMenu.data.items : []
            return mainMenu
    }
}

export default MenuStore;