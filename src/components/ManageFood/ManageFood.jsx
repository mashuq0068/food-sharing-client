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
            <div className=" gap-5 lg:flex hidden">
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
      <>
      
      <div className="lg:hidden flex  justify-center  ">
      {/* <table className=" w-full">
  <tbody className=" w-full"> 
    {tableData?.map((oneData, index) => (
      <tr key={index}>
        <td>{oneData?.foodName}</td>
        <td>
          <button onClick={() => navigate(`/update/${_id}`)} className="btn md:text-base 2xl:text-xl  hover:bg-yellow-400  bg-yellow-400">Edit</button>
          <button onClick={handleDelete} className="btn md:text-base  2xl:text-xl hover:bg-yellow-400 bg-yellow-400">Delete</button>
          <button onClick={() => navigate(`/manage/${_id}`)} className="btn md:text-base 2xl:text-xl  hover:bg-yellow-400 bg-yellow-400">Manage</button>
        </td>
      </tr>
    ))}
  </tbody>
  div

</table> */}

<div className=" ml-[3%] w-[25%] mt-[3%]">
  
  {
    tableData?.map(oneData => <p key={oneData?._id}>{oneData?.foodName}</p>)
  }
</div>
<div className=" grid gap-[5%] w-[75%] mr-[5%] mt-[3%]  grid-cols-3">
<button onClick={() => navigate(`/update/${_id}`)} className="px-2 py-1 rounded-md  md:text-base 2xl:text-xl  hover:bg-yellow-400  bg-yellow-400">Edit</button>
          <button onClick={handleDelete} className="px-2 rounded-md  py-1 md:text-base  2xl:text-xl hover:bg-yellow-400 bg-yellow-400">Delete</button>
          <button onClick={() => navigate(`/manage/${_id}`)} className="px-2 rounded-md  py-1 md:text-base 2xl:text-xl  hover:bg-yellow-400 bg-yellow-400">Manage</button>
</div>


      </div>
      <div className=" lg:block hidden">
        <MyTable columns={columns} data={data} />
      </div>
      </>
    );
  };
  export default ManageFood