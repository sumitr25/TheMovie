## Description 
In this application, a list of movies is displayed and on a tap of a particular movie, the user can see the detail of that on the next screen. The application also has a search bar to filter the results.

### Note
- Set up `jest` for unit testing. Added few test cases for the demonstration.
- Use `Avenger` as a default movie search string as API returns 
empty response for an empty string.
- Application currently developed using JS, but for better type
  and compile-time safety `Typescript` or [Flow](https://flow.org/en/docs/react/) can be used.
- Use `eslint` For linter.
- Use `hooks` and `functional` components.
- Use `axios` for network calls.
- Use `debounce` and `pagination` to ensure that time-consuming tasks do not fire often, that it stalls the performance of the app.

### Environment setup
Setup node. Make sure node is installed by typing the below command:

 ```
 node -v
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
```

```
npm run ios 

or

Open TheMovie/ios/TheMovie.xcworkspace in Xcode and click the Run button
```

##### Android:

Should have an Android emulator running (quickest way to get started), or a device connected.
Then run the below command -

```sh
cd "~/TheMovie"
yarn
```

```
npm run android 

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
- jest: Contain setup file to run test cases.

### Demo
![Demo image](https://github.com/sumitr25/TheMovie/blob/main/demo.gif)