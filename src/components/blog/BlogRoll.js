import React, { PureComponent } from 'react'
import axios from 'axios'

import BlogRollItem from './BlogRollItem'
import Pagination from './Pagination'

class BlogRoll extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            page: this.props.page,
            total: 0,
            lastPage: 1
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.page !== this.props.page) {
            this.setState({
                page: this.props.page
            })
            this.fetchPosts()
        }
        if(prevProps.searchQuery !== this.props.searchQuery) {
            this.fetchPosts()
        }
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts() {
        axios.get(`${process.env.REACT_APP_API_BASE}/posts?_embed&page=${this.state.page}&search=${this.props.searchQuery}`)
        .then(response => {
            this.setState({
                posts: response.data,
                total: response.headers['x-wp-total'],
                lastPage: response.headers['x-wp-totalpages']
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <>
                <div className="row pt-md-4">
                    <div className="col-md-12">
                        {this.state.posts.length>0 &&
                            this.state.posts.map( (item, index) => {
                                return (
                                    <BlogRollItem key={index} post={item} />
                                )
                            })
                        }
                    </div>
                </div>
                {this.state.lastPage > 1 &&
                    <Pagination current={this.state.page} last={this.state.lastPage} slug="/" />
                }
            </>
        )
    }
}

export default BlogRoll