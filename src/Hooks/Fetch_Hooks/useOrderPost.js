const useOrderPost = () => {

    const handleOrderPost = (userOrder) => {
        const url = `https://market-place-server-site.vercel.app/api/v1/order`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then((res) => res.json())
            .then((data) => {
            })
    };

    return { handleOrderPost }

};

export default useOrderPost;