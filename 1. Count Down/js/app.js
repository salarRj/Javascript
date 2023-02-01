const endtime = "2 February 2023 08:20:00 PM"

document.getElementById("end-date").innerText = endtime;
const input = document.querySelectorAll("input");


function clock() {
    const end = new Date(endtime)
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff < 0) return;
    // Days
    input[0].value = Math.floor(diff / 3600 / 24);
    // Hours
    input[1].value = Math.floor(diff / 3600) % 24;
    // Minutes
    input[2].value = Math.floor(diff / 60) % 60;
    // Sec
    input[3].value = Math.floor(diff) % 60;
}

// initial call
clock()


setInterval(
    ()=> {
        clock()
    },
    1000
)