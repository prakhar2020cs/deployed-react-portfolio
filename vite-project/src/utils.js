export const getImageUrl=(path)=>{  /* taking relative path */
return new URL(`/assets/${path}`, import.meta.url).href;  /* taking base url of our website then appending our relative path to it then.... returning it */
}
//makes it easier to dynamically import images into our different components 
