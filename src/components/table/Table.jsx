import styles from './index.module.css';
import Table from 'react-bootstrap/Table';


export function PostsTable() {

    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </Table>
    )
}