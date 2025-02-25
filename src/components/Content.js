import React from "react";
import '../scss/style.scss';
import '../scss/_variables.scss';

export default function Content() {
    return (
        <div className="container-fluid bg-green" style={{ marginBottom: "125px", marginTop: "25px" }}>
            <div className="justify-content-center align-items-center">
                <div className="row">
                    <div className="col-md-5 offset-sm-1">
                        <h1>
                            <div className="display-4 mt-5 text-sm">
                                <p className="fw-bold text-black">Find Communities Who Relate to You</p>
                            </div>
                        </h1>

                        <a href="#community" className="btn btn-danger btn-lg text-white">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
