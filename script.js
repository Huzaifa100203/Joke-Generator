const fetchjokebutton = document.getElementById("fetch-joke")
const joke = document.querySelector(".joke")
const categorySelect = document.querySelector("#category")

// console.log(category)

async function getjoke() {
    const category = categorySelect.value
    
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=twopart`)
        const jokeData = await response.json()
        // joke.style.backgroundColor = "red"
        joke.innerHTML = `
        <p><strong>${jokeData.setup}</strong></p>
        <p>${jokeData.delivery}</p>
        `
        // alert("fetch")
        // console.log(jokeData.setup)
    } catch (error) {
        joke.textContent = "Couldn't fetch the joke"
        console.log(error)
    }
    // console.log(jokeData.setup)
    // console.log(jokeData.delivery)
}
fetchjokebutton.addEventListener("click", getjoke)
// fetchjokebutton.addEventListener("click", ()=>{

// })
getjoke()