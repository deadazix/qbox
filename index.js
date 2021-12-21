document.querySelectorAll('.a').forEach(element => {
  console.log('g')
  element.addEventListener('click',function(){
    console.log('g')
    console.log(this.parentNode.children[1].classList.length)
    number = this.parentNode.children[1].classList.length
    document.querySelectorAll('p').forEach(element => {
      element.classList.remove('d')
    });
    document.querySelectorAll('ul img').forEach(element => {
      element.classList.remove('r')
    });
    document.querySelectorAll('ul a').forEach(element => {
      element.classList.remove('selected')
    });
    
    if (number == 1){
      this.parentNode.children[0].children[1].classList.add('r')
      console.log(this.parentNode.children[0].children[1])
      this.parentNode.children[1].classList.add('d')
      this.parentNode.children[0].children[0].classList.add('selected')
    }
    
    
    
  })
  
});
