

function findValue(name){
    const friends = ['sifat','adnan','rohim','biplop']
    const value= name ;
    
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if(element == value){
            return console.log(i);
           
         }
 
    }
   
}
findValue('s');