import React, { PureComponent } from 'react'
import {NavLink} from 'react-router-dom';
import Moment from 'react-moment';

class BlogRollItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let thumb = `${this.props.post._embedded['wp:featuredmedia'] ? this.props.post._embedded['wp:featuredmedia'][0].source_url : 'http://wp.api/server/wp-content/uploads/2020/04/33.png'}`;
        let categories = this.props.post._embedded['wp:term'] ? this.props.post._embedded['wp:term'][0] : [];
        let commentCount = this.props.post._embedded.replies ? this.props.post._embedded.replies.length : 0;
        return (
            <div className="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated">
                <NavLink to={`/post/${this.props.post.slug}`} className="img img-2"
                    style={{
                        backgroundImage: `url(${thumb})`
                    }}></NavLink>
                <div className="text text-2 pl-md-4">
                    <h3 className="mb-2">
                        <NavLink to={`/post/${this.props.post.slug}`}>
                            {this.props.post.title.rendered}
                        </NavLink>
                    </h3>
                    <div className="meta-wrap">
                        <p className="meta">
                            <span>
                                <i className="icon-calendar mr-2"></i>
                                <Moment format={'MMMM D, YYYY'} locale='en'>
                                    {this.props.post.date}
                                </Moment>
                            </span>
                            <span>
                                <i className="icon-folder-o mr-2"></i>
                                {categories.length>0 &&
                                    categories.map( (cat, index) => {
                                        return (
                                            <NavLink to={`/blog/${cat.slug}`} key={index}>
                                                {cat.name}
                                                {index !== categories.length-1 ? ', ' : ''}
                                            </NavLink>
                                        )
                                    })
                                }
                                
                                </span>
                            <span>
                                <i className="icon-comment2 mr-2"></i>
                                {commentCount} Comment{commentCount>1 ? 's' : ''}
                            </span>
                        </p>
                    </div>
                    <p className="mb-4" dangerouslySetInnerHTML={{'__html': this.props.post.excerpt.rendered.slice(0, 100) + '...'}}></p>
                    <p>
                        <NavLink to={`/post/${this.props.post.slug}`} className="btn-custom">
                            Read More
                            <span className="ion-ios-arrow-forward"></span>
                        </NavLink>
                    </p>
                </div>
            </div>
        )
    }
}

export default BlogRollItem