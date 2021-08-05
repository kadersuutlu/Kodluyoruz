import React from 'react';
import { SafeAreaView,/* View,TouchableOpacity, Text, */ StyleSheet } from 'react-native';
import Card from './components/Card';

function App(){
  return(
    <SafeAreaView style={StyleSheet.container}>
      {/* <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is coming..</Text>
          </View>
          <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.cart_button_title}>I LIKED</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Arif Işık</Text>
          <Text style={styles.card_text}>Uzaylılar arafından kaçırıldım.Evet tarafından.</Text>
          </View>
          <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.cart_button_title}>I LIKED</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Serbest</Text>
          <Text style={styles.card_text}>İlhami abi sen söyle, ben başka bir ilde miyim?</Text>
          </View>
          <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.cart_button_title}>I LIKED</Text>
          </TouchableOpacity>
      </View> */}
      <Card title="Eddard Stark" text="Winter is coming.. " />
      <Card title="Arif Işık" text="Uzaylılar arafından kaçırıldım.Evet tarafından." />
      <Card title="Serbest" text="İlhami abi sen söyle, ben başka bir ilde miyim?" />
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
  },
/*   card_container:{
    backgroundColor:'white',
    margin:10,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10,
  },
  card_body:{
    padding:10,
  },
  card_title:{
    fontSize:20,
    fontWeight:'bold',
    margin:10,
    marginBottom:3,
  },
  card_text:{
    fontSize:18,
    margin:10,
    marginTop:3,
  },
  card_button_container:{
    backgroundColor:'#00C2FF',
    padding:10,
    alignItems:'center',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  cart_button_title:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
  }, */
});



/* const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1} />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
       <View style={styles.box_4}/>
    </SafeAreaView>
 )
} */
// function sayHello( ){
// console.log('Hello World 5');
// }
/*
  const sayHello = () => {
    console.log('Hello World 6');
    return 5;
  };
  */
/* return (<SafeAreaView style={styles.container}>
      <View style={styles.uppper_view_container}>
        <Text>Hello World</Text>
        <Text>Hello World 2</Text>
      </View>
      <View style={styles.center_view_container}>
        <Text>Selam</Text>
        <Text>Selam 2</Text>
      </View>
      <View style={styles.buttom_view_container}>
        <Text>Merhaba Dünya</Text>
        <Text>Merhaba Dünya 2</Text>
      </View>
       
      

    </SafeAreaView>
   );  
    <Button
       // title="Here Press Me!"
        //color='lightcoral'
        //disabled={false}
        //onPress={sayHello}
      // onPress={() => { 
      //  sayHello() //Fonksiyon çağrısı + fonksiyon çıktısı funtionName()
      //alert("Hello World 4") 
      //}}
      />
      <Text>Hello World 3</Text>
      */



/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center',
  },
  box_1: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },
  box_2: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
  },
  box_3: {
    width: 75,
    height: 75,
    backgroundColor: 'aqua',
  },
  box_4: {
    width: 75,
    height: 75,
    backgroundColor: 'orange',
  },
});
 uppper_view_container: {
    flex:1,
    backgroundColor: 'red',
  },
  center_view_container: {
    flex:2,
    backgroundColor: 'green',
  },
  buttom_view_container: {
    flex:3,
    backgroundColor: 'blue',
  },
  */

export default App;