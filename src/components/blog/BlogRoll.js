import React, { PureComponent } from 'react'

class BlogRoll extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div className="row pt-md-4">
                    <div className="col-md-12">
                        <div className="blog-entry ftco-animate d-md-flex">
                            <a href="single.html" className="img img-2"
                                style={{
                                    backgroundImage: 'url(images/image_1.jpg)'
                                }}></a>
                            <div className="text text-2 pl-md-4">
                                <h3 className="mb-2"><a href="single.html">A Loving Heart is the Truest
                                        Wisdom</a></h3>
                                <div className="meta-wrap">
                                    <p className="meta">
                                        <span><i className="icon-calendar mr-2"></i>June 28, 2019</span>
                                        <span><a href="single.html"><i
                                                    className="icon-folder-o mr-2"></i>Travel</a></span>
                                        <span><i className="icon-comment2 mr-2"></i>5 Comment</span>
                                    </p>
                                </div>
                                <p className="mb-4">A small river named Duden flows by their place and supplies
                                    it with the necessary regelialia.</p>
                                <p><a href="#" className="btn-custom">Read More <span
                                            className="ion-ios-arrow-forward"></span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BlogRoll