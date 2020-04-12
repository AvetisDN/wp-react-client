import React, { PureComponent } from 'react'
import {NavLink} from 'react-router-dom'

class Pagination extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            pagesArray: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.current !== this.props.current) {
            this.getPagesArray()
        }
    }

    componentDidMount() {
        this.getPagesArray()
    }

    getPagesArray() {
        let pagesArray = []
        if(this.props.current > 1) {
            pagesArray.push(
                (
                        <NavLink to={`${this.props.slug}${this.props.current - 1}`}>&lt;</NavLink>
                )
            )
        }
        for(let i=1; i<=this.props.last; i++) {
            let pageData = (
                                <NavLink to={`${this.props.slug}${i}`}>
                                    {i}
                                </NavLink>
                            )
            if(i == this.props.current) {
                pageData = (
                        <span>
                            {i}
                        </span>
                    )
            }
            pagesArray.push(pageData)
            
        }
        if(this.props.current < this.props.last) {
            pagesArray.push(
                (
                    <NavLink to={`${this.props.slug}${this.props.current*1 + 1}`}>&gt;</NavLink>
                )
            )
        }
        this.setState({
            pagesArray: pagesArray
        })
    }

    render() {
        
        return (
            <div className="row">
                <div className="col">
                    <div className="block-27">
                        <ul>                            
                            {
                                this.state.pagesArray.map( (p,i) => {
                                    return (
                                        <li key={i}>
                                            {p}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pagination