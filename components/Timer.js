import { View, Text } from 'react-native'
import React, { memo, useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);

    const timer = () => {
        setTimeout(() => {
            setTime(x => x + 1);
            timer();
        }, 1000)
    };

    useEffect(() => {
       // timer();
    }, []);

  return (
    <View>
      <Text>{time}</Text>
    </View>
  )
}

export default memo(Timer);