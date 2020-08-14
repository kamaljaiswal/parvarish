import React, { useState } from "react";
import { Text, View } from "react-native";
import Paper from "../paper";
import Radio from "../radio";
import styles from "./style";

const Question = ({ q, handleAnsChange }) => {
  const [answer, setAnswer] = useState("");
  const answers = [
    { text: "Yes", value: "yes" },
    { text: "No", value: "no" },
    { text: "Sometimes", value: "sometimes" },
  ];
  const onRadioChange = (value) => {
    setAnswer(value);
    if (handleAnsChange) {
      handleAnsChange({ question: q, ans: value });
    }
  };
  return (
    <Paper>
      <Text style={styles.questionText} >{q}</Text>
      <View style={styles.quesRadio}>
        <Radio group={answers} onChange={onRadioChange} defaultVal={answer} />
      </View>
    </Paper>
  );
};
export default Question;
