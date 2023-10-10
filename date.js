date = new Date();

monthList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
            ];
month = monthList[date.getMonth()];
year = date.getFullYear();

document.getElementById('date').innerHTML = month + " " + year;