import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [text, setText] = useState('');
  const [selectedValue, setSelectedValue] = useState('Option 1');
  const [listItems, setListItems] = useState([
    { key: 'Item 1' },
    { key: 'Item 2' },
    { key: 'Item 3' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headlabel}>Sample App</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.input}
        onChangeText={(value) => setText(value)}
        value={text}
      />

      <Text style={styles.label}>Contact No:</Text>
      <TextInput
        placeholder="Enter Your Telephone No."
        style={styles.input}
        onChangeText={(value) => setText(value)}
        value={text}
      />

      <Text style={styles.label}>Meals</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Breakfast" value="Breakfast" />
        <Picker.Item label="Lunch" value="Lunch" />
        <Picker.Item label="Dinner" value="Dinner" />
      </Picker>

      <Text style={styles.label}>List Items:</Text>
      <FlatList
        data={listItems}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
      />

      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => console.log('Form data:', { text, selectedValue, listItems })}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
  },

  headlabel: {
    fontSize: 25,
    backgroundColor:'#f0f2f4',
    marginBottom: 5,
    marginTop:5,
    textAlign: 'center',
    fontWeight: '800',
    borderWidth: 2, 
    borderColor: 'black',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color:'#031d85',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15,
    marginLeft:10,
    marginRight:10,
    paddingHorizontal: 10,
  },
  picker: {
  height: 40,
  borderColor: '#031d85', 
  borderWidth: 3,      
  borderRadius: 5,
  marginBottom: 15,
  paddingHorizontal: 10,
},
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
   horizontalLine: {
    height: 1,
    width: 200,
    backgroundColor: 'black',
    marginBottom: 20,
    alignSelf: 'center',
    borederwidth: 3,
    borderColor: 'black'
  },
  buttoncontainer: {
    width: 350,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#028bfa',
    padding: 10,
    marginBottom:10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
