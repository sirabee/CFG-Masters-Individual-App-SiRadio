import React from "react";
import { NativeBaseProvider, extendTheme, Text, Box } from "native-base";

export default function AccountScreen() {
  
    const newColorTheme = {
        brand: {
          900: "#8287af",
          800: "#7c83db",
          700: "#b3bef6",
        },
    };

    const theme = extendTheme({ colors: newColorTheme });

    return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}