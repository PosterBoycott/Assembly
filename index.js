

function blockClick2(x){
    let y = document.getElementById("invisible").innerText
    if (y == "invisible"){
        document.getElementById("invisible").innerText = x
        return
    }
    if (x=="invisible"){
        document.getElementById("invisible").innerText = x
        return
    }
    let z = document.getElementById(y.trim()).id
    let zoo = z.split(" ")
    let foo = ""
    for (let i in zoo){
        if(zoo[i]=="active"){
            continue
        }
        foo+=` ${zoo[i]}`
    }
    document.getElementById(y.trim()).classList.remove("active")
    document.getElementById(y.trim()).id = foo
    document.getElementById("invisible").innerText = x
}

function blockClick(item){
    console.log(item)
    let x = item.split(" ")
    let y = false
    let z =""
    for (let i in x){
        if(x[i]=="active"){
            y = true
            continue
        }
        z+=x[i]
    }

    if(y){
        
        document.getElementById(item).classList.remove('active')
        document.getElementById(item).id = z.trim()
        blockClick2("invisible")
        

    }else{
        document.getElementById(item).classList.add('active')
        document.getElementById(item).id = z.trim()+ " active"
        blockClick2(z.trim()+ " active")
    }
    
}

function alles(item){
    blockClick(item)
}





//move piece selected to sqaure selected
//if cant move select new sqaure


