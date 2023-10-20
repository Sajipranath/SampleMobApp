import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';

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
       <View style={styles.headerContainer}>
        <Icon name="menu" size={30} color="white" />
        <Text style={styles.headlabel}>Sample App</Text>
      </View>
      <View style={styles.containerbody}>
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
        renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Icon name="arrow-right" type="font-awesome" size={20} color="#031d85" />
              <Text style={styles.listItemText}>{item.key}</Text>
            </View>
           )}
        />
      </View>
      <View style={{ justifyContent: 'center',alignItems: 'center'}}>
        <Image source={require('./assets/chef.png')} style={{width:100, height:110}}/>
      </View>
        
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => console.log('Form data:', { text, selectedValue, listItems })}
      >
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#896ffc',
    marginTop: 25,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 10,
  },
  headlabel: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '800',
    // marginLeft: 10,
    // backgroundColor:'#f0f2f4',
    // marginBottom: 5,
    marginTop:15,
    textAlign: 'center',
    // borderWidth: 2, 
    // borderColor: 'black',
    flex: 1, 
    alignItems: 'center',
  },
  containerbody:{
    backgroundColor: '#fff',
    marginTop: 25,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
    paddingTop:20,
    paddingBottom:30,

  },
  label: {
    fontSize: 18,
    marginBottom: 3,
    marginLeft: 5,
    color:'#031d85',
  },
  input: {
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
    marginLeft:10,
    marginRight:10,
    paddingHorizontal: 10,
    backgroundColor:'#dbdbdb',
  },
  picker: {
  height: 50,
  borderColor: '#031d85', 
  borderWidth: 3,      
  borderRadius: 25,
  marginLeft:10,
  marginRight:10,
  marginBottom: 15,
  paddingHorizontal: 10,
  backgroundColor:'#dbdbdb',
},
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 30,
  },
  listItemContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 30, 
  },
  listItemText: {
    fontSize: 16,
    marginBottom: 2,
    marginLeft:5
    
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
    backgroundColor: 'white',
    padding: 10,
    marginBottom:10,
  },
  buttonText: {
    color: '#896ffc',
    textAlign: 'center',
    fontWeight: '700',
    fontSize:20,
  },
});
