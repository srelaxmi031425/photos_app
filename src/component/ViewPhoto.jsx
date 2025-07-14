import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'


const ViewPhoto = () => {
    const[photos,changePhotos]=useState(


[])


const fetchData=()=>{

axios.get("https://jsonplaceholder.typicode.com/photos").then(
(resonse)=>{

changePhotos(resonse.data)




}









).catch()




}
useEffect(()=>{fetchData()},[])
    return (
        <div>
<NavigationBar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">




                        <div className="row">
                            
{photos.map(

(value,index)=>{

return(

<div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><div class="card" >
     <img src={value.thumbnailUrl} alt="..." />
                                <img src={value.url} alt="..." />
                                <div className="card-body">
                                     <p className="card-text">{value.albumId}</p>
                                      <p className="card-text">{value.id}</p>
                                    <p className="card-text">{value.title}</p>
                                </div>
                            </div></div>









)







}

)}

                            



                           

                           


                          
                        </div>
                    </div>
                </div>
            </div>













        </div>
    )
}

export default ViewPhoto