import React from "react";
import { Table } from "reactstrap";

const ContentItemTable = (props) => {
  return (
    <Table hover>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ContentItemTable;
