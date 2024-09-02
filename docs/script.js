function Years() {
    const yearSelection = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    const startYear = 2022;

    for (let year = startYear; year <= currentYear + 6; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;

        if (year === currentYear) {
            option.selected = true;
        }

        yearSelection.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Years();
    updateURL();
});

function updateURL() {
    const year = document.getElementById("year").value;
    const areas = Array.from(document.getElementById("area").selectedOptions).map(option => option.value);
    const currency = document.getElementById("currency").value;

    areas.forEach(area => {
        const url = `https://dataportal-api.nordpoolgroup.com/api/AggregatePrices?year=${year}&market=DayAhead&deliveryArea=${area}&currency=${currency}`;
        console.log(url); 
    });
}
document.getElementById("year").addEventListener("change", updateURL);
document.getElementById("area").addEventListener("change", updateURL);
document.getElementById("currency").addEventListener("change", updateURL);
