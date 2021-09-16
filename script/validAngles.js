firstAngleBox = document.getElementById("first-angle")
secondAngleBox = document.getElementById("second-angle")
thirdAngleBox = document.getElementById("third-angle")
angleBox = document.getElementById("angle")

const isValid = (first,second,third) => {

    console.log(first,second,third)
    
    if(parseInt(first) + parseInt(second) + parseInt(third) === 180){
        
        return true
    }
    return false
}

const checkValid = () => {
    angleBox.innerHTML = ""
    angleBox.className = ""
    const first = firstAngleBox.value
    const second = secondAngleBox.value
    const third = thirdAngleBox.value

    if(!first || !second || !third) {
        angleBox.innerHTML = `Please enter the angles`
        angleBox.className += "incorrect error "
        angleBox.className += "ans-box"
        return 
    }
    
    let valid = isValid(first,second,third)
    console.log(valid)
    if(valid){
        angleBox.innerHTML = `These angles can form triangle`
        angleBox.className += "correct "
        
    }else {
        angleBox.innerHTML = `These angles cannot form triangle`
        angleBox.className += "incorrect error "
        
    }
    angleBox.className += "ans-box"  
    
}