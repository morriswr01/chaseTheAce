function helloWorld(isGay) {
    console.log("Hello World")

    const isMikeGay = isGay

    if(isMikeGay){
        console.log("Mike is gay")
    }
    else {
        console.log("Mike is not gay")
    }
}

helloWorld(true)