import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '../context/app-context'
import 'antd/dist/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState([{
    name: 'Ultricies Nibh',
    price: 8.99,
    quantity: 2,
    image: "Item1"
  }, {
    name: 'Fringilla Sollicitudin Consectetur',
    price: 14.99,
    quantity: 1,
    image: "Item2"
  }]);
  const [name, setName] = useState('Ryan Fralick');
  const [address, setAddress] = useState('1489 DESERT SPRINGS AVE RICHLAND, Washington 99352 United States');

  return (
    <AppContext.Provider
      value={{
        data: {
          cart: {
            items,
          },
          id: 'US5426899',
          name,
          address,
          status: ['SUBSCRIPTION_ORDER', 'PAID', 'UNFULFILLED'],
          createdDate: new Date(),
          lastUpdatedDate: new Date(),
        },
        handlers: {
          setItems,
          setName,
          setAddress,
        }
      }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
