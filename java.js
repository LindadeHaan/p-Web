function select(element) {
    return document.querySelector(element);
}


/////////////////////zoekbalk verschijnt en verdwijnt
select("header > nav > img").addEventListener("click", function () {

    select("#zoekbalk").classList.toggle("visible");
});


//////////////////////////toevoeg knop gaat draaien
select("main article > img:first-of-type").addEventListener("click", function () {
    select("main article > img:first-of-type").classList.toggle("dancing");
    select("main article > img:nth-of-type(2)").classList.toggle("display");
    select("header nav a:last-of-type img").classList.toggle("visible");
});


select("main article:nth-of-type(2) > img:first-of-type").addEventListener("click", function () {
    select("main article:nth-of-type(2) > img:first-of-type").classList.toggle("dancing");
    select("main article:nth-of-type(2) > img:nth-of-type(2)").classList.toggle("display");
    select("header nav a:last-of-type img").classList.toggle("visible");
});

select("main article:nth-of-type(3) > img:first-of-type").addEventListener("click", function () {
    select("main article:nth-of-type(3) > img:first-of-type").classList.toggle("dancing");
    select("main article:nth-of-type(3) > img:nth-of-type(2)").classList.toggle("display");
    select("header nav a:last-of-type img").classList.toggle("visible");
});

////////////////////////kruisje wordt plusje
select("main article > img:nth-of-type(2)").addEventListener("click", function () {
    select("main article > img:nth-of-type(2)").classList.toggle("move");
    select("main article > img:first-of-type").classList.toggle("see");
});

select("main article:nth-of-type(2) > img:nth-of-type(2)").addEventListener("click", function () {
    select("main article:nth-of-type(2) > img:nth-of-type(2)").classList.toggle("move");
    select("main article:nth-of-type(2) > img:first-of-type").classList.toggle("see");
});

select("main article:nth-of-type(3) > img:nth-of-type(2)").addEventListener("click", function () {
    select("main article:nth-of-type(3) > img:nth-of-type(2)").classList.toggle("move");
    select("main article:nth-of-type(3) > img:first-of-type").classList.toggle("see");
});




//////////////////////////filter
select("label").addEventListener("click", function () {
    select("label").classList.toggle("shake");
});

select("label:nth-of-type(2)").addEventListener("click", function () {
    select("label:nth-of-type(2)").classList.toggle("shake");
});

select("label:nth-of-type(3)").addEventListener("click", function () {
    select("label:nth-of-type(3)").classList.toggle("shake");
});

select("label:nth-of-type(4)").addEventListener("click", function () {
    select("label:nth-of-type(4)").classList.toggle("shake");
});

select("label:nth-of-type(5)").addEventListener("click", function () {
    select("label:nth-of-type(5)").classList.toggle("shake");
});

select("label:nth-of-type(6)").addEventListener("click", function () {
    select("label:nth-of-type(6)").classList.toggle("shake");
});

select("label:nth-of-type(7)").addEventListener("click", function () {
    select("label:nth-of-type(7)").classList.toggle("shake");
});

select("label:nth-of-type(8)").addEventListener("click", function () {
    select("label:nth-of-type(8)").classList.toggle("shake");
});


///////////////////////////////////article draaien

select("aside>button").addEventListener("click", function () {
    select("body main article").classList.toggle("turn");
});

select("aside>button").addEventListener("click", function () {
    select("body main article:nth-of-type(2)").classList.toggle("turn");
});

select("aside>button").addEventListener("click", function () {
    select("body main article:nth-of-type(3)").classList.toggle("turn");
});
