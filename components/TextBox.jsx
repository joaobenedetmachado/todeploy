import * as React from 'react';
import { TextInput } from 'react-native-paper';

const TextBox = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="texto"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default TextBox;