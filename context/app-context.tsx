import { createContext } from "react";

interface AppContextInterface {
  data: {
    cart: {
      items: { name: string, quantity: number, price: number }[];
    };
    id: string;
    name: string;
    address: string;
    status: string[];
    createdDate: Date | undefined;
    lastUpdatedDate: Date | undefined;
  },
  handlers: {
    setItems: any;
    setName: any;
    setAddress: any;
  }
}

const AppContext = createContext<AppContextInterface>({
  data: {
    cart: {
      items: [],
    },
    id: '',
    name: '',
    address: '',
    status: [],
    createdDate: undefined,
    lastUpdatedDate: undefined,
  },
  handlers: {
    setItems: undefined,
    setName: undefined,
    setAddress: undefined,
  }
});

export default AppContext
