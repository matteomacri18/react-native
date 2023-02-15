# LOOK OTHER BRANCHES FOR DIFFERENT THINGS

# PROJECT STRUCTURE
* ```assets:``` Asset folder to store all images, vectors, fonts, etc.
* ```src:``` This folder is the main container of all the code inside your application.
  * ```components:``` Folder to store any common component that you use through your app (such as a generic button)
  * ```constants:``` Folder to store any kind of constant that you have.
  * ```routes:``` Folder to store the navigators.
  * ```redux:``` This folder should have all your reducers and store
  * ```views:``` Folder that contains all your application screens/features.
  * ```helper:``` Common api controller.
  * ```utils:``` Folder to store any common function such as calcutate radius, different date formatting functions
* ```App.js:``` Main component that starts your whole app.
* ```index.js:``` Entry point of your application as per React-Native standards.
* Modify the environment variables files in root folder ```(.env)```

## Props
```
In React Native, props (short for "properties") are a way to pass data from a parent component to a child component. They are used to customize and configure a component when it is created. Props are passed as a single object, with each key/value pair representing a prop name and its value. The child component can then access the props using this.props.
For example, a Text component can have a prop called style which can be passed to change the style of the text.
```

## Hooks
```
In React Native, Hooks are a way to handle state and side-effects in functional components. Prior to the introduction of Hooks, handling state and lifecycle methods in functional components was not possible, and you would have to use class components instead.
Hooks are JavaScript functions that allow you to use state and other React features in functional components. They let you use state and other React features without writing a class.

Some of the built-in hooks in React Native are:

useState: allows a functional component to use state
useEffect: allows a functional component to use lifecycle methods such as componentDidMount and componentDidUpdate
useContext: allows a functional component to use context
Hooks are a more flexible and powerful way to handle state and lifecycle methods in functional components, and make it easier to reuse stateful logic between components.
```

## Main topics
There are several main topics to be aware of when working with React Native:

```Components:``` React Native components are the building blocks of a React Native app. They are used to build the UI and structure of the app. You can use built-in components such as View, Text, and Image, or create your own custom components.

```Props:``` Props are used to pass data from a parent component to a child component. They are used to customize and configure a component when it is created.

```State:``` State is used to store and manage the data that is used to render a component. State can be updated, and when it changes, the component will re-render with the updated data.

```Navigation:``` React Native provides built-in navigation components, such as StackNavigator and TabNavigator, that can be used to handle navigation between screens in an app.

```Styling:``` React Native provides a way to style components using a subset of CSS properties. You can use inline styles or style sheets to style components.

```Networking:``` React Native provides built-in support for fetching data from a server using the fetch API. You can also use libraries such as axios to make network requests.

```Lifecycle methods:``` React Native components have lifecycle methods that are called at different points in the component's lifecycle. These methods can be used to perform actions such as fetching data or setting up timers when the component is created or updated.

```Hooks:``` Hooks are a way to handle state and side-effects in functional components. They allow you to use state and other React features in functional components, and make it easier to reuse stateful logic between components.

```Debugging and testing:``` React Native provides tools and libraries that can be used to debug and test apps. Examples include the React Developer Tools and Jest.

```Platform specific code:``` React Native allows you to write platform-specific code, so you can create a unique experience for each platform while still sharing most of the codebase.


# HOOKS
```

```

