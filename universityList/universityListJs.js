/** university api */

function startSearch(){
    let universityName = document.getElementById("inputValue").value;
    
    fetch("http://universities.hipolabs.com/search?name="+universityName)
    .then(response=>response.json())
    .then(universityData =>{
        console.log(universityData);
        for(var i = 0; i<200; i++){
            /** you can add "universityData.length" instead of 200 for getting array length */

            const nameOfUniversity = universityData[i].name;
            const provinceOfUniversity = universityData[i]["state-province"];
            const countryOfUniversity = universityData[i].country;
            const countryCodeOfUniversity = universityData[i].alpha_two_code;
            const websiteOfUniversity = universityData[i].web_pages[0];
    
            const card = document.createElement("div");

            const dataCard = `
                            <div class="container my-3" id="universityCard">
                                <div class="card p-2">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card-body">
                                                <h5 class="card-title" id="universityName"> <i class='fas fa-university fs-2'></i> &nbsp;&nbsp;${nameOfUniversity} </h5>
                                            </div>
                                            <ul class="list-group flush">
                                                <li class="list-group-item" id="websiteName"> Website : <a href='${websiteOfUniversity}'>${websiteOfUniversity}</a> </li>
                                                <li class="list-group-item" id="provinceName"> Province : ${provinceOfUniversity} </li>
                                                <li class="list-group-item" id="countryName"> Country : ${countryOfUniversity} (${countryCodeOfUniversity}) </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
            document.getElementById("universityList").innerHTML += dataCard;
        }
        

    })
}
