let mini = document.querySelector('.mini-chat');
let container = document.querySelector('.container');
let close = document.querySelector('.container .top-inner .fa-times-circle');
let input = document.querySelector('.send');
let error = document.querySelector('.error');
let errorClose = document.querySelector('.fa-times');
let adder = document.querySelector('.fa-sign-in');
let remove = document.querySelector('.fa-trash');
let divs = document.querySelectorAll('.upper-chat>div');
let content = document.querySelector('.upper-chat');
let choosen = document.querySelectorAll('.choosen');
let specCount = 0;

function autoScrool(){
    content.scrollTop = content.scrollHeight;
}
// alert(input.getAttribute('value'));

mini.addEventListener('click', function(){
    container.style.display = 'block';
    mini.style.display = 'none';
})

close.addEventListener('click', function(){
    container.style.display = 'none';
    mini.style.display = 'block';
})
// enter keycode begion
document.addEventListener("keydown",function(e)
{
    if(e.keyCode == 13){
        let newMessage = input.value;
        let content = document.querySelector('.upper-chat');
        
    
        input.value = "";
        addComment();
    
        function addComment(){
            if(!isNaN(Number(newMessage[0]))){
                error.style.display = 'block';
                errorClose.addEventListener('click', function(){
                    error.style.display = 'none';
                })
            }else if(newMessage[0] == newMessage[0].toUpperCase()){
              
                let div = document.createElement('div');
                let img = document.createElement('img');
                let p = document.createElement('p');
                let count=1;
                
   
                div.classList.add('left-comment');
                img.classList.add('girlImage');
                img.src = "image/call.jpg";
                p.classList.add('text');
                p.innerText = newMessage;
   
                
                content.appendChild(div);
                div.appendChild(img);
                div.appendChild(p);
   
               //  secmek
               div.addEventListener("click",function(){
                   count++;
                   if(count%2 == 0)
                   {
                       this.classList.add('choosen');
                       specCount++;
                       // remove.style.display == "block";
                       
                   }
                   else{
                       this.classList.remove('choosen');
                       specCount--;
                   }
                   if(specCount > 0)
                   {
                       remove.style.display = "block";
                   }
                   else if(specCount == 0)
                   {
                       remove.style.display = "none";
                   }
                 })
               // secmek end
               
           }
           else if(newMessage[0] == newMessage[0].toLowerCase()) {
                let div = document.createElement('div');
                let img = document.createElement('img');
                let p = document.createElement('p');
                let count =1;
               
                
                div.classList.add('right-comment');
                img.classList.add('ruffImage');
                img.src = "image/ruff.jpg";
                p.classList.add('text');
                p.innerText = newMessage;
   
                
                content.appendChild(div);
                div.appendChild(img);
                div.appendChild(p);
   
                 //  secmek
                 div.addEventListener("click",function(){
                   count++;
                   if(count%2 == 0)
                   {
                       this.classList.add('choosen');
                       specCount++;
                   }
                   else{
                       this.classList.remove('choosen');
                       specCount--;
                   }
                   if(specCount > 0)
                   {
                       remove.style.display = "block";
                   }
                   else if(specCount == 0)
                   {
                       remove.style.display = "none";
                   }
                 });
                 
               // secmek end
           }
        }
        
    }
    autoScrool()
})
// enter keycode end

adder.addEventListener("click",Isle);
function Isle()
{
    let newMessage = input.value;
    let content = document.querySelector('.upper-chat');
    

    input.value = "";
    addComment();

    function addComment(){
       
        if(!isNaN(Number(newMessage[0]))){
            error.style.display = 'block';
            errorClose.addEventListener('click', function(){
                error.style.display = 'none';
            })
        }else if(newMessage[0] == newMessage[0].toUpperCase()){
          
            let div = document.createElement('div');
            let img = document.createElement('img');
            let p = document.createElement('p');
            let count=1;
            

            div.classList.add('left-comment');
            img.classList.add('girlImage');
            img.src = "image/call.jpg";
            p.classList.add('text');
            p.innerText = newMessage;

            
            content.appendChild(div);
            div.appendChild(img);
            div.appendChild(p);

           //  secmek
           div.addEventListener("click",function(){
               count++;
               if(count%2 == 0)
               {
                   this.classList.add('choosen');
                   specCount++;
                   // remove.style.display == "block";
                   
               }
               else{
                   this.classList.remove('choosen');
                   specCount--;
               }
               if(specCount > 0)
               {
                   remove.style.display = "block";
               }
               else if(specCount == 0)
               {
                   remove.style.display = "none";
               }
             })
           // secmek end
           
       }
       else if(newMessage[0] == newMessage[0].toLowerCase()) {
            let div = document.createElement('div');
            let img = document.createElement('img');
            let p = document.createElement('p');
            let count =1;
           
            
            div.classList.add('right-comment');
            img.classList.add('ruffImage');
            img.src = "image/ruff.jpg";
            p.classList.add('text');
            p.innerText = newMessage;

            
            content.appendChild(div);
            div.appendChild(img);
            div.appendChild(p);

             //  secmek
             div.addEventListener("click",function(){
               count++;
               if(count%2 == 0)
               {
                   this.classList.add('choosen');
                   specCount++;
               }
               else{
                   this.classList.remove('choosen');
                   specCount--;
               }
               if(specCount > 0)
               {
                   remove.style.display = "block";
               }
               else if(specCount == 0)
               {
                   remove.style.display = "none";
               }
             });
             
           // secmek end
       }
    }
    autoScrool();
}
remove.addEventListener('click',function(){
   let divs = document.querySelectorAll('.upper-chat>div');
//    let removeIcon = document.querySelector('.fa-trash');
   for(let i= 0 ; i < divs.length; i++){
    // console.log(divs[i].classList);
       if(divs[i].classList.contains('choosen'))
       {      
           divs[i].remove();
       }
   }
   remove.style.display = "none";
   specCount = 0;
})
//  for(i=0;i<divs.length;i++){
//     // console.log(divs[i].classList);
//        if(divs[i].classList.contains('choosen'))
//        {      
//            divs[i].remove();
//        }
//    }

   
//  let oldComment = document.querySelectorAll('.right-comment');

