import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  console.log(user);
  console.log('hello')
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(email, name);
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success('You are successfully updated')
        }else(
            toast.error('You are not Updated anymore')
        )
      });
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="border px-10 py-3 border-gray-500 w-max">
        <h3>
          Update <span className="font-semibold text-xl">{user.name}</span>{" "}
          Details
        </h3>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            className="border border-gray-600"
            defaultValue={user.name}
            name="name"
            id=""
          />
          <br />
          <input
            type="email"
            className="border border-gray-600 mt-2"
            defaultValue={user.email}
            name="email"
            id=""
          />
          <br />
          <input className="border mt-3 px-3 py-1 rounded-md " type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Update;
