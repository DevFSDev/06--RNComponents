import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../../android/app/src/theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { Modal } from 'react-native'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={'Modal Screen'} />
            <Button title='Abrir modal' onPress={() => setIsVisible(true)} />
            <Modal animationType='fade' visible={isVisible} transparent={true}>
                {/* Backgorund negro */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Contenido modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0, height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5,
                    }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
                        <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>Cuerpo del modal</Text>
                        <Button title='Cerrar' onPress={() => setIsVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
