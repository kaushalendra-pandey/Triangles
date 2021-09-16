baseBox = document.getElementById("base")
heightBox = document.getElementById("height")
hypotenuseBox = document.getElementById("hypotenuse")

const calcHypotenuse = (base,height) => {
    curSum = base*base + height*height
    ans = Math.sqrt(curSum)
    return Math.trunc(ans)
}

const getHypotenuse = () => {
    hypotenuseBox.innerHTML = ""
    const base = baseBox.value
    const height = heightBox.value

    if(!base || !height) {
        hypotenuseBox.innerHTML = `Please enter the details`
        hypotenuseBox.className = "ans-box"
        return
    }

    let hypotenuse = calcHypotenuse(base,height)
    hypotenuseBox.innerHTML = `Hypotenuse is : ${hypotenuse}`
    hypotenuseBox.className = "ans-box"
    
}