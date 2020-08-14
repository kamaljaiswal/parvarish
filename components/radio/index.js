import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const Radio = ({ group, onChange, defaultVal }) => {
  const [value, setValue] = useState("first");
  useEffect(() => {
    setValue(defaultVal);
  }, [defaultVal]);

  const handleChange = (value) => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <RadioButton.Group
      onValueChange={(value) => handleChange(value)}
      value={value}
    >
      {group.map((r) => {
        return (
          <View key={r.value}>
            <RadioButton.Item label={r.text} value={r.value} style={{ margin: 0 }} />
          </View>
        );
      })}
    </RadioButton.Group>
  );
};

export default Radio;
