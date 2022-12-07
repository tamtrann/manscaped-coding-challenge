import { useContext } from "react"
import { Tag, Space, Button } from 'antd'
import { useRouter } from 'next/navigation';
import AppContext from "../context/app-context"
import FormTitle from "../components/FormTitle";
import OrderForm from "../components/OrderForm"
import ShippingForm from "../components/ShippingForm";
import FormFooter from "../components/FormFooter";
import styles from '../styles/Cart.module.css';

function Cart() {
  const router = useRouter();
  const { data, handlers, } = useContext(AppContext);
  const { id, cart, name, address, status, createdDate, lastUpdatedDate } = data;
  const { setName, setAddress, setItems } = handlers;

  return (
    <div className={styles.container}>
      <FormTitle
        id={id}
        createdDate={createdDate}
        lastUpdatedDate={lastUpdatedDate}
      />
      <div className={styles.body}>
        <OrderForm
          initialValues={cart.items}
          onValuesChange={(changedValues, values) => {
            setItems(values.items)
          }} />
        <div className={styles.shipping}>
          <ShippingForm initialValues={{
            name,
            address
          }} onValuesChange={(changedValues, values) => {
            setName(values.name)
            setAddress(values.address)
          }} />
        </div>
        <Space wrap>
          {status.map(element => <Tag key={element} className={styles.tag}>{element}</Tag>)}
        </Space>
        <div className={styles.footer}>
          <FormFooter
            extra={
              <Button type="primary" size="large" onClick={() => router.push('/checkout')}>
                Checkout
              </Button>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Cart