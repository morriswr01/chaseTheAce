function helloWorld(isGay) {
    console.log("Hello World")

    const isMikeGay = isGay
    let howGay = very()
    console.log("Mike is "+howGay+" gay")

    if(isMikeGay){
        console.log("Mike is gay")
    }
    else {
        console.log("Mike is not gay")
    }
}

function very(){
    return "VERY"
}

helloWorld(true)