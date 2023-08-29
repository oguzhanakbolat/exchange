import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const getResStatus = () => {
    if(width < 414) {
        return 'sm';
    } else if(width < 768) {
        return 'md';
    } else {
        return 'lg';
    }
}


export const sizing = (sm, md, lg) => {

    if(width < 414) {
        return sm;
    } else if(width < 768) {
        return md || sm;
    } else {
        return lg || md || sm;
    }
}

export const getFontSize = (size) => {
    if(width < 375) {
        return size;
    } else {
        return size * width / 375;
    }
}
    

export default getResStatus;