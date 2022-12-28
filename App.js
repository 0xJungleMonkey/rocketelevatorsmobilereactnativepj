//This code defines a simple React Native app that has two screens: a home screen and a details screen. The home screen displays a card with a title and some content, and the details screen displays a list with a subheader and an item. The home screen has a touchable area that, when pressed, will navigate to the details screen and pass along the title and content as parameters.

// The code first imports several dependencies, including the NavigationContainer component from the react-navigation library and the createStackNavigator function, which allows you to define a stack of screens where each screen is placed on top of the previous one. The TouchableOpacity component from the react-native library is a wrapper component that makes its children touchable, and the Card, Title, Paragraph, List, and PaperProvider components from the react-native-paper library are used for styling and layout.
// It also imports the deepmerge function, which allows you to merge two objects and their nested objects.
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";
import merge from "deepmerge";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from "react-native-paper";
import { PreferencesContext } from "./PreferencesContext";
import { Header } from "./Header";
// The Stack variable is created by calling createStackNavigator
const Stack = createStackNavigator();
// the title and content variables are defined as strings.
const title = "meow!";
const content = "I am not a cat.I am a tiger";
//The HomeScreen component is a functional component that displays a touchable card
// touchable card containing the title and content variables. When the
// touchable area is pressed, it uses the navigation prop to navigate to the
// "Details" screen and pass along the title and content as parameters.

const HomeScreen = ({ navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation?.push("Details", {
        title,
        content,
      })
    }
  >
    <Card>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);
// The DetailsScreen component is also a functional component
// displays a list with a subheader and an item.
// It retrieves the title and content parameters from the route prop and displays them in the list.

const DetailsScreen = (props) => {
  const { title, content } = props?.route?.params;
  return (
    <List.Section>
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

// The adaptNavigationTheme function is not defined in this code, but it is assumed to be a function that takes an object with two properties (reactNavigationLight and reactNavigationDark) and returns an object with two properties (LightTheme and DarkTheme). These properties are likely objects that contain styles and settings for a light theme and a dark theme, respectively.
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});
const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

// the App component renders
// a PaperProvider component, which provides a theme to the entire app
// a NavigationContainer component, which is the top-level container for the app's navigation.
// Inside the NavigationContainer, a Stack.Navigator component is rendered, which defines a stack of screens.
// The Stack.Navigator has two Stack.Screen components as children,
// one for the "Home" screen and one for the "Details" screen.
//  Each Stack.Screen component specifies the name of the screen and the component that should be rendered for that screen.
// The initialRouteName prop of the Stack.Navigator is set to "Home", so the home screen will be the first screen to be displayed.

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  // };

  return (
    // Context is wired into the local state of our main component, so that its values could be propagated throughout the entire application

    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: ({ scene }) => <Header scene={scene} />,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
