import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial96983Navigator from '../features/Tutorial96983/navigator';
import NotificationList96955Navigator from '../features/NotificationList96955/navigator';
import Settings96954Navigator from '../features/Settings96954/navigator';
import Settings96946Navigator from '../features/Settings96946/navigator';
import UserProfile96944Navigator from '../features/UserProfile96944/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial96983: { screen: Tutorial96983Navigator },
NotificationList96955: { screen: NotificationList96955Navigator },
Settings96954: { screen: Settings96954Navigator },
Settings96946: { screen: Settings96946Navigator },
UserProfile96944: { screen: UserProfile96944Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
