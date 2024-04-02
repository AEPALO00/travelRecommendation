document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn_search").addEventListener("click", () => {
        const in_search = document.getElementById("in_search").value;
        
        fetch("../travel_recommendation.json")
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
    });

    document.getElementById("btn_clear").addEventListener("click", () => {
        document.getElementById("in_search").value = null;
    });
})
