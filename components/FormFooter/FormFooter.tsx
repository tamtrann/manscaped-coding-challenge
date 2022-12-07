import { ReactNode } from 'react'
import { Button, Space, Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons';
import styles from './styles.module.css'

const { confirm } = Modal;

const FormFooter = ({ extra }: { extra?: ReactNode }) => {
  const showConfirm = (title: string, content: string | ReactNode) => {
    confirm({
      title,
      icon: <ExclamationCircleFilled />,
      content,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <Space wrap>
      <Button type="primary" size="large" className={styles.button} onClick={() => {
        showConfirm('Cancel', 'Are you sure you want to cancel?')
      }}>
        Cancel
      </Button>
      <Button type="primary" size="large" className={styles.button} onClick={() => {
        showConfirm('Refund', 'Are you sure you want to refund?')
      }}>
        Refund
      </Button>
      <Button type="primary" size="large" className={styles.button} onClick={() => {
        showConfirm('Resend Confirmation', 'Are you sure you want to resend confirmation?')
      }}>
        Resend Confirmation
      </Button>
      <Button type="primary" size="large" className={styles.button} onClick={() => {
        showConfirm('Resend Tracking', 'Are you sure you want to resend tracking?')
      }}>
        Resend Tracking
      </Button>
      {extra}
    </Space>
  )
}

export default FormFooter;