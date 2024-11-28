import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

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
              <button >Delete</button>
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
