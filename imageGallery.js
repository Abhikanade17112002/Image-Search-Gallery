const apiKey = "GvWo-VwlL6m9rnLRqfFMfBQBT_J-mn1sEC1kJM4oEkc" ;
const URL = "https://api.unsplash.com/search/photos?page=${}&query={}&client_id={}" ;
const Results = document.querySelector(".search_results")
const userInput = document.querySelector(".header_search_area input[type='text']") ;
const searchButton = document.querySelector(".header_search_button")  ;
const showMoreButton = document.querySelector(".show_more")  ;
const imageDescription = document.querySelector(".image_desc") ;


let page = 1 ;
async function searchImage(boolean)
{  
     const keyWord = userInput.value ;
    //  console.log(keyWord) ;
     const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${apiKey}` ;


     const response = await fetch(URL) ;
     const data = await response.json() ;

    //  console.log(data.results) ;

     const searchResults = data.results ;
    //  console.log(searchResults) ;

    
     if( boolean == true  )
     {
        Results.innerHTML = "" ;
     }
 
     searchResults.map((result)=>{
        const imageWarpper = document.createElement("div");
        imageWarpper.classList.add("search_result") ;
        const imageLink = document.createElement("li") ;
        imageLink.href = result.links.html ;
        imageLink.target = "_blank";
        console.log(result.links.self)
        const image = document.createElement("img") ;
       
        image.src = result.urls.small ;
        console.log(result.urls.small)
        image.alt = result.alt_description
        imageLink.appendChild(image) ;
        
        imageWarpper.appendChild(imageLink) ;
        Results.appendChild(imageWarpper);
     })

     

     page++ ;
     if( page > 1 )
     {
         showMoreButton.style.display = "block" ;
     }

}

searchButton.addEventListener("click" , ()=>{
   
       searchImage(true) ;

})

showMoreButton.addEventListener("click" , ()=>{
    searchImage(false) ;
})