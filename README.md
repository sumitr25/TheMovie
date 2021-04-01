## Description 
In this application, we are displaying the list of movies and on taping a particular movie we can see the detail of that on the next screen. We also have a search bar to filter the results. We have used Debounce and pagination to enhance the user experience and to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the app.

### Environment setup
 Download node and npm. Make sure node and npm are installed by typing the below commands

 ```
 node -v

 npm -v
 ```
After installing the node in your system, you  can install react native by typing the following command in the terminal

```
npm install -g react-native-cli
```

### Run instructions

##### iOS:

commands -

```sh
cd "~/TheMovie"
yarn
cd npx pod-install
npx react-native run-ios 

or

Open TheMovie/ios/TheMovie.xcworkspace in Xcode and click the Run button
```

##### Android:

Should have an Android emulator running (quickest way to get started), or a device connected.
Then run the below command -

```sh
cd "~/TheMovie"
yarn
npx react-native run-android 

or 

open the project in Android studio and click the run button after Gradle build
```

#### Test Cases:
Run test case command

```
yarn test
```

Update snapshot of test cases

```
yarn test -- -u
```

# Directory structure

```

├── app
│   ├── assets
│   │   └── images
│   │       └── searchList
│   │           ├── cross_icon.png
│   │           └── search_icon.png
│   ├── components
│   │   ├── components.test.js
│   │   ├── EmptyListComponent.js
│   │   ├── LoadMoreFooter.js
│   │   ├── MovieListRow.js
│   │   ├── SearchBar.js
│   │   └── __snapshots__
│   │       └── components.test.js.snap
│   ├── navigation
│   │   ├── NavigatorFactory.js
│   │   └── ScreenNames.js
│   ├── res
│   │   ├── colors.js
│   │   ├── dimensions.js
│   │   ├── fonts.js
│   │   ├── images.js
│   │   └── strings.js
│   ├── screens
│   │   ├── MovieDetail.js
│   │   └── MovieList.js
│   └── services
│       ├── app.js
│       ├── Config.json
│       ├── index.js
│       ├── NetworkUtils.js
│       └── utils.js
├── App.js
├── app.json
├── babel.config.js
├── index.js
├── jest
│   └── setup.js
├── jest.config.json
├── metro.config.js
├── package.json
├── README.md
└── yarn.lock

```

- components: Contains all the reusable components in the application.
- screens: Contains screens/views (Functional components).
- res: Colors, Fonts, Strings, etc.
- navigation: Application Navigation stack.
- services: Contains networking files like config, utils(Axios calls), etc.
- assets: Contains images used in the project.
- coverage: It is auto-generated folder while we run test cases
- jest: Contain setup file to run test cases.


### Note

- Application currently developed using JS, but for better type
 and compile-time safety Typescript can be used
 
- For linter, I have used - eslint
- I have used React Hooks and functional components
- We have done the setup for the unit testing. As we have not 
  dealt with logical operations in the app, so we have just written some 
  superficial unit test cases. We have written 4 test cases for components.
- We have used Axios for network calls. 
