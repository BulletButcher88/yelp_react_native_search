import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screen/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: "Yelp Search"
    }
  }
)

export default createAppContainer(navigator)