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
    const base = baseBox.value
    const height = heightBox.value

    let area = calcArea(base,height)
    areaBox.innerHTML = `Area is : ${area}`
    areaBox.className = "ans-box"
    
}