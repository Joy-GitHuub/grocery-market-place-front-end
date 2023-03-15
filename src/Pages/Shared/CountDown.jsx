import React, { useEffect, useState } from 'react';
import '../../Style/CountDown.css'

const CountDown = () => {
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);
    
    let interval

    const countDown = () => {
            const countDate = new Date("Jan 04, 2024 12:00:00").getTime()

            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const textDay = Math.floor(gap / day);
            const textHour = Math.floor((gap % day) / hour);
            const textMinute = Math.floor((gap % hour) / minute);
            const textSecond = Math.floor((gap % minute) / second);

            if (textDay< 10 || textHour < 10|| textMinute < 10|| textSecond< 10) {
                // setTimerDays(`0${textDay}`);
                // setTimerHours(`0${textHour}`);
                // setTimerMinutes(`0${textMinute}`);
                // setTimerSeconds(`0${textSecond}`);
            }

            if (gap < 0) {
                clearInterval(interval);
              }else{
                setTimerDays(textDay)
                setTimerHours(textHour)
                setTimerMinutes(textMinute)
                setTimerSeconds(textSecond)
              }

    };

     interval = setInterval(() => {
        countDown();
    }, 1000);

    useEffect(() => {
        countDown();
    } , [])


    return (
        <div className='count_down_container'>
            <div className='left-side'>
                <h1 className='color'>Special Offers <span>of the week!</span></h1>
                <h4>Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
            </h4>
            </div>
            <div className="right-side">
                <div className='count-items'>
                    <div className="count-item days">
                        {
                        timerDays < 10 ? `0${timerDays}`: `${timerDays}`
                        }
                    </div>
                    <span>:</span>
                    <div className="count-item hours">
                    {
                        timerHours < 10 ? `0${timerHours}`: `${timerHours}`
                        }
                    </div>
                    <span>:</span>
                    <div className="count-item minutes">
                    {
                        timerMinutes < 10 ? `0${timerMinutes}`: `${timerMinutes}`
                        }
                    </div>
                    <span>:</span>
                    <div className="count-item second">
                    {
                        timerSeconds < 10 ? `0${timerSeconds}`: `${timerSeconds}`
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;