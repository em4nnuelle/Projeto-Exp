import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.Colors.lightGray,
        borderColor: themas.Colors.lightGray
    },
    input:{
        height:'100%',
        width: '90%',
        borderRadius:40,
    },
    titleInput:{
        marginLeft:5,
        color:themas.Colors.gray,
        marginTop:20
    },
    Icon:{
        width: '100%'
    },
    Button:{
        width:'10%',
    }
})