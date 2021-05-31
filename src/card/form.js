import React, {useState, useEffect} from 'react';
import './card.css'

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
                                        <div className="img ml-4 d-flex mb-0 mt-0">
                                            <img className="card-img-top" src={user.feature_img} alt="/" width="193px" height="130px" />
                                        </div>
                                        <div className="card-body ml-4" >
                                            <small className="card-text">{user.category}</small> 
                                            <h4 className="d-flex mb-0 mt-0 ">{user.title}</h4>
                                            <div className="p-2 mt-2 d-flex justify-content-between flex-column textLeft">
                                                <div className="d-flex "><span className="shares">{user.pub_date}</span></div>
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