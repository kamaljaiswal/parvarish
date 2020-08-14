import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import Paper from "../paper";
import styles from "./style";
import { Actions } from "react-native-router-flux";
import Btn from "../btn";
import Hyperlink from "react-native-hyperlink";

const Disclaimer = ({ age, surveyAge }) => {
  const goHome = () => {
    Actions.home();
  };
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text></Text>

        <Text style={{ fontSize: 21 }}>
          This App is NOT a substitute for the use of validated, standardized
          developmental screening tools as recommended by the American Academy
          of Pediatrics. It is NOT a full assessment of a child.
        </Text>
        <Text></Text>
        <Text style={{ fontSize: 21 }}>
          The app provides a toolkit based on the age of the child, and
          reassures the parents of their child's normal growth. Parents are
          advised to keep doing so every month until the child attains the age
          of 3 years.
        </Text>

        <Text></Text>
        <Text style={{ fontSize: 21 }}>
          Certain obvious developmental issues may be able to get detected by
          the use of this app, after which parents must consult a developmental
          pediatrician or therapist for further screening and therapy.
        </Text>

        <Text></Text>
        <Btn onClick={goHome} text="Home" isLoading={false} />
      </ScrollView>
    </View>
  );
};

export default Disclaimer;
