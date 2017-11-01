function select(element) {
    return document.querySelector(element);
}


/////////////////////zoekbalk verschijnt en verdwijnt
// Door op het vergrootglas te klikken verschijnt of verdwijnt de zoekbalk.

select("header > nav > img").addEventListener("click", function () {

    select("#zoekbalk").classList.toggle("visible");
});


//////////////////////////toevoeg knop gaat draaien
// Als een gebruiker een verhaal wil toevoegen aan zijn/haar persoonlijke lijst kan hij/zij op de toevoeg-knop (+) klikken. Als feedback dat er goed op is gedrukt gaat deze draaien en komt er uiteindelijkl een verwijder-knop (x) te staan. Er komt ook een stip bij de 'Mijn Lijst'-knop te staan die bounced/bonkt. Dit is ook als feedback om te laten zien dat er een nieuw verhaal in de persoonlijke lijst staat.

//code voor 1e article
select("main article > img:first-of-type").addEventListener("click", function () {
    select("main article > img:first-of-type").classList.toggle("dancing");
    select("main article > img:nth-of-type(2)").classList.toggle("display");
    select("header nav a:last-of-type img").classList.toggle("visible");
});

//code voor 2e article
select("main article:nth-of-type(2) > img:first-of-type").addEventListener("click", function () {
    select("main article:nth-of-type(2) > img:first-of-type").classList.toggle("dancing");
    select("main article:nth-of-type(2) > img:nth-of-type(2)").classList.toggle("display");
    select("header nav a:last-of-type img").classList.toggle("visible");
});

//code voor 3e article
select("main article:nth-of-type(3) > img:first-of-type").addEventListener("click", function () {
    select("main article:nth-of-type(3) > img:first-of-type").classList.toggle("dancing");
    select("main article:nth-of-type(3) > img:nth-of-type(2)").classList.toggle("display");
    select("header nav a:last-of-type img").classList.toggle("visible");
});

////////////////////////kruisje wordt plusje
// Als een gebruiker een verhaal weer uit zijn/haar persoonlijke lijst wil verwijderen kan dat ook. Door op de verwijder-knop (x) te klikken. Deze gaat dan draaien als feedback dat er goed op is geklikt en veranderd weer in een toevoeg-knop (+).

//code 1e article
select("main article > img:nth-of-type(2)").addEventListener("click", function () {
    select("main article > img:nth-of-type(2)").classList.toggle("move");
    select("main article > img:first-of-type").classList.toggle("see");
});

//code 2e article
select("main article:nth-of-type(2) > img:nth-of-type(2)").addEventListener("click", function () {
    select("main article:nth-of-type(2) > img:nth-of-type(2)").classList.toggle("move");
    select("main article:nth-of-type(2) > img:first-of-type").classList.toggle("see");
});

//code 3e article
select("main article:nth-of-type(3) > img:nth-of-type(2)").addEventListener("click", function () {
    select("main article:nth-of-type(3) > img:nth-of-type(2)").classList.toggle("move");
    select("main article:nth-of-type(3) > img:first-of-type").classList.toggle("see");
});




//////////////////////////filter
// Een gebruiker kan filteren op een voorkeur voor de verhalen. Als de gebruiker op een filter klikt gaat deze, als feedback dat er goed op is geklikt. 

//code 1e filter
select("label").addEventListener("click", function () {
    select("label").classList.toggle("shake");
});

//code 2e filter
select("label:nth-of-type(2)").addEventListener("click", function () {
    select("label:nth-of-type(2)").classList.toggle("shake");
});

//coder 3e filter
select("label:nth-of-type(3)").addEventListener("click", function () {
    select("label:nth-of-type(3)").classList.toggle("shake");
});

//code 4e filter
select("label:nth-of-type(4)").addEventListener("click", function () {
    select("label:nth-of-type(4)").classList.toggle("shake");
});

//code 5e filter
select("label:nth-of-type(5)").addEventListener("click", function () {
    select("label:nth-of-type(5)").classList.toggle("shake");
});

//coder 6e filter
select("label:nth-of-type(6)").addEventListener("click", function () {
    select("label:nth-of-type(6)").classList.toggle("shake");
});

//code 7e filter
select("label:nth-of-type(7)").addEventListener("click", function () {
    select("label:nth-of-type(7)").classList.toggle("shake");
});

//coder 8e filter
select("label:nth-of-type(8)").addEventListener("click", function () {
    select("label:nth-of-type(8)").classList.toggle("shake");
});


///////////////////////////////////article draaien
// Er is een mogelijkheid voor de gebruiker om hem/haar te laten verrassen. De gebruiker kan hiervoor op de 'Verras mij1'-knop klikken. Als feedback gaan de articles draaien en moet eigenlijk de pagina op willekeurig volgorde opnieuw worden gerangschikt.

//coder 1e article
select("aside>button").addEventListener("click", function () {
    select("body main article").classList.toggle("turn");
});

//code 2e article
select("aside>button").addEventListener("click", function () {
    select("body main article:nth-of-type(2)").classList.toggle("turn");
});

//code 3e article
select("aside>button").addEventListener("click", function () {
    select("body main article:nth-of-type(3)").classList.toggle("turn");
});
