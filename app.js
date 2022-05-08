const form = document.getElementById('searchForm')
const images = document.querySelector("#images");
form.addEventListener("submit",function(e){
    e.preventDefault()
    const searchTerm = this.elements.query.value;
    console.log(searchTerm);
    console.log('submitted')
    console.dir(this)
    console.log(this.elements.query.value);
    this.query.value = '';

    const fetchData = async(id)=>{
        try{
      const returnedShow = await axios.get(`https://api.tvmaze.com/search/shows?q=${id}`);
      const newImage = document.createElement("img");
      const returnedImage = returnedShow.data[0].show.image.medium;
      newImage.setAttribute("src",returnedImage);
      images.append(newImage);
        }
        catch(e){
            console.log("ERROR:", e);
        }
    }
    
fetchData(searchTerm);

  
})
const reset = document.querySelector('#reset');
reset.addEventListener('click',()=>{
    images.innerHTML = '';
})