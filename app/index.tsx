import { useState } from "react";
import { Text, View , StyleSheet, KeyboardAvoidingView, Button, ActivityIndicator} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';
import { FirebaseError } from 'firebase/app';

export default function Index() {
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  const[loading, setLoading] = useState<boolean>(false);

  const signUp = async() => {
    setLoading(true);
    try{
      await auth().createUserWithEmailAndPassword(email, password);
      alert('Check your email!');
    }catch(e:any){
      const err = e as FirebaseError;
      alert('Registration failed: '+ err.message);
    } finally{
    setLoading(false);
    }
  };

  const signIn = async() => {
    setLoading(true);
    try{
      await auth().signInWithEmailAndPassword(email, password);
    }catch(e:any){
      const err = e as FirebaseError;
      alert('Sign in Failed: '+ err.message);
    } finally{
    setLoading(false);
    }
  };
  return (
    <View
      style={styles.container}
    >
      <KeyboardAvoidingView behavior="padding">
        <TextInput 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        />
        <Text>Password</Text>
        <TextInput 
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
        />
        {loading ? (
          <ActivityIndicator size={'small'} style={{ margin:28}} />
        ):(
          <>
          <Button onPress={signUp} title="Login"/>
          <Button onPress={signIn} title="Create Account"/>
          </>
        )
        }
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:20,
    flex:1,
    justifyContent:'center'
  },
  input:{
    marginVertical:4,
    height:50,
    borderWidth:1,
    borderRadius:4,
    padding:10,
    backgroundColor:'#fff',
  },
});
