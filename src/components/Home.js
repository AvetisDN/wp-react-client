import React, { PureComponent } from 'react'
import Widgets from './widgets/Widgets'
import BlogRoll from './blog/BlogRoll'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount() {
        window.initPageScripts()
    }

    render() {
        return (
            <>
                <BlogRoll/>
                <Widgets/>
            </>
        )
    }
}

export default Home