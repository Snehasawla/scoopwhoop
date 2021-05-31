import React, {useState, useEffect} from 'react';
import './card.css';

function CardDesign(){
    const [user, setsUser] = useState({});

    const getUser = async() => {
        const response = await fetch('https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=8');
        const data = await response.json();
        console.log(data.data)
        setsUser(data.data[0]);
    };

    useEffect(() => {
        getUser();
        }, []);  


        return(
                <div className="fluid-container mt-5">
                    <div className="row text-center"> 
                        {  
                            <div className="col-10 col-md-3 mt-5">
                                <div className="card p-2" >
                                    <div className="d-flex">
                                        <div className="card-body">
                                            <div classname="img"><img src={user.feature_img} alt="/" width="250px" height="150px" /></div>
                                            
                                            <small className="p-2 mt-2 d-flex justify-content-between card-category">{user.category}</small> 
                                            <h5 className="p-2 mt-2 d-flex justify-content-between card-text">{user.title}</h5>
                                            <div className="p-2 mt-2 d-flex justify-content-between flex-column textLeft">
                                                <div className="d-flex "><span className="author">{user.pub_date}</span></div>
                                                <div className="d-flex "><span className="shares">{Date.now- user.pub_date}|</span> <span className="number1">{user.readtime}</span></div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        } 
                    </div>
                </div>
            )
    };

    


export default CardDesign;