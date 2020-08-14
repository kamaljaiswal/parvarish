import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import Paper from "../paper";
import styles from "./style";
import { Actions } from "react-native-router-flux";
import Btn from "../btn";
import Hyperlink from "react-native-hyperlink";

const About = ({ age, surveyAge }) => {
  const goHome = () => {
    Actions.home();
  };
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text></Text>

        <Text style={{ fontSize: 21 }}>
          Parvarish provides a toolkit based on the age of the child, and
          reassures the parents of their child's normal growth. Parents are
          advised to keep doing so every month until the child attains the age
          of 3 years.
        </Text>
        <Text></Text>

        <Text></Text>
        <Text style={{ fontSize: 21 }}>
          Certain obvious developmental issues may be able to get detected by
          the use of this app, after which parents must consult a developmental
          pediatrician or therapist for further screening and therapy.
        </Text>
        <Text></Text>
        <Text style={{ fontSize: 20 }}>To use it:</Text>
        <Text style={{ fontSize: 20 }}>
          1) Enter the Date of Birth of your child.
        </Text>
        <Text style={{ fontSize: 20 }}>
          2) Take the survey which will be displayed according to age of child.
        </Text>
        <Text style={{ fontSize: 20 }}>3) Get the feedback.</Text>
        <Text></Text>

        <Hyperlink
          linkDefault
          linkStyle={{ color: "#2980b9", fontSize: 20 }}
          linkText={(url) =>
            url === "https://www.babycenter.in/" ? "babycenter" : url
          }
        >
          <Hyperlink
            linkDefault
            linkStyle={{ color: "#2980b9", fontSize: 20 }}
            linkText={(url) =>
              url ===
              "https://www.cdc.gov/ncbddd/actearly/milestones/index.html"
                ? "CDC"
                : url
            }
          >
            <Text style={{ fontSize: 17 }}>
              The milestones in the survey have been taken from
              'https://www.babycenter.in/' and
              'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' and
              fall in the category of average milestones which most children at
              that age can do. These activities cover a range of fields such as
              cognitive, physical, social and emotional, and communication and
              are used by various development centres to assess children.
            </Text>
          </Hyperlink>
        </Hyperlink>

        <Text style={{ fontSize: 17 }}>
          Note: This is not a full assessment of your child.
        </Text>

        <Text></Text>
        <Btn onClick={goHome} text="Home" isLoading={false} />
      </ScrollView>
    </View>
  );
};

export default About;
