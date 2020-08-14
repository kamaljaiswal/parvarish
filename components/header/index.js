import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
  const _goBack = () => console.log('Went back');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Home" />
    </Appbar.Header>
  );
};

export default Header;