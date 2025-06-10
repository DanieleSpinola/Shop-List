import {FlatList, Text, View, ListRenderItem} from "react-native";
import styles from '../assets/styles/Styles'
import '../assets/i18n'
import {useTranslation} from "react-i18next";
import {useState} from "react";

export default function Index() {
    const {t} = useTranslation()
    const [data, setData] = useState<string[]>([])


    const renderItem: ListRenderItem<string> = ({item}) => (
        <View style={styles.flatListItem}>
            <Text style={styles.textSmall}>
                {item}
            </Text>
        </View>
    )


    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{t('home_title')}</Text>
            <FlatList style={styles.flatListStyle} data={data} renderItem={renderItem}/>
        </View>
    );

}