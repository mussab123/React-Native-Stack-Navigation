import { createStackNavigator } from 'react-navigation-stack';
import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoriteScreens from '../screens/FavouriteScreen';


const StackNavigator = createStackNavigator({
    News: {
        screen: NewsListScreen

    },

    NewsItem: {
        screen: NewsItemScreen,
        navigationOptions: {
            headerTitle: 'News Item'
        }

    }
})


const BottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: StackNavigator
    },
    Favorites: {
        screen: FavoriteScreens
    }
})


export default createAppContainer(BottomTabNavigator);