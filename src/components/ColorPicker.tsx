import React from 'react';
import { Settings } from 'lucide-react';
import { useColors } from '../context/ColorContext';

const colorThemes = [
  {
    primary: 'from-orange-500 to-red-400',
    secondary: 'bg-gray-50',
    background: 'bg-gray-50',
    buttonHover: 'hover:bg-gray-100',
    buttonText: 'text-white',
    inputBg: 'bg-gray-50',
    borderColor: 'bg-gradient-to-r from-blue-200 to-cyan-400 bg-clip-text text-transparent',
    name: 'Default',
    texth:'bg-gradient-to-r from-blue-200 to-cyan-400 bg-clip-text text-transparent'
  },
  {
    primary: 'from-purple-500 to-pink-400',
    secondary: 'bg-purple-50',
    background: 'bg-white',
    buttonHover: 'hover:bg-purple-100',
    buttonText: 'text-purple-700',
    inputBg: 'bg-purple-50',
    borderColor: 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent',
    name: 'Royal',
    texth:'bg-gradient-to-r from-blue-200 to-cyan-400 bg-clip-text text-transparent'
  },
  {
    primary: 'from-green-500 to-emerald-400',
    secondary: 'bg-green-50',
    background: 'bg-white',
    buttonHover: 'hover:bg-green-100',
    buttonText: 'text-green-700',
    inputBg: 'bg-green-50',
    borderColor: 'bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent',
    name: 'Nature',
    texth:'bg-gradient-to-r from-blue-200 to-cyan-400 bg-clip-text text-transparent'
  },
  {
    primary: 'from-orange-500 to-red-400',
    secondary: 'bg-orange-50',
    background: 'bg-white',
    buttonHover: 'hover:bg-orange-100',
    buttonText: 'text-orange-700',
    inputBg: 'bg-orange-50',
    borderColor: 'bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent',
    name: 'Sunset',
    texth:'bg-gradient-to-r from-blue-200 to-cyan-400 bg-clip-text text-transparent'
  }
];

const ColorPicker: React.FC = () => {
  const { colors, setColors } = useColors();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 p-3 bg-white rounded-lg shadow-xl border border-gray-100 z-50 w-[200px] h-[200px]">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Choose Theme</h4>
          <div className="grid grid-cols-2 gap-2">
            {colorThemes.map((theme, index) => (
              <button
                key={index}
                onClick={() => {
                  setColors(theme);
                  setIsOpen(false);
                }}
                className={`p-2 rounded-lg text-xs font-medium transition-all text-black
                  ${theme.primary === colors.primary ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'}
                `}
              >
                <div className={`h-6 w-full rounded-md  text-black bg-gradient-to-r ${theme.primary} mb-1`} />
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;