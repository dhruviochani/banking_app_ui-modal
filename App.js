import { StyleSheet,Modal,Text,Image,Pressable,SafeAreaView,FixedHeaderScrollView,ScrollView,StatusBar, TextPropTypes,Alert,View} from 'react-native';
import React, { useState } from "react";
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <View>
      <View style={styles.container_main}>
         <View>
         <View>
         <Image
          style={styles.logo}
          source={{uri: 'https://www.freeiconspng.com/uploads/bank-icon-5.png'}}
        />
         </View>
           <View>
               <Text style={styles.header1}>TIRED BANK</Text>
  
           
               <Text style={styles.header2}>BANK BALANCE: $0</Text>
           </View>
         </View>
         
       <ScrollView style={styles.scrollView}>
         
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>bank statement:</Text>
              <Text style={styles.modalText}>$0</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>BACK TO HOME</Text>
              </Pressable>
              <Text style={styles.modalText}>you're broke</Text>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>check bank statement</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
         <Text style={styles.textStyle}>
           check bank balance
           </Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
         <Text style={styles.textStyle}>
           check bank balance
           </Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
         <Text style={styles.textStyle}>
           check bank balance
           </Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
         <Text style={styles.textStyle}>
           check bank balance
           </Text>
        </Pressable>
        </ScrollView>
      </View>
      
      </View>
    </View>
        
    
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor:'lightgreen',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:40
  },
  logo:{
    width: 150,
    height: 150,
    alignSelf:"center"
  },
  modalView: {
    // margin:5,
    backgroundColor: "#000000aa",
    flex: 1,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height:35,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 15,
    margin:50
  },
  buttonOpen: {
    backgroundColor: "lightblue",
    flex:2,
        fontSize: 20,
        backgroundColor:'white',
        marginHorizontal:30,
        marginTop:25,
        padding:15,
        textAlign:"center",
        textAlignVertical:'center',
        borderColor:'lightblue',
        borderWidth:10,
        borderRadius:20
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight:"500",
    textAlign: "center",
    fontSize:20
  },
  modalText: {
    color:"white",
    fontSize:30,
    marginTop: 15,
    paddingTop:15,
    margin: 15,
    textAlign: "center",
    alignSelf:"center"
  },
  // container_main: {
  //       // flex: 1,
  //       // paddingTop: StatusBar.currentHeight,
  //       // padding:'auto'
  //       margin:10,
  //       color:"red",
  //     },
  scrollView: {
        backgroundColor: 'lightgreen',
        // marginHorizontal:2,
        // marginTop:5,
        marginBottom:'auto',
        padding:'auto'
        
      },
      
      header1: {
        fontSize: 42,
        backgroundColor:'black',
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
        paddingVertical:10,
        padding:50,
        // padding:'auto',
        // borderColor:'black'
    
      },
      header2: {
        fontSize: 20,
        backgroundColor:'#006400',
        fontWeight: "500",
        color:'white',
        // alignSelf:'center',
        paddingVertical:5,
        paddingLeft:5,
        marginHorizontal:19
        // padding:'auto',
        // borderColor:'black'
    
      },
    
});

export default App;





