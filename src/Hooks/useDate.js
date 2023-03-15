

const useDate = () => {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const dateA = new Date()
    let nextFourDay = new Date(dateA);
    nextFourDay.setDate(dateA.getDate() + 4)


    let nextSevenDay = new Date(dateA);
    nextSevenDay.setDate(dateA.getDate() + 7)

    const dayFour = nextFourDay.getDate();
    const daySeven = nextSevenDay.getDate();
    const dayFourMonth = monthNames[nextFourDay.getMonth()];
    const daySevenMonth = monthNames[nextSevenDay.getMonth()];

    return { dayFour, daySeven, dayFourMonth, daySevenMonth }
};

export default useDate; 