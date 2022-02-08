import React from "react";
import Card from "../shared/Card";
import {Link} from "react-router-dom";


function AboutPage() {
    return(
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This a  react app</p>
                <p>Version 1.0</p>
                <p>
                    <Link to="/">Back To Home</Link>
                </p>
            </div>
        </Card>
    );
}

export default AboutPage;