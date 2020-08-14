import React, { useState, useRef } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";
import Radio from "../radio";
import Btn from "../btn";
import { View, Text } from "react-native";
import styles from "./style";
import { Actions } from "react-native-router-flux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getMinDate, getDateStringVal, getMonthDiff } from "../../utils/date";
import Footer from "../footer";

const Home = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(null);
  const [stringDate, setStringDate] = useState("");
  const [gender, setGender] = useState("");
  const [showDob, setShowDOb] = useState(false);
  const dobRef = useRef();
  var surveyAge;
  const group = [
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },
    { text: "Other", value: "other" },
  ];

  const onRadioChange = (value) => {
    if (value) setGender(value);
  };

  const onSubmit = () => {
    if (dob) {
      let ageInMonths = getMonthDiff(dob);

      if (ageInMonths == 0 || ageInMonths == 1) {
        surveyAge = 1;
      } else {
        surveyAge = ageInMonths - 1;
      }

      Actions.survey({ age: ageInMonths, surveyAge: surveyAge });
    } else {
      alert("Please fill in DOB!");
    }
  };
  const onDateFocus = () => {
    setShowDOb(true);
  };
  const onDateChange = (event, date) => {
    dobRef.current.blur();
    setShowDOb(false);
    if (date) {
      setStringDate(getDateStringVal(date));
      setDob(date);
    }
  };
  const handleAbout = () => {
    Actions.about();
  };

  const handleDisclaimer = () => {
    Actions.disclaimer();
  };
  return (
    <>
      <View style={styles.homeRoot}>
        <Text style={styles.heading}>Enter Details</Text>
        <TextInput
          label="Name of child (Optional)"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          placeholder="Enter Name of Child"
        />
        <TextInput
          style={styles.dateInput}
          label="Date of Birth of Child"
          value={stringDate}
          onFocus={onDateFocus}
          mode="outlined"
          placeholder="Enter DOB of Child"
          ref={dobRef}
        />
        {showDob && (
          <DateTimePicker
            mode="date"
            value={dob || new Date()}
            minimumDate={getMinDate()}
            maximumDate={new Date()}
            mode="default"
            display="default"
            onChange={onDateChange}
          />
        )}
        <Text style={styles.genderText}>Gender of Child (Optional):</Text>
        <View style={styles.radioView}>
          <Radio group={group} onChange={onRadioChange} defaultVal={gender} />
        </View>
        <Btn onClick={onSubmit} text="Continue" isLoading={false} />
      </View>
      <Footer>
        <View style={styles.footer}>
          <Text style={styles.about} onPress={handleAbout}>
            ABOUT APP
          </Text>
        </View>
        <Text></Text>
        <View style={styles.footer}>
          <Text style={styles.about} onPress={handleDisclaimer}>
            DISCLAIMER
          </Text>
        </View>
      </Footer>
    </>
  );
};

export default Home;
