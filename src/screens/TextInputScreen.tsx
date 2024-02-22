import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../../android/app/src/theme/appTheme'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useForm } from '../hooks/useForm'
import { CustomSwitch } from '../components/CustomSwitch'

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title={'TextInputs'} />
                        <TextInput style={stylesScreen.inputStyle}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput style={stylesScreen.inputStyle}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Subscribirse</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 2)} />
                        <HeaderTitle title={JSON.stringify(form, null, 2)} />

                        <TextInput style={stylesScreen.inputStyle}
                            placeholder='Ingrese su teléfono'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10,

    },
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
});


