import { StyleSheet } from "react-native";

const common = {
  fontSize: 16
}
const styles = StyleSheet.create({
  feedbackRoot: {
    width: "100%",
    paddingBottom: 10
  },
  ques: {
    paddingBottom: 20,
  },
  feedBackRoot: {
    padding: 20
  },
  feedbackMessage: {
    fontSize: 16,
    color: '#000'
  },
  summary: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  },
  yes: {
    ...common,
    color: "green"
  },
  no: {
    ...common,
    color: "red"
  },
  sometimes: {
    ...common,
    color: 'orange'
  },
  mtb15: {
    marginTop: 15,
    marginBottom: 15
  },
  bold: {
    fontWeight: "bold"
  }
});
export default styles;
