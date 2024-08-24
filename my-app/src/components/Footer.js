import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer className="text-center bg-body-tertiary">
                <div className="container pt-4">
                    <section className="mb-4">
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            style={{ backgroundColor: "#e3f2fd" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="light"
                        >
                            <i className="fab fa-facebook-f" style={{ color: "#4267B2" }}></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            style={{ backgroundColor: "#e3f2fd" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="light"
                        >
                            <i className="fab fa-twitter" style={{ color: "#1DA1F2" }}></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            style={{ backgroundColor: "#e3f2fd" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="light"
                        >
                            <i className="fab fa-google" style={{ color: "#DB4437" }}></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            style={{ backgroundColor: "#e3f2fd" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="light"
                        >
                            <i className="fab fa-instagram" style={{ color: "#E1306C" }}></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            style={{ backgroundColor: "#e3f2fd" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="light"
                        >
                            <i className="fab fa-linkedin" style={{ color: "#0077B5" }}></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            style={{ backgroundColor: "#e3f2fd" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="light"
                        >
                            <i className="fab fa-github" style={{ color: "#000000" }}></i>
                        </a>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a className="text-light" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    );
}
