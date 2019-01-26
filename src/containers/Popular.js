import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopular } from '../actions/index';
import { bindActionCreators } from 'redux';

class Popular extends Component {

    componentDidMount() {
        this.props.fetchPopular();    
    }

    renderPopular(post) {
        return (
            <div key={post.title.replace(/\s/g, '')}>            
                <article className={"popular"} >                
                    <div className="popular__items">                        
                        <div 
                            className="popular__image" 
                            style={post.media["0"]["media-metadata"]["2"]                         
                                ? {backgroundImage: `url(${post.media["0"]["media-metadata"]["2"].url})`}
                                : {backgroundImage: `url(https://imgur.com/7SIlmAJ)`}
                                }
                            >                            

                        </div>                                           
                        <div className="popular__text">                                
                            <h3>{post.title}</h3>                            
                            <p className="lead">{post.published_date}</p>                            
                            <p>{post.abstract}</p>                  
                            <a href={post.url}>                                 
                                view article <span>&rarr;</span>
                            </a> 
                        </div>                
                    </div>                
                </article>            
            </div>
        );
    }

    render() {
        if (this.props.isError) {
            return (
                <header className={"header"}>
                    <h1>Sorry! There was an error.</h1>                    
                </header>
            );
            
        }

        if (this.props.isLoading) {            
            return (
                <div className="container">
                    <div className="loading">
                        <h2>Grabbing random articles...</h2>
                        <div className="spinner">
                            <div className="disc">
                                <div className="disc__item"></div>
                            </div>                        
                        </div>
                    </div>                    
                </div>
            );
        }
        return (
            <div className="container">'
                <header>
                    <h2>Most Popular Articles for {new Date().toDateString()}</h2>
                </header>                
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

const mapStateToProps = (state) => {
    return { 
        popular: state.popular,  
        isError: state.error,
        isLoading: state.loading,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Popular);