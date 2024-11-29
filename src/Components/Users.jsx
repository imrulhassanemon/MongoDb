import { useState } from "react";
import toast from "react-hot-toast";

import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)

  const handelDeleteBtn = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            toast.success('user SuccessFully deleted')
            const remainingUser = users.filter(user => user._id !== _id)
            setUsers(remainingUser)
        }
      })
      
  }

  return (
    <div>
      <h2>Users: {users.length}</h2>
      {users.map((user) => (
        <div
        className="border items-center p-2  mt-5 gap-10"
        key={user._id}
        >
          <div className="flex justify-between border ">
            <div>
              <p>
                <span className="text-2xl font-semibold">User Name: </span>
                {user.name}
              </p>
            </div>
            <div>
              <button onClick={() =>handelDeleteBtn(user._id)}>Delete</button>
              <Link className="ml-5" to={`/update/${user._id}`}> <button>Update</button> </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <button>
          <Link to={"/"} className=" border px-3 py-2 ">
            Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Users;
