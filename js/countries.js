const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> displayCountries(data))
}

const displayCountries=countries=>{
    console.log(countries[0])
    const allCountriesHtml=countries.map(country=>getCountries(country));
    console.log(allCountriesHtml[0])
    const containerDiv=document.getElementById('countries');
    containerDiv.innerHTML=allCountriesHtml.join(' ')
}
 const getCountries=country=>{
    const {name,flags,area,region}=country
    return  `
    <div class="country"> 
    <h2>${name.common}</h2>
    <p>Area:${area} </p>
    <p> Region : ${region} </p>
    <img src="${flags.png}" alt="">
    
    </div>

    `;
 }

loadCountries();