firstAngleBox = document.getElementById("first-angle")
secondAngleBox = document.getElementById("second-angle")
thirdAngleBox = document.getElementById("third-angle")
angleBox = document.getElementById("angle")

const isValid = (first,second,third) => {
    
    if(parseInt(first) + parseInt(second) + parseInt(third) === 180){
        
        return true
    }
    return false
}

const checkValid = () => {
    angleBox.innerHTML = ""
    const first = firstAngleBox.value
    const second = secondAngleBox.value
    const third = thirdAngleBox.value
    
    let valid = isValid(first,second,third)
    console.log(valid)
    if(valid){
        angleBox.innerHTML = `These angles can form triangle`
        
    }else {
        angleBox.innerHTML = `These angles cannot form triangle`
        
    }
    angleBox.className = "ans-box"  
    
}