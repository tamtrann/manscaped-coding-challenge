import { Form, Space, Input, Typography } from 'antd';
import styles from '../styles.module.css'

const { Text } = Typography;

type OrderFormProps = {
  initialValues: { name: string, address: string };
  onValuesChange?: ((changedValues: any, values: any) => void) | undefined
}

const OrderForm = ({ initialValues, onValuesChange }: OrderFormProps) => {
  const { name, address } = initialValues;
  const hasHandler = onValuesChange !== undefined;

  return (
    <Form initialValues={initialValues} onValuesChange={onValuesChange} autoComplete="off" colon={false}>
      <Text strong>SHIPPING ADDRESS</Text>
      <Space direction="vertical">
        <Form.Item className={styles.item} name="name">
          {hasHandler ? <Input placeholder="Name" /> : <Text>{name}</Text>}
        </Form.Item>
        <Form.Item className={styles.item} name="address">
          {hasHandler ? <Input.TextArea placeholder="Address" autoSize /> : <Text>{address}</Text>}
        </Form.Item>
      </Space>
    </Form>
  );
};

export default OrderForm;