function select(element) {
    return document.querySelector(element);
}


//zoekbalk verschijnt en verdwijnt
select("header > nav > img").addEventListener("click", function()
{
    
    select("#zoekbalk").classList.toggle("visible");
});


//toevoeg knop gaat draaien
select("main article > img:first-of-type").addEventListener("click", function()
{
    select("main article > img:first-of-type").classList.toggle("dancing");
});