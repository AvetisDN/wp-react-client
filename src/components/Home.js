import React, { PureComponent } from 'react'
import Widgets from './widgets/Widgets'
import BlogRoll from './blog/BlogRoll'
import queryString from 'query-string'

class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ''
        }
    }

    componentDidUpdate() {
        this.setState({
            searchQuery: queryString.parse(window.location.search).search || ''
        })
    }

    componentDidMount() {
        
        window.initPageScripts()
    }

    render() {
        return (
            <>
                <div className="col-xl-8 py-5 px-md-5">
                    <BlogRoll searchQuery={this.state.searchQuery} page={this.props.match.params.page || 1} />
                </div>

                <div className="col-xl-4 sidebar ftco-animate bg-light pt-5">
                    <Widgets searchQuery={this.state.searchQuery} />
                </div>
            </>
        )
    }
}

export default Home