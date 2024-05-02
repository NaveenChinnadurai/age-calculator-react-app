import React, { useState } from 'react'
import './../styles/calender.css'
function AgeCalculator(props) {

    const dateInput = props.date;

    const birthDate = dateInput.getDate();
    const birthMonth = dateInput.getMonth();
    const birthYear = dateInput.getFullYear();


    const age = calculateAge(birthDate, birthMonth, birthYear)


    return (
        <div className="txt-div">
            <p className="title">Your Age : ) </p>
            <div className="age-text">
                <p>{age.years} Years</p>
                <p>{age.months} Month</p>
                <p>{age.days} Days</p>
            </div>
        </div>
    )
}

function calculateAge(date, month, year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - date;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        const prevMonthDate = new Date(currentYear, currentMonth - 1, 0);
        ageDays += prevMonthDate.getDate();
        ageMonths--;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
}
export default AgeCalculator