document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn_search").addEventListener("click", async () => {
        let results = [],
            data;
        const in_search  = document.getElementById("in_search").value.toLowerCase().trim();
        let   div_search = document.getElementById("div_search");
        div_search.innerHTML = null;
        
        if(in_search === ""){
            alert("Please, type a word/phrase to show results.")
        } else{
            await fetch("../travel_recommendation.json")
            .then(response => response.json())
            .then((fetch_data) => {
                data = fetch_data;
            })
            
            if((in_search.includes("beach"))){
                results = data.beaches;
            } else if (in_search.includes("countr")){
                const aux = data.countries;
                aux.forEach((country) => {
                    country["cities"].forEach((cities) => {
                        console.log(cities)
                        results.push(cities)
                    })
                })
            } else if(in_search.includes("temple")) {
                results = data.temples;
            }
            
            console.log(results);
            results.forEach((destination) => {
                let div_dest  = document.createElement("div");
                let dest_name = destination.name.split(",")[0].split(" ")[0].toLowerCase();
                let div2      = document.createElement("div");
                let div3      = document.createElement("div");
                let img       = document.createElement("img");
                let h3        = document.createElement("h3");
                let p         = document.createElement("p");
                
                // id of div
                div_dest.setAttribute("id", dest_name);
                div_dest.style.marginBottom = "15px"
                div_dest.style.width = "90%";
                div_dest.style.textAlign = "center";
                div3.style.backgroundColor = "white";
                div3.style.borderRadius = "7px";
                div3.style.padding = "7px";
                div3.style.verticalAlign = "middle";
                
                // image
                img.setAttribute("src", destination["imageUrl"]);
                img.setAttribute("height", "175");
                
                // destination name
                h3.innerHTML = destination["name"];

                // description
                p.innerHTML = destination["description"];
                p.style.margin = "0";

                div2.appendChild(img);
                div3.appendChild(h3);
                div3.appendChild(p);
                div_dest.appendChild(div2);
                div_dest.appendChild(div3);
                div_search.appendChild(div_dest);
            });

            // clear search input
            document.getElementById("in_search").value = null;
        }
    });

    document.getElementById("btn_clear").addEventListener("click", () => {
        div_search.innerHTML = null;
    });
})
