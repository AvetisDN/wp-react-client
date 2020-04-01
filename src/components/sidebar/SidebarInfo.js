import React, { PureComponent } from 'react'

class SidebarInfo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="colorlib-footer">
                <h1 id="colorlib-logo" className="mb-4">
                    <a href="index.html" style={{
                        backgroundImage: 'url(assets/images/bg_1.jpg)'
                    }}>
                        Andrea <span>Moore</span>
                    </a>
                </h1>
                <div className="mb-4">
                    <h3>Subscribe for newsletter</h3>
                    <form action="#" className="colorlib-subscribe-form">
                    <div className="form-group d-flex">
                        <div className="icon"><span className="icon-paper-plane"></span></div>
                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                    </div>
                </form>
                </div>
                <p className="pfooter">
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> 
                    All rights reserved | This template is made with 
                    <i className="icon-heart" aria-hidden="true"></i> 
                    by 
                    <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
            </div>
        )
    }
}

export default SidebarInfo