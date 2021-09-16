baseBox = document.getElementById("base")
heightBox = document.getElementById("height")
areaBox = document.getElementById("area")

const calcArea = (base,height) => {
    twiceArea = base*height
    area = twiceArea/2
    return area
}

const getArea = () => {
    areaBox.innerHTML = ""
    areaBox.className = ""
    const base = baseBox.value
    const height = heightBox.value

    if(!base || !height) {
        areaBox.innerHTML = `Please enter the details`
        areaBox.className = "ans-box"
        return
    }

    let area = calcArea(base,height)
    areaBox.innerHTML = `Area is : ${area}`
    areaBox.className = "ans-box"
    
}