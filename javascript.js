function getMeAvatar(){
    let myName = document.getElementById("inputName").value;

    if(myName == "") {
        alert("Please enter your name...");
    } else {
        /** genderize api */
        fetch("https://api.genderize.io?name="+myName)
        .then(response=>response.json())
        .then(genderData =>{
            const genderTemp = genderData["gender"];

            // document.getElementById("myAvatar").src = "https://joeschmoe.io/api/v1/"+genderTemp+"/"+myName;

            /** nationalize api */
            fetch("https://api.nationalize.io?name="+myName)
            .then(response=>response.json())
            .then(nationalityData =>{
                const nationalityTemp = nationalityData["country"][0].country_id;


                /** agify api */
                fetch("https://api.agify.io/?name="+myName)
                .then(response=>response.json())
                .then(ageData =>{
                    const ageTemp =  ageData["age"];


                    const card = document.createElement("div");

                    const profileCard = `
                                        <div class="border border-success rounded-2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <h3 class="badge bg-success m-3"> My Profile</h3>
                                                    <br>
                                                    <div class="m-3">
                                                        <h6 id="setMyName">Name : ${myName}</h6>
                                                        <h6 id="setMyGender">Gender : ${genderTemp}</h6>
                                                        <h6 id="setMyNationality">Nationality : ${nationalityTemp}</h6>
                                                        <h6 id="setMyAge">Age : ${ageTemp}</h6>
                                        
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <img src="https://joeschmoe.io/api/v1/${genderTemp}/${myName}" alt="${myName}"
                                                        height="150px" width="150px" class="rounded mx-auto d-block m-3" id="myAvatar">
                                                </div>
                                            </div>
                                        </div>
                                        `
                    document.getElementById("profileCards").innerHTML = profileCard;


                    
                })
            })
        })
        
    }  
}




