import {
  createContext, useContext, useState
} from 'react';
import Snack from '../components/snackbar';

const SnackbarContext = createContext(
  {
    showSnackBar: () => { }
  }
);

export const SnackbarProvider = () => {
  const [snackObj, setSnackObj] = useState({ open: true });

  const showSnackBar = ({ message }) => {
    alert("I am in hook")
    setSnackObj({
      message,
      open: true
    });
    setTimeout(() => setSnackObj({ open: false }), 3000);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <Snack visible={true} message="Test" />
    </SnackbarContext.Provider>
  );
};

export default () => useContext(SnackbarContext);
