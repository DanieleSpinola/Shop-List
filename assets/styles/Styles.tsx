import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    //container styles
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        marginTop: "10%"
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    //text styles
    textTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    textMedium: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'regular',
        textAlign: 'left',
    },
    textSmall: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'regular',
        textAlign: 'left',
    },

    //Flatlist
    flatListStyle: {
        flex : 1,
        paddingHorizontal: 20,
    },

    flatListItem: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2, // for Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },


})

export default styles;