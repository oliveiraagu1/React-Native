import { StyleSheet, View, Text, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";


const list = [
    {
        id: 1,
        label: "Boleto conta luz",
        value: "300,10",
        date: "15/02/2022",
        type: 0 // gastos
    },
    {
        id: 2,
        label: "Pix client Z",
        value: "2.500,00",
        date: "20/06/2022",
        type: 1 // entradas
    },
    {
        id: 3,
        label: "Salário",
        value: "7.500,00",
        date: "17/09/2022",
        type: 1 // entradas
    },
]


export default function Home(){
    return(
        <View style={styles.container}>
            <Header name="Gustavo Oliveira"/>
            <Balance saldo="9.250.90" gastos="-521,00"/>
            <Text style={styles.title}>Últimas movimentações</Text>
            <Actions/>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={ (item) => String(item.id) }
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Movements data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        margin: 14,

    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
})