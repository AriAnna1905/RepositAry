function getPastEvent() {
    return new Promise((resolve) => {
   setTimeout(() => {
     const events = [
   { year: 1990, name: "World Wide Web Invented" },
   { year: 2001, name: "Wikipedia Launched" },
   { year: 1969, name: "Moon Landing" },
   { year: 2020, name: "Global Pandemic" },
   { year: 1989, name: "Fall of Berlin Wall" }
     ];
     const randomIndex = Math.floor(Math.random() * events.length);
     resolve(events[randomIndex]);
   }, Math.random() * 1000);
    });
   }

// FUNZIONE ASINCRONA 
const array = [];

async function travelThroughHistory(n = 10) {
  try {
    const request = [];
    for(let i=0; i<n; i++) {
      request.push(getPastEvent());                   
    }                                                  
  const result = await Promise.all(request);

  console.log(result);

  array = result.sort((a, b) => a.year - b.year).filter((events, i, array) => i === array.findIndex(event => event.name === events.name)).filter(events => events.year < 2000);
  console.log(array);
  
  return result;

  }catch(e){
    console.log('Errore: ' + e.message)
 
  };

}


travelThroughHistory();