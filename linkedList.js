// linked list 
// singly linked list 
// doubly linked list 
// circular linled list 

class Node{
    constructor(value){
        this.value=value;
        this.next= null;
    }
}
class LinkedList{
    constructor(head){
        this.head=head;
    }
    add(value){
      const newNode= new Node(value);
     // this.head.next=newNode
     let current = this.head;
     while(current.next !=null){
         current=current.next;
     }
     current.next= newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.value === value){
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}
const head = new Node(1000);
const linkedList= new LinkedList(head)
linkedList.add(50);
linkedList.add(20);
linkedList.add(40);
linkedList.add(70);

linkedList.remove(20);

console.log(JSON.stringify(linkedList));