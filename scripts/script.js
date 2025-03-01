const laptopImg = document.getElementById("brokenNitro");
const myHeading = document.querySelector("h1");
laptopImg.addEventListener("click", () => {
    //getting the attribute of src
    const lapSrc = laptopImg.getAttribute("src");
    //js uses three equal signs for checking equality
    if(lapSrc === "images/brokenNitro.webp")
    {
        //syntax = variable.setAttribute("attribute", "value");
        laptopImg.setAttribute("src","images/onePieceNitro.webp");
        laptopImg.setAttribute("width", "768px")
    }
    else
    {
        laptopImg.setAttribute("src", "images/brokenNitro.webp");
    }
});

function setUserName()
{
    let username = prompt("Set username as: ");
    //if username is null, recursively call until it's not null
    if(!username)
    {
        return setUserName();
    }
    localStorage.setItem("name", username);
    myHeading.textContent = `Why I gave up on Linux Gaming, ${localStorage.getItem("name")}`;
}
//In second run in any browser it doesn't run because the localStorage stores the name in cookies and 
//it is not null the last time you load the page
//so to check this run in private window
if(!localStorage.getItem("name"))
{
      setUserName();    
}
else
{
    myHeading.textContent = `Why I gave up on Linux Gaming, ${localStorage.getItem("name")}`;
}
const userChangeButton = document.getElementById("changeUser");
userChangeButton.addEventListener("click", () => 
{
    setUserName();
});