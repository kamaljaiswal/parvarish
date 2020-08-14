import React, { useState } from "react";
import DatePicker from "react-native-datepicker";

import { getTodaysDate as getMaxDate, getMinDate } from "../../utils/date";

const MyDatePicker = ({ onDateChange }) => {
  const [date, setDate] = useState("");
  const maxDate = getMaxDate();
  const minDate = getMinDate();
  return (
    <DatePicker
      style={{
        width: "100%",
        marginTop: 20,
        backgroundColor: "#f6f6f6",
        borderRadius: 4,
      }}
      date={date}
      mode="date"
      placeholder="Select DOB"
      format="DD/MM/YYYY"
      minDate={minDate}
      maxDate={maxDate}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      customStyles={{
        textAlign: "left",
        dateInput: {
          marginLeft: 36,
        },
      }}
      onDateChange={(date) => {
        setDate(date);
        if (onDateChange) onDateChange(date);
      }}
    />
  );
};
export default MyDatePicker;
