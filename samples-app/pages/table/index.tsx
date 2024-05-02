import * as Styles from './styles';

import data from './data.json';

export default function Table() {
  return (
    <>
      <h2>Table - Sticky header</h2>
      <Styles.TableContainer>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map(x => (
              <tr key={x.email}>
                <td>{x.firstName} {x.lastName}</td>
                <td>{x.email}</td>
                <td>{x.phoneNumber}</td>
                <td>{x.street}, {x.city}, {x.state}, {x.country}, {x.zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Styles.TableContainer>
    </>
  );
}