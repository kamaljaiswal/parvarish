import React from "react";
import Home from "./components/home";
import Survey from "./components/survey";
import About from "./components/about";
import Disclaimer from "./components/disclaimer";

import { Router, Scene } from "react-native-router-flux";
import Feedback from "./components/feedback";
import { DefaultTheme, Provider as ThemeProvider } from "react-native-paper";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Scene key="root">
            <Scene
              key="home"
              component={Home}
              title="Home"
              initial={true}
              titleStyle={{ fontFamily: "Roboto" }}
            />
            <Scene
              key="survey"
              component={Survey}
              title="Checklist"
              titleStyle={{ fontFamily: "Roboto" }}
            />

            <Scene
              key="feedback"
              component={Feedback}
              title="Feedback"
              type="reset"
              titleStyle={{ fontFamily: "Roboto" }}
            />
            <Scene
              key="about"
              component={About}
              title="About App"
              type="reset"
              titleStyle={{ fontFamily: "Roboto" }}
            />
            <Scene
              key="disclaimer"
              component={Disclaimer}
              title="Disclaimer"
              type="reset"
              titleStyle={{ fontFamily: "Roboto" }}
            />
          </Scene>
        </Router>
      </ThemeProvider>
    </>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#003152",
    accent: "#003152",
  },
};
