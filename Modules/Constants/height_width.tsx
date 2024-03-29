import {
    StyleSheet,
    Dimensions,
} from 'react-native';


const heights = StyleSheet.create({

    //heights
    height50: {
        height: 50,
        width: Dimensions.get('window').width,
    },
    height20: {
        height: 20,
        width: Dimensions.get('window').width,
    },
    height10: {
        height: 10,
        width: Dimensions.get('window').width,
    },

})

export default heights;