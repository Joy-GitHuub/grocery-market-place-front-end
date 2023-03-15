import React from 'react';
import './ManageProfile.css'
import { toast } from 'react-toastify';

const ManageProfile = () => {

    const [allUser, setAllUser] = React.useState([]);

    React.useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/user`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusbar) {
                setAllUser(data.data);
            }
        })
    } , []);

    const handleStatus = (e) => {
        const idValue = e.target.value.split(' ');
       const data = {
        status: idValue[0]
       };
       const id = idValue[1];

       const url = `https://market-place-server-site.vercel.app/api/v1/user/statusUpdate/${id}`;
       fetch(url, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
       })
       .then((res) => res.json())
       .then((data) => {
       if(data.statusbar){
        toast.success('User Delete Success Fully....', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
       }
       })
    };

    const handleRole = (e) => {
        const idValue = e.target.value.split(' ');
        const data = {
         role: idValue[0]
        };
        const id = idValue[1];
        console.log(data,id);
    };


    const handleUserDelete = (id) => {
        const url = `https://market-place-server-site.vercel.app/api/v1/user/userDelete/${id}`
        fetch(url, {
            method: 'DELETE',
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    };


    return (
                    <>
                        {allUser &&
                            
                            <section className='manage_profile_section'>
                                    <div className="manage_profile_header">
                                        <h3>Manage User Profile</h3>
                                    </div>

                                    <table className='manage_user_table'>
                                <tr>
                                    <th>Full-Name</th>
                                    <th>Email</th>
                                    <th>First-Name</th>
                                     <th>Last-Name</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            {
                            allUser?.map((user, index) => <tr
                            key={index}>
                                  <td>{`${user.firstName} ${user.lastName}`}</td>
                                  <td>{user.userEmail}</td>
                                  <td>{user.firstName}</td>
                                  <td>{user.lastName}</td>
                                  <td><div className="custom-select" >
                                    <select onChange={handleRole}>
                                    <option value={`${user.role} ${user._id}`}>{user.role}--</option>
                                    <option value={`buyer ${user._id}`}>buyer</option>
                                    <option value={`store-manager ${user._id}`}>store-manager</option>
                                    <option value={`admin ${user._id}`}>admin</option>
                                    </select>
                                </div></td>
                                  <td><div className="custom-select" >
                                    <select onChange={handleStatus}>
                                    <option value={`${user.status} ${user._id}`}>{user.status}--</option>
                                    <option value={`active ${user._id}`}>active</option>
                                    <option value={`inactive ${user._id}`}>inactive</option>
                                    <option value={`blocked ${user._id}`}>blocked</option>
                                    </select>
                        </div></td>
                                  <td><button onClick={() => handleUserDelete(user._id)}>Delete</button></td>
                            </tr>
                            )} 
                        </table>
                        </section>}
</>
    );
};

export default ManageProfile;