import React from "react";
import MyTable from "./MyTable";

const ManageFood = ({ manageFood }) => {
    const columns = React.useMemo(
      () => [
       
        {
          Header: 'Food Name',
          accessor: 'foodName',
        },
        {
          Header: 'ID',
          accessor: '_id',
        },
      ],
      []
    );
  
    const data = React.useMemo(() => [manageFood], [manageFood]);
  
    return (
      <div>
        <MyTable columns={columns} data={data} />
      </div>
    );
  };
  export default ManageFood
  


