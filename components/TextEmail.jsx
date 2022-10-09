import * as React from 'react';
import { TextInput } from 'react-native-paper';

export default function TextBox  ()  {
  const [text, setText] = React.useState("");
  
  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />

  );
  
};

