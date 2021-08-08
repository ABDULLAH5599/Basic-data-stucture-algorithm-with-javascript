// stact data stucture in javascript 
// this is lifo its means last in fast out .... 

class Stact{
     constructor(){
         this.stact=[]
     }
     addItem(item){
        this.stact.push(item)
     }
     removeItem(){
         if(this.stact.length){
             return this.stact.pop()
         }
     }
}

const StactNumber = new Stact();
StactNumber.addItem("sifat");
StactNumber.addItem("adnan");
StactNumber.addItem("liza");
StactNumber.addItem("habib");
StactNumber.addItem("rohim");
StactNumber.addItem("RUFSAN");
StactNumber.addItem("LOTA");
console.log(StactNumber.stact);
const RemoveNumber = StactNumber.removeItem()
console.log(RemoveNumber);
console.log(StactNumber.stact);