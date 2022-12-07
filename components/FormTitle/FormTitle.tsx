import { Typography } from "antd"
import Moment from 'react-moment';
import styles from './styles.module.css'

const { Text } = Typography

type FormTitleProps = {
  id: string;
  createdDate: Date | undefined;
  lastUpdatedDate: Date | undefined
}

const FormTitle = ({ id, createdDate, lastUpdatedDate }: FormTitleProps) => {
  return (
    <div className={styles.title}>
      <div>
        <Text strong>Order </Text><Text>{id}</Text>
      </div>
      <div className={styles.date}>
        <Text>Created on{' '}
          <Moment format="MMM Do YYYY">
            {createdDate}
          </Moment>
          <br />
          Last updated on{' '}
          <Moment format="MMM Do YYYY">
            {lastUpdatedDate}
          </Moment></Text>
      </div>
    </div>
  )
}

export default FormTitle;