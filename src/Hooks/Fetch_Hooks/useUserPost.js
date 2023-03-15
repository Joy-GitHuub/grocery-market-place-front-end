const useUserPost = () => {
    const createUser = (userInfo) => {
        // {name, email, password,firstName, lastName, confirmPassword}
        console.log(userInfo);
        const user = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            userEmail: userInfo.email,
            password: userInfo.password,
            confirmPassword: userInfo.confirmPassword,
        }
        const url = `https://market-place-server-site.vercel.app/api/v1/user`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user),
        }).then((res) => res.json())
            .then((data) => {
                if (data) {
                    const id = data.data._id;
                    sessionStorage.setItem('JWT_ID', JSON.stringify(id));
                }
            })
    }

    return { createUser };
};

export default useUserPost;