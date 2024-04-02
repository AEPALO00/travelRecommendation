document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn_search").addEventListener("click", async () => {
        let results,
            data;
        const in_search  = document.getElementById("in_search").value.toLowerCase().trim();
        let   div_search = document.getElementById("div_search");
        
        if(in_search === ""){
            alert("Please, type a word/phrase to show results.")
        } else{
            await fetch("../travel_recommendation.json")
            .then(response => response.json())
            .then((fetch_data) => {
                console.log(fetch_data)

                data = fetch_data;
            })
            
            if((in_search.includes("beach"))){
                results = data.beaches;
            } else if (in_search.includes("countr")){
                results = data.countries;
            } else if(in_search.includes("temple")) {
                results = data.temples;
            }

            results.forEach((destination) => {
                let div_dest = document.createElement("div");
                let dest_name = destination.name.split(",")[0].split(" ")[0].toLowerCase();
                div_dest.setAttribute("id", dest_name)

                let img = document.createElement("div");
                img.setAttribute("src", "../imgs/")
            });
        }
    });

    document.getElementById("btn_clear").addEventListener("click", () => {
        document.getElementById("in_search").value = null;
    });
})
