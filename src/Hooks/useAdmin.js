import React from 'react';
import useAuth from './../Context/useAuth';

const useAdmin = () => {
    const [admin, setAdmin] = React.useState({});
    const [adminIsLoading, setAdminIsLoading] = React.useState(true);
    const { firebase } = useAuth();
    const { user } = firebase;
    React.useEffect(() => {
        console.log(user);
        const email = user?.email;
        console.log(email);
        const url = `https://market-place-server-site.vercel.app/api/v1/user/admin/${email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAdmin(data.data);
                setAdminIsLoading(false);
            });
    }, [user]);

    return { admin, adminIsLoading };
};

export default useAdmin;