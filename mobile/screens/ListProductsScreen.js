import React from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    Dimensions,
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { Container, Content, List, ListItem, Button } from 'native-base';

const productsArray = [
    {
        "idProductType": 1,
        "image": "https://caramelo-images-produtos.s3.amazonaws.com/racao/magnus_premium_carne_filhote.png",
        "type": "Ração Cachorro Carne Filhote Magnus 10.1Kg",
        "price": "70",
    },
    {
        "idProductType": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6vew4aYumRKoi-m6VLmH1LXj8co9_c5etpg&usqp=CAU",
        "type": "Mordedor para cachorro",
        "price": "15",
    },
    {
        "idProductType": 3,
        "image": "https://www.petlove.com.br/images/products/203900/product/Ra%C3%A7%C3%A3o_Whiskas_Carne_para_Gatos_Adultos_-_10_1_kg.jpg?1556481193",
        "type": "Ração Gato Whiskas 10.1Kg",
        "price": "60",
    },
    {
        "idProductType": 4,
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMosGWi-R1GdxxNLgFss8bi-VU_eI5UQey-YdhCwFr2Y648kIn5Dp6aEl0pEJUJoUakJjPZIb2Sg&usqp=CAc",
        "type": "Shampoo Cachorro",
        "price": "22",
    },
    {
        "idProductType": 5,
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRH5LZxUpMS0G0Q3LO3EXuDDagQ8ivK2czalwo8Ajj45Qsth0ynZycknwWXHczq48sdN8mMJNngA&usqp=CAc",
        "type": "Areia para gato",
        "price": "30",
    },
]

class ListProducts extends React.Component {
  
    constructor(){
        super()
        this.state = {
            dataSource:productsArray
        }
    }
    
    renderItem = ({item}) => {
        
        return(
           <TouchableOpacity style = {{ flex: 1, flexDirection: 'row',backgroundColor: '#FFF9E6', marginHorizontal:'5%', borderRadius: 40, }}
           onPress={() => this.props.navigation.navigate("Payment", { price:item.price,  store: this.props.navigation.state.params.store, product: item.type })}>
                <Image style={{ width: 70, height: 80, resizeMode: 'stretch', marginLeft: '8%', borderRadius: 40, marginVertical: '3%' }} source = {{ uri: item.image }} />
                <View style = {{ flex: 1 }}>
                    <Text style={styles.textListType}> {item.type} </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                    <Text style={styles.textListType}> R${item.price} </Text>
                </View>
            </TouchableOpacity>

        )
    }

    renderSeparator = () => {
        return (
            <View style={{ height:7, width:'100%', backgroundColor: '#FF8945'}}>
            </View>
        )
    }

    render(){
        
        return (
            <Content style={styles.contentContainer}>

                <View style={{ }}>
                    <View style={{ width: '100%', padding: '5%' }}>
                        <Text style={styles.mainTitle}>Qual produto você quer comprar?</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
                <View style={{height:15}}/>
            </Content>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8945'//'#FFF9E6'
    },
    contentContainer: {
        flex: 1,
        paddingTop: '5%',
        backgroundColor: `#FF8945`//'#FFF9E6'
    },
    textListType: {
        fontSize: 15,
        marginLeft: '5%',
        marginBottom: '3%',
        marginTop: '5%',
        color: 'black'
    },
    mainTitle: {
        color: '#E64E10',
        fontFamily: 'Asap_bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
});

export default ListProducts;