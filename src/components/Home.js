import React, { PureComponent } from 'react'
import Widgets from './widgets/Widgets'
import BlogRoll from './blog/BlogRoll'

class Home extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.initPageScripts()
    }

    render() {
        return (
            <>
                <div className="col-xl-8 py-5 px-md-5">
                    <BlogRoll page={this.props.match.params.page || 1} />
                </div>

                <div className="col-xl-4 sidebar ftco-animate bg-light pt-5">
                    <Widgets/>
                </div>
            </>
        )
    }
}

export default Home