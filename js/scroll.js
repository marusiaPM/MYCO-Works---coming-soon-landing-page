function scrollDown() {
   let pageHeight = window.innerHeight;

   window.scrollTo({
      top: pageHeight, 
      left: 0, 
      behavior: 'smooth'
   });
}

// const scrollFullPage = () => {
   
//    const wrapper = document.querySelector('.wrapper');
//    const sections = document.querySelectorAll('.section');
//    const countSections = sections.length; //how many sections
//    let counter = 1;


//    // next section 
//    function nextSection() { 
//       if (counter <= countSections -1) {
//          const move = -counter *100;
//          wrapper.style.transform = 'translateY(' + (move) + 'vh)';
//          counter ++;
//       }
//    } 


//    // previous section 
//    function prevSection() { 
//       if (counter > 1) {
//          const moveIndex = counter - 2;
//          const move = -moveIndex *100;
//          wrapper.style.transform = 'translateY(' + (move) + 'vh)';
//          counter --;
//       }
//    } 


//    // mouse wheel events 
//    var timer = null;
//    window.addEventListener('wheel', function(event){

//       if (event.deltaY < 0)
//       {
//          if(timer !== null) {
//             clearTimeout(timer);        
//          }
//          timer = setTimeout(function() {
//             prevSection();
//          }, 150);
//       }

//       else if (event.deltaY > 0)
//       {  
//          if(timer !== null) {
//             clearTimeout(timer);        
//          }
//          timer = setTimeout(function() {
//             nextSection();
//          }, 150);
//       }

//    });

   
//    //keyboard events
//    window.addEventListener('keydown', function(e){
//       if (e.keyCode == '40')
//       {
//          nextSection();
//       }
//       else if (e.keyCode == '38')
//       {
//          prevSection();
//       }
//    });

// }

// scrollFullPage();




