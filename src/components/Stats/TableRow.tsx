import React from 'react';

interface TableRowProps {
    format?: (value: any) => React.ReactNode;
    label: string;
    link?: string;
    value: React.ReactNode | number | string;
}

const TableRow: React.FC<TableRowProps> = ({
    format = (x) => x,
    label,
    link,
    value,
  }) => (
    <tr>
      <td width="70%">{label}</td>
      <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
    </tr>
);

export default TableRow;
