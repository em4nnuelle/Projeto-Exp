import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    modalOverlay:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:themas.Colors.blackTransparent       
    },
    container:{
        width:'80%',
        padding:16,
        backgroundColor:'#FFFF',
        elevation:5,
        alignItems:'center'
    },
    dateText: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    }
})
