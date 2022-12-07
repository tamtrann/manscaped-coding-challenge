import { Form, InputNumber, Typography } from 'antd';
import styles from '../styles.module.css'
import Image from 'next/image'

const { Text } = Typography;

type OrderFormProps = {
  initialValues: { name: string, quantity: number, price: number }[];
  onValuesChange?: ((changedValues: any, values: any) => void) | undefined
}

const OrderForm = ({ initialValues, onValuesChange }: OrderFormProps) => {
  const [form] = Form.useForm();
  const items = Form.useWatch('items', form);
  const subtotal = items?.reduce((total: number, current: { name: string, quantity: number, price: number }) => {
    return total + current.price * current.quantity
  }, 0)

  const hasHandler = onValuesChange !== undefined;

  return (
    <Form
      form={form}
      initialValues={{
        items: initialValues
      }}
      onValuesChange={onValuesChange}
      autoComplete="off"
      colon={false}
    >
      <Form.List name="items">
        {(fields, { }) => (
          <>
            <div className={`${styles.container} ${styles.header}`}>
              <div className={styles.itemImage} />
              <div className={styles.itemName}>
                <Text strong>
                  PRODUCT
                </Text>
              </div>
              <div className={styles.itemQuantity}>
                <Text strong>
                  QUANTITY
                </Text>
              </div>
              <div className={styles.itemPrice}>
                <Text strong>
                  PRICE
                </Text>
              </div>
            </div>
            {fields.map(({ key, name, ...restField }) => {
              return (
                <div className={styles.container} key={key}>
                  <Image src={`/${form.getFieldValue('items')[key].image}.png`} alt={`image ${key}`} width={60} height={60} />
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    label={<Text className={styles.label}>Name: </Text>}
                    className={`${styles.item} ${styles.itemName}`}
                  >
                    <Text>{form.getFieldValue('items')[key].name}</Text>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'quantity']}
                    label={<Text className={styles.label}>Quantity: </Text>}
                    className={`${styles.item} ${styles.itemQuantity}`}
                  >
                    {hasHandler ? <InputNumber placeholder="Quantity" min={1} /> : <Text>{form.getFieldValue('items')[key].quantity}</Text>}
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'price']}
                    label={<Text className={styles.label}>Price: </Text>}
                    className={`${styles.item} ${styles.itemPrice}`}
                  >
                    <Text>$ {form.getFieldValue('items')[key].price * form.getFieldValue('items')[key].quantity}</Text>
                  </Form.Item>
                </div>
              )
            }
            )}
            <div className={`${styles.container} ${styles.footer}`}>
              <Text strong>Total: </Text>
              <Text className={`${styles.item} ${styles.itemPrice}`}>$ {Number.parseFloat(subtotal).toFixed(2)}</Text>
            </div>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default OrderForm;