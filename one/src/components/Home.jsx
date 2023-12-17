import React from 'react';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import vg from "../assets/2.webp"
const Home = () => {
    return (
        <>
            <div className='home'id="home">

                <main>
                    <h1>
                        Techy
                        <p>Solution to all your problems</p>
                    </h1>
                </main>
            </div>
            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <p>
                    We are your one and only solution to the tech problems you face
                    every day. We are leading tech company whose aim is to increase the
                    problem solving ability in children.
                </p>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are</h1>
                    <p>Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit.
                        Officiis eum provident alias facere earum sunt corrupti
                        optio mollitia omnis animi?
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1> Brands</h1>
                    <article>
                        <div style={
                            {
                                animationDelay: "0.3s"
                            }
                        }>

                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={
                            {
                                animationDelay: "0.6s"
                            }
                        }>

                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "0.8s"
                            }
                        }>

                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={
                            {
                                animationDelay: "1s"
                            }
                        }>

                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>

            </div>
        </>
    )
}

export default Home