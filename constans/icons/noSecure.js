import React from 'react'
import { Path, Svg } from 'react-native-svg'

const NoSecureIcon = ({ size, color = 'black' }) => 
  <Svg width={size || "48"} height={size || "48"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path  d="M22.4595 11.7563C20.9655 7.416 16.7625 4.5 12 4.5C7.2375 4.5 3.0345 7.416 1.5405 11.7563C1.4865 11.9138 1.4865 12.0863 1.5405 12.2438C3.0345 16.584 7.2375 19.5 12 19.5C16.7625 19.5 20.9655 16.584 22.4595 12.2438C22.5135 12.0863 22.5135 11.9138 22.4595 11.7563ZM12 16.5C9.51825 16.5 7.5 14.4818 7.5 12C7.5 9.51825 9.51825 7.5 12 7.5C14.4818 7.5 16.5 9.51825 16.5 12C16.5 14.4818 14.4818 16.5 12 16.5Z" fill={color}/>
  </Svg>

export default NoSecureIcon;
