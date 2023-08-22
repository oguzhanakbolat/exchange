import * as Font from 'expo-font'
import {
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
} from '@expo-google-fonts/rubik';

import { ShadowsIntoLight_400Regular } from '@expo-google-fonts/shadows-into-light';


const useFonts = async () => {
    await Font.loadAsync({
        Rubik_300Light,
        Rubik_300Light_Italic,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
        Rubik_800ExtraBold,
        Rubik_900Black,
        ShadowsIntoLight_400Regular
    });
};

export default useFonts;
