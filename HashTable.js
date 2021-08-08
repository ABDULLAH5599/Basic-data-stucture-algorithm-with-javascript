// hashTable or HashMap 
// dictorary 

class Dictionary{
    constructor(){
        this.dictionary={}
    }
    addItem(key,value){
        this.dictionary[key]=value;
    }
    getItem(key){
      return this.dictionary[key];
    }
}
const Contacts= new Dictionary();
Contacts.addItem("sifat","0121453580");
Contacts.addItem("adnan","012433454");
Contacts.addItem("habib","999999999");
Contacts.addItem("rufsan","888888888");
console.log(Contacts.dictionary);
const getContact= Contacts.getItem("rufsan")
console.log(getContact);
