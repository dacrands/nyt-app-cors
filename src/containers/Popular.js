import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopular } from '../actions/index';
import { bindActionCreators } from 'redux';

class Popular extends Component {

    componentDidMount() {
        this.props.fetchPopular();
        setTimeout(() => {
            console.log(this.props.popular[0]);
        }, 3500);        
    }

    renderPopular(post) {
        return (
            <div>

            
            <article 
                className={"popular"}
                // style={{backgroundImage: `url(${post.media["0"]["media-metadata"]["1"].url})`}}
            >
                <a href={post.url}>  
                                <h3>
                                    {post.title}
                                </h3>
                </a> 
                <div className="popular__items">
                    <div className="popular__image">
                        <img className="fluid thumbnail" src={post.media["0"]["media-metadata"]["1"].url} alt=""/>
                    </div>                    
                    <div className="popular__text">
                                
                        <p className="lead">{post.published_date}</p>
                        
                        <p>                           
                        {post.abstract}
                        </p>                  
                    </div>                
                </div>
                
            </article>            
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h1>Most Popular Articles for {new Date().toDateString()}    </h1>
                <section className={"articles"}>                    
                    {         
                        this.props.popular[0]
                        ? this.props.popular[0].map(this.renderPopular)
                        : null 
                    }
                </section>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPopular }, dispatch);    
}

function mapStateToProps({ popular }) {
    return { popular };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);