import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    header:{
        width:'100%',
        height:Dimensions.get('window').height/6,
        paddingHorizontal:20,
        justifyContent:'center',
        backgroundColor:themas.Colors.primary
    },
    greeting:{
        fontSize:20,
        color:'#FFFF',
        marginTop:20
    },
    boxInput:{
        width:'80%'
    },
    boxList:{
        flex:1,
        width:'100%',
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    card:{
        width:'100%',
        height:60,
        backgroundColor:'#FFF',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding: 10,
        borderWidth:1,
        borderColor:themas.Colors.lightGray
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    titleCard:{
        fontSize:16,
        fontWeight:'bold'
    },
    descriptionCard:{
        color:themas.Colors.gray
    }
})