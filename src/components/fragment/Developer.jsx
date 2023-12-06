import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, GitHub, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Isabela Cassandra De Chavez</h3>
                        
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science student at St Clare College of Caloocan City.</p>
                    <p>A third-year college student who aims to be a web developer someday.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <p>I love to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/isabelacassandra.dechavez/photos"} title={""}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://github.com/isabelacassandra"}  title={""}>
                            <GitHub/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/isabelacassandradechavez/"}  title={""}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/izzy_bll/?fbclid=IwAR07XqrtqU42K96mF-G4X5lHq4nwoS52Nj8SrjvJ6-RXiFh-ZXe4kVTwiJE"}  title={""}>
                            <Instagram/>
                        </IconButton>                      
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;