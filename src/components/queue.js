export default class GetBarcodeQueue{

  constructor(){
    this.queue = [];
    this.hash = {};
    this.head = 0;
  }

  enqueue=(gTin)=>{
    if(!this.hash.hasOwnProperty(gTin)){
      this.queue.push(gTin);
      this.hash[gTin] = true;
    }
  }

  dequeue=()=>{
    if(this.head === this.queue.length){
      return false;
    }
    this.head++;
    return this.queue[this.head-1];
  }

}
