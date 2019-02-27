import React from 'react';

const FormComponent = (props) => {



    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }

    const days = range(1, 31);

    let date = new Date();
    let currentYear = parseInt(date.getFullYear());
    const years = range(1950, currentYear);


    const monthOptions = months.map((month, index) => {
        return <option key={index} value={index}>{month}</option>
    });

    const dayOptions = days.map((day, index) => {
        return <option key={index} value={day}>{day}</option>
    });

    const yearOptions = years.map((year, index) => {
        return <option key={index} value={year}>{year}</option>
    });


    function handleSubmit(event) {
        event.preventDefault();
        const birthday = {
            "month": parseInt(event.target.month.value) + 1,
            "day": parseInt(event.target.day.value),
            "year": parseInt(event.target.year.value)

        };
        props.handleBirthdaySubmit(birthday)
    }


    return(
        <div>
            <h1>Select your birthday to find out which Star Wars Movie Character you are!</h1>
            <form onSubmit={handleSubmit}>
                <select name={"day"}>{dayOptions}</select>
                <select name={"month"}>{monthOptions}</select>
                <select name={"year"}>{yearOptions}</select>
                <br/>
                <br/>
                <button type={"submit"}>Are you light side or dark side?!</button>
            </form>
        </div>
    )

};

export default FormComponent