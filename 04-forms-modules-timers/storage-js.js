function random(){
    return Math.random()
}

function save(input){
    localStorage.setItem(random(), input)
}

export {save}
