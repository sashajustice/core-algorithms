function fibonacci(num) {
  if(num === 0) {
    return 0 
  } else if (num === 1) {
    return 1
  } else {
   num = fibonacci(num - 1) + fibonacci(num - 2)  
  }
  return num
}

export default fibonacci