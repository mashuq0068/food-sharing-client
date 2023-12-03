import React, { useState } from "react";
import MyTable from "./MyTable";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManageFood = ({ manageFood }) => {
  const {_id}  =manageFood
  const navigate = useNavigate()
  const secureAxios = useAxios()
  const [tableData, setTableData] = useState([manageFood]);
  const updateTableData = (idToDelete) => {
    setTableData((prevData) => prevData.filter((item) => item._id !== idToDelete));
  };
  const handleDelete =() => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios.delete(`/foods/${_id}`)
        .then(res => {
          console.log(res.data)
          if (res.data.deletedCount > 0) {
            Swal.fire(
                'Canceled!',
                'Your request has been canceled.',
                'success'
              )
              updateTableData(_id);
              
        }
  
        })
         
             
        
      }
    })
      
  }
    const columns = React.useMemo(
      () => [
       
        {
          Header: 'Food Name',
          accessor: 'foodName',
        },
        {
          Header: 'expiredDate',
          accessor: 'expiredDate',
        },
        {
          Header: 'ID',
          accessor: '_id',
        },
        {
          Header: 'Actions', // Header for the 4th column (e.g., "Actions")
          accessor: 'actions', // Use a custom accessor for the actions
          Cell: ({ row }) => (
            <div className="flex gap-5">
              {/* Define your buttons or actions here */}
              <button onClick={()=>{navigate(`/update/${_id}`)}} className="btn md:text-base 2xl:text-xl  hover:bg-yellow-400  bg-yellow-400">Edit</button>
              <button onClick={handleDelete} className="btn md:text-base  2xl:text-xl hover:bg-yellow-400 bg-yellow-400">Delete</button>
              <button onClick={()=>{navigate(`/manage/${_id}`)}} className="btn md:text-base 2xl:text-xl  hover:bg-yellow-400 bg-yellow-400">Manage</button>
            </div>
          ),
        },
      ],
      []
    );
  
    const data = React.useMemo(() => tableData , [tableData]);
  
    return (
      <div>
        <MyTable columns={columns} data={data} />
      </div>
    );
  };
  export default ManageFood