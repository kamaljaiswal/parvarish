import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import Paper from "../paper";
import styles from "./style";
import { Actions } from "react-native-router-flux";
import Btn from "../btn";

const Feedback = ({ userSurvey, age, surveyAge }) => {
  const [yesArr, setYesArr] = useState([]);
  const [sometimesArr, setSometimesArr] = useState([]);
  const [noArr, setNoArr] = useState([]);
  const [message, setMsg] = useState("");
  useEffect(() => {
    let noArr = [];
    let yesArr = [];
    let sometimesArr = [];
    let msg = "";
    userSurvey.forEach((element) => {
      if (element.ans === "no") {
        noArr.push(element);
      } else if (element.ans === "sometimes") {
        sometimesArr.push(element);
      } else {
        yesArr.push(element);
      }
    });

    if (noArr.length == 0 && sometimesArr.length == 0) {
      msg =
        "Please check your responses in the summary below. Your child is " +
        age +
        " month(s) old. Your child seems to be achieving the necessary milestones an average child of this age does! Please do keep monitoring your child and come back to do the next survey after a month. Thank you!";
    } else if (noArr.length == 0 && sometimesArr.length > 0) {
      msg =
        "Please check your responses in the summary below. Your child is " +
        age +
        " month(s) old. It is possible that your child is able to do some of these activities only sometimes. Please keep monitoring these activities over the next month. Come back after a month for the next survey.";
    } else {
      msg =
        "Please check your responses in the summary below. Your child is " +
        age +
        " month(s) old. It might be possible that your child is not able to achieve all the necessary milestones an average child of this age must be able to. Please look at the summary and keep looking out for the activities your child is currently unable to do. If, in a month's time too, your child is unable to perform one or more of these activities, it would be advisable to consult a therapist or a developmental paedatrician. ";
    }
    setYesArr(yesArr);
    setNoArr(noArr);
    setSometimesArr(sometimesArr);
    setMsg(msg);
  }, [userSurvey]);
  const goHome = () => {
    Actions.home();
  };
  return (
    <View style={styles.feedBackRoot}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={styles.summary}>Message</Text>
        <Text style={styles.feedbackMessage}>{message}</Text>
        <Text></Text>
        <Text style={styles.summary}>SUMMARY</Text>
        {yesArr.length ? (
          <Text style={styles.yes}>
            You answered <Text style={styles.bold}>YES</Text> to
          </Text>
        ) : null}
        {
          <View style={styles.mtb15}>
            <Paper>
              {yesArr.map((q, index) => {
                return (
                  <View style={styles.feedbackRoot}>
                    <Text>{q.question} </Text>
                  </View>
                );
              })}
            </Paper>
          </View>
        }
        {noArr.length ? (
          <Text style={styles.no}>
            You answered <Text style={styles.bold}>NO</Text> to
          </Text>
        ) : null}
        {
          <View style={styles.mtb15}>
            <Paper>
              {noArr.map((q, index) => {
                return (
                  <View style={styles.feedbackRoot}>
                    <Text>{q.question}</Text>
                  </View>
                );
              })}
            </Paper>
          </View>
        }

        {sometimesArr.length ? (
          <Text style={styles.sometimes}>
            You answered <Text style={styles.bold}>SOMETIMES</Text> to
          </Text>
        ) : null}
        {
          <View style={styles.mtb15}>
            <Paper>
              {sometimesArr.map((q, index) => {
                return (
                  <View style={styles.feedbackRoot}>
                    <Text>{q.question}</Text>
                  </View>
                );
              })}
            </Paper>
          </View>
        }
        <Btn onClick={goHome} text="Home" isLoading={false} />
      </ScrollView>
    </View>
  );
};
export default Feedback;
