
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]





//Questo codice è una funzione che cerca lavori in base al titolo e alla posizione. La funzione prende due argomenti, travail e resident

function searchJobs(travail, resident) {  
 let titleLow = travail.toLowerCase();  //La funzione converte i valori di travail e resident in minuscolo e li memorizza in titleLow e locationLow
  let locationLow = resident.toLowerCase();

  let search = [];
  for (let i = 0; i < jobs.length; i++) { //Se un lavoro corrisponde ai valori di ricerca, l’indice del lavoro viene aggiunto all’array search
    if (jobs[i].title.toLowerCase().includes(titleLow) && jobs[i].location.toLowerCase().includes(locationLow)) { 
      search.push(i); //Quindi, la funzione cerca tutti i lavori che corrispondono ai valori di titleLow e locationLow nell’array jobs

    }
  }
  let result = [];
  for (let j = 0; j < search.length; j++) {
    delete jobs[search[j]].company_profile; //Gli oggetti di lavoro restituiti non contengono le proprietà “company_profile”, “description” e “benefits”.
    delete jobs[search[j]].description;
    delete jobs[search[j]].benefits;


    result.push(jobs[search[j]])

  }

  return result;
}
let result = (searchJobs("", ""));
console.log("il numero di annunci é :" + result.length);/*  La prima parte crea un array di oggetti di lavoro che corrispondono ai valori di ricerca vuoti utilizzando la funzione searchJobs. Quindi, la funzione console.log viene utilizzata per 
                                                             stampare il numero di annunci trovati e l’array di oggetti di lavoro corrispondenti. */
console.log(result);

function displayResults() {// codice definisce una funzione chiamata displayResults
  let inputLav = document.querySelector("#lav").value; 
  let inputLoc = document.querySelector("#loc").value; //Questa funzione viene chiamata quando l’utente fa clic sul pulsante “Cerca”. 
                                                          //La funzione recupera i valori dei campi di input “lav” e “loc” e li memorizza in inputLav e inputLoc
  let ul = document.querySelector("ul")
  let res = searchJobs(inputLav, inputLoc);
  console.log(res);                         //Quindi, la funzione chiama la funzione searchJobs con i valori di input e memorizza il risultato in res

  for (let i = 0; i < res.length; i++) { //La funzione utilizza un ciclo for per iterare attraverso l’array di oggetti di lavoro restituito e aggiunge ogni lavoro come un elemento della lista non ordinata HTML.
    let work = res[i];
    ul.innerHTML += `<li> ${work.title} @ ${work.location} </li>` 
  }

}
let btn = document.getElementById("btn"); //codice definisce due gestori eventi. Il primo gestore eventi viene definito per il pulsante “Cerca”. 
                                          
let form = document.getElementById("reset");
btn.addEventListener("click", displayResults); //Quando l’utente fa clic sul pulsante “Cerca”, il gestore eventi chiama la funzione displayResults


form.addEventListener("click", function () { //gestore eventi viene definito per il pulsante “Reset”
  let remove = document.getElementsByTagName("li");
  document.getElementById("lav").value = "";    //Quindi, il gestore eventi imposta i valori dei campi di input “lav” e “loc” su una stringa vuota
      document.getElementById("loc").value = "";
  
  for (let i = remove.length; i > 0; i--) { //Quando l’utente fa clic sul pulsante “Reset”, il gestore eventi recupera tutti gli elementi della lista non ordinata HTML e li memorizza in remove
    remove[i - 1].remove();
    console.log(remove.length);  //il gestore eventi utilizza un ciclo for per rimuovere ogni elemento della lista non ordinata HTML
  }
  return remove;

})


