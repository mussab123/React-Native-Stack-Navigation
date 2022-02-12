import { createStackNavigator } from 'react-navigation-stack';
import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator({
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

export default createAppContainer(AppNavigator);