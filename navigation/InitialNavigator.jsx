import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loading } from '../screens/screens'
import OnboardingNavigator from './OnboardingNavigator'
import AppNavigator from './AppNavigator'

const InitialNavigator = () => {
    const loading = useSelector((state) => state.loader.load)
    const { validated, user } = useSelector((state) => state.userInfo)

    const handleFirstOpen = async () => {
        console.log('App opened for the first time')
    }

    useEffect(() => {
        handleFirstOpen()
    }, [])


    if (!loading && !validated) {
        return <OnboardingNavigator />
    } else if (!loading & validated) {
        return <AppNavigator />
    } else {
        return <Loading />
    }
}

export default InitialNavigator