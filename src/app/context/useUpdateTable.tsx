import { FolderCopyOutlined } from '@mui/icons-material';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o tipo do contexto
type ArrayContextType = {
  arrayState: any[];
  updateArray: (newArray: any[]) => void;
};

// Criando o contexto
const ArrayContext = createContext<ArrayContextType | undefined>(undefined);

// Provedor do contexto que utiliza o useState
type ArrayProviderProps = {
  children: ReactNode;
};

export const ArrayProvider: React.FC<ArrayProviderProps> = ({ children }) => {
  const [arrayState, setArrayState] = useState<any[]>([]);

  // Função para atualizar o array no estado
  const updateArray = (newArray: any[]) => {
    // setArrayState((old) => [...old, ...newArray]);
    setArrayState(newArray);
  };

  return (
    <ArrayContext.Provider value={{ arrayState, updateArray }}>
      {children}
    </ArrayContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useArrayContext = (): ArrayContextType => {
  const context = useContext(ArrayContext);
  if (!context) {
    throw new Error('useArrayContext deve ser usado dentro de um ArrayProvider');
  }
  return context;
};