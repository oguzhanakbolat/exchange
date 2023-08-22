import { createContext, useState } from "react";

const UseFCM = createContext();

const FCMProvider = ({ children }) => {
    const [fcmToken, setFCMToken] = useState('');

    return (
        <UseFCM.Provider value={{ fcmToken, setFCMToken }}>
            {children}
        </UseFCM.Provider>
    )
};

export { FCMProvider, UseFCM };
