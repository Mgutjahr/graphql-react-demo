export default function chunk(arr, size){
  let chunked = [];
  for(let ele of arr){
    let last = chunked[chunked.length - 1]
    if(!last || last.length === size){
      chunked.push([ele])
    }else{
      last.push(ele)
    }
  }
  return chunked
}