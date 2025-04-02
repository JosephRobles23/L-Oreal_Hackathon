import React, { createContext, useContext, useState } from 'react';

interface ColorTheme {
  primary: string;
  secondary: string;
  background: string;
  buttonHover: string;
  buttonText: string;
  inputBg: string;
  borderColor: string;
  name:string;
  texth:string;
}

interface ColorContextType {
  colors: ColorTheme;
  setColors: (colors: ColorTheme) => void;
}

const defaultColors: ColorTheme = {
  primary: 'from-orange-500 to-red-300',
  secondary: 'bg-orange-50',
  background: 'bg-white',
  buttonHover: 'hover:bg-orange-100',
  buttonText: 'text-orange-700',
  inputBg: 'bg-orange-50',
  borderColor: 'bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent',
  name: 'Sunset',
  texth:'bg-gradient-to-r from-blue-200 to-cyan-400 bg-clip-text text-transparent'
};

const ColorContext = createContext<ColorContextType>({
  colors: defaultColors,
  setColors: () => {},
});

export const useColors = () => useContext(ColorContext);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<ColorTheme>(defaultColors);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};