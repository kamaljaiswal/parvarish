import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import styles from "./style";
import questions from "../../questions";
import Question from "./question";
import Btn from "../btn";
import { Actions } from "react-native-router-flux";

const Survey = ({ age, surveyAge }) => {
  const [userSurvey, setUserSurvey] = useState([]);
  const [surveyQues, setSurveyQues] = useState({});
  useEffect(() => {
    const surveyQues = questions.filter((ques) => ques.age === Number(age));
    setSurveyQues(surveyQues[0]);
  }, [questions]);

  const handleAnsChange = (quesAns) => {
    let updatedArr = userSurvey;
    let quesIndex = updatedArr.findIndex(
      (obj) => obj.question === quesAns.question
    );
    if (quesIndex > -1) {
      updatedArr[quesIndex] = quesAns;
    } else {
      updatedArr = [...updatedArr, quesAns];
    }
    setUserSurvey(updatedArr);
  };

  const onSubmit = () => {
    if (surveyQues.question.length === userSurvey.length) {
      Actions.feedback({
        userSurvey: userSurvey,
        age: age,
        surveyAge: surveyAge,
      });
    } else {
      alert("Please answer all the questions!");
    }
  };

  return (
    <View style={styles.surveyRoot}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }}>
          Your child is <Text style={styles.bold}>{age} </Text>
          month(s) old.
        </Text>
        <Text style={{ fontSize: 20 }}>
          The survey given is for a child of
          <Text style={styles.bold}> {surveyAge} </Text> month(s) old.
        </Text>
        <Text></Text>
        {surveyQues.question &&
          surveyQues.question.map((q, index) => {
            return (
              <View style={styles.ques} key={index}>
                <Question q={q} handleAnsChange={handleAnsChange} />
              </View>
            );
          })}
        <Btn onClick={onSubmit} text="Submit" isLoading={false} />
      </ScrollView>
    </View>
  );
};

export default Survey;
