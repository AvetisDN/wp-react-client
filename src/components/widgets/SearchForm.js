import React, { PureComponent } from 'react'
import {Redirect, NavLink} from 'react-router-dom'
import axios from 'axios'

class SearchForm extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            searchQuery: this.props.searchQuery,
            redirect: false,
            liveResults: []
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onFieldChange = this.onFieldChange.bind(this)
    }

    componentDidUpdate(prevProps, prevStates) {
        if(prevProps.searchQuery !== this.props.searchQuery) {
            this.setState({
                search: this.props.searchQuery,
                liveResults: []
            })
        }
        // this.setState({
        //     searchQuery: this.props.searchQuery
        // })
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.setState({
            redirect: true
        })
    }

    onFieldChange(e) {
        this.setState({
            redirect: false,
            search: e.target.value
        })
        if(e.target.value.length > 2) {
            this.getLiveResults()
        } else {
            this.setState({
                liveResults: []
            })
        }
    }

    setRedirect() {
        let searchString = '/?search=' + this.state.search.replace(/\s+/ig,'%20')
        return (
            <Redirect to={searchString} />
        )
    }

    getLiveResults() {
        axios.get(`${process.env.REACT_APP_API_BASE}/search?per_page=5&subtype=post&search=${this.state.search}`)
        .then(response => {
            this.setState({
                liveResults: response.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <form action="/" className="search-form" onSubmit = {this.onFormSubmit}>
                <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input  type="search"
                            className="form-control"
                            placeholder="Type a keyword and hit enter"
                            // required
                            // minLength={3}
                            value = {this.state.search}
                            onChange = {this.onFieldChange}
                    />
                    {this.state.liveResults.length>0 &&
                        <div className="position-absolute w-100 bg-white shadow-sm list-group" style={{zIndex:1000}}>
                            {this.state.liveResults.map( (post, i) => {
                                let slug = post.url;
                                slug = slug.replace(process.env.REACT_APP_SERVER_URL,'');
                                slug = slug.slice(0, slug.length-1);                            
                                return (
                                    <NavLink to={'/post/' + slug} key={i} className='list-group-item list-group-item-action'>
                                        {post.title}
                                    </NavLink>
                                )
                            })}                            
                        </div>
                    }
                </div>
                {this.state.redirect && 
                    this.setRedirect()
                }
            </form>
        )
    }
}

export default SearchForm