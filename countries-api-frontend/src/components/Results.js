import Country from "./Country"

const Results = ({countries, setCountries}) => {

    console.log(countries.length)
    if (countries.length === 0){
        return (<></>)
    }
    else if (countries.length > 10) {
        return (
            <></>
        )
    } else if ((countries.length > 1 && countries.length < 11)) {
        return (
            <div className="results">
            {countries.map((country, i) =>
                <li className="result-item"
                key={i}
                onClick={() => setCountries([country])}> 
                {country.name.common} 
                </li>
            )}
            </div>
        )
    } else {
        return (
            <Country country={countries[0]}/>
        )
    }
 
}

export default Results