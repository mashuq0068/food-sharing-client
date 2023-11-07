
import { useTable } from 'react-table';

const MyTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    // headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table 2xl:text-2xl  mx-auto lg:text-xl text-base">
      {/* <thead className='2xl:text-2xl lg:text-xl'>
        {headerGroups.map((headerGroup , i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column , i) => (
              <th key={i} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead> */}
      <tbody {...getTableBodyProps()}>
        {rows.map((row , i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()} className=''>
              {row.cells.map((cell , i) => {
                return (
                  <td className='border border-gray-500' key={i}{...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;