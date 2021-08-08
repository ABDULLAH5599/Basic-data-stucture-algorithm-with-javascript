// Queue data stucture 
// fast in fast out = fifo
class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(item){
       this.queue.push(item)
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift()
        }
    }
}

const queueNumber = new Queue();
queueNumber.enqueue(1);
queueNumber.enqueue(2);
queueNumber.enqueue(3);
queueNumber.enqueue(4);
queueNumber.enqueue(5);
queueNumber.enqueue(6);
queueNumber.enqueue(7);
console.log(queueNumber.queue);
const RemoveNumber = queueNumber.dequeue()
console.log(RemoveNumber);
console.log(queueNumber.queue);