

// Number of times olympics hosted per City over the years - Pie chart

export const noOfTimesHostedCity = (events) => {
    let result = events.reduce((result, event) => {
        if (result.hasOwnProperty(event['City'])) {
            if (!result[event['City']].includes(event['Games'])) {
                result[event['City']].push(event['Games']);
            }
        }
        else {
            result[event['City']] = [];
            result[event['City']].push(event['Games']);
        }
        return result;
    }, {});
    for (let event in result) {
        result[event] = result[event].length;
    }
    return result;
}

// Top 10 countries who have won most medals after 2000 - stacked column - split gold/silver/bronze

export const medalWonPerCountry = (events) => {

}
//M/F participation by decade - column chart

//Per year average age of athletes who participated in Boxing Men’s Heavyweight - Line

//Find out all medal winners from India per season - Table