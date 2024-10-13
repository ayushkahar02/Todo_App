let todo = [];
let req = prompt("Enter the request you want");

while(true){
    if(req == "quit"){
        console.log("quitting the app");
        break;
    }

    if(req == "add"){
        let task = prompt("enter task you want to add");
        todo.push(task);
        console.log("task add");
    }
    else if(req == "list"){
        console.log("-----------------")
        for(let i=0; i<todo.length; i++){
            console.log(i , todo[i]);
        }
        console.log("-----------------")
    }else if(req == "delete"){
        let idx = prompt("enter task idx you want to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    }else{
        console.log("invalid request");
    }
    req = prompt("Enter the request you want");
}

