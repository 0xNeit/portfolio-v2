import React from 'react';
import TableRow from './TableRow';
import { GitHubData } from '../../constants/site';

interface TableProps {
  data: GitHubData[];
}

const Table: React.FC<TableProps> = ({ data }) => (
  <table>
    <tbody>
      {data.map((pair) => (
        <TableRow
          format={pair.format}
          key={pair.label}
          label={pair.label}
          link={pair.link}
          value={pair.value}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
