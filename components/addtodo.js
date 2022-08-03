import React,{useState} from "react";
import { StyleSheet,Text,View,TextInput,Button } from "react-native";

export default function AddTodo() {
    const [text,setText]=useState('');
    const [email_id,setEmail_id]=useState('');
    const [password,setPassword]=useState('');

    const changeHandler=(val) => {
        setText(val);
    }
    return (
        < View style={styles.container}>
            <Text style={styles.changecolor}>Enter Name:</Text>
      <TextInput 
      multiline
      style={styles.input}
      placeholder='e.g Vishal Mishra'
      onChangeText={(val)=>setName(val)}
      />
      <Text>Enter email_id:</Text>
      <TextInput 
      style={styles.input}
      placeholder='xyz@gmail.com'
      onChangeText={(val)=>setAge(val)}
      />
      <Text>Enter Password</Text>
      <TextInput 
      style={styles.input}
      placeholder='abcd1234@'
      onChangeText={(val)=>setPassword(val)}
      />

            <Button onPress={()=>console.log(text)} title='Enter' color={'dodgerblue'} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        
    
    backgroundcolor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
    

    },
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderColor:'#add'
        
    }
})

