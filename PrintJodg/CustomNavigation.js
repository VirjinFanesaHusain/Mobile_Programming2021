import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import { FormatPrint } from './src/pages'

const Stack = createStackNavigator()

const SecondScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="FormatPrint"
            component={FormatPrint}
            />
        </Stack.Navigator>
    )
}

export default SecondScreenNavigator;