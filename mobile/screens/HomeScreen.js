import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Container, Content, Button } from 'native-base';

class Home extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                
                <Content style={styles.contentContainer}>

                    <View style={{ marginTop: '30%', marginBottom: '10%', paddingHorizontal: '10%', justifyContent: 'space-between' }}>
                        <Button
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: '3%',
                                borderRadius: 44,
                                height: 55,
                                backgroundColor: '#E64E10'
                                
                            }}
                            onPress={() => this.props.navigation.navigate("ListPetShop", { idProductType: 1 })}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontFamily: 'Asap_bold',
                                    fontSize: 18
                                }}>
                                Comprar
                            </Text>
                        </Button>
                        
                        <Button
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: '3%',
                                borderRadius: 44,
                                height: 55,
                                backgroundColor: '#E64E10'
                            }}
                            onPress={() => this.props.navigation.navigate("Seller")}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontFamily: 'Asap_bold',
                                    fontSize: 18
                                }}>
                                Vender
                            </Text>
                        </Button>

                        <Button
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: '3%',
                                borderRadius: 44,
                                height: 55,
                                backgroundColor: '#E64E10'
                            }}
                            onPress={() => this.props.navigation.navigate("OngDetail")}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontFamily: 'Asap_bold',
                                    fontSize: 18
                                }}>
                                Serviços
                            </Text>
                        </Button>
                    </View>

                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#FFF9E6',
        backgroundColor: '#FF8945',
    },
    contentContainer: {
        flex: 1,
        paddingTop: '5%'
    },
});  

export default Home;