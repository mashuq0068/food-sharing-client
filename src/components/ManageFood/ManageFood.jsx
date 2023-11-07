import React from "react";
import MyTable from "./MyTable";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ManageFood = ({ manageFood }) => {
  const {_id}  =manageFood
  const secureAxios = useAxios()
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
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              
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
              <button  className="btn md:text-lg text-xl  hover:bg-teal-400 bg-teal-400">Edit</button>
              <button onClick={handleDelete} className="btn md:text-lg  text-xl hover:bg-teal-400 bg-teal-400">Delete</button>
              <button className="btn md:text-lg  text-xl  hover:bg-teal-400 bg-teal-400">Manage</button>
            </div>
          ),
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