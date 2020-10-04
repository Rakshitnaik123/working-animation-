const text = document.querySelector(".fancy ");
const strtext = text.textContent;
const splittext = strtext.split("");
text.textContent = "";
for(let i=0;i < splittext.length;i++)
{
    text.innerHTML += "<span>"+ splittext[i] + "</span>";
}
let char = 0;
let timer = setInterval(ontick,50);
function ontick()
{
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splittext.length)
    {
        completetask();
        return;
    }
}
function completetask()
{
    clearInterval(timer);
    timer=null;
}