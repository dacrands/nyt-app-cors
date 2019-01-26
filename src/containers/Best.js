import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBest } from '../actions/index';
import { bindActionCreators } from 'redux';

class Best extends Component {
    
    componentDidMount() {
        this.props.fetchBest();       
    }

    renderBest(book) {
        return (
        
            <div key={book.rank} className={"book"}>
                <a href={book.amazon_product_url}>                    
                    <img className="book__image" src={book.book_image} alt=""/>      
                    <div className="overlay">
                        <div className="book__text">
                            <h1 className="lead">{book.rank}.</h1>
                            <p>
                                {book.description}
                            </p> 
                        </div>                                       
                    </div>                    
                </a>                       
            </div>  
             
        );
    }

    render() {
        if (this.props.isError) {
            return (
                <header className={"header"}>
                    <h1>Sorry! There was an error loading the items</h1>                    
                </header>
            )
        }

        if (this.props.isLoading) {            
            return (
                <div className="container">
                    <div className="loading">
                        <h2>Grabbing best-sellers...</h2>
                        <div className="spinner">
                            <div className="disc">
                                <div className="disc__item"></div>
                            </div>                        
                        </div>
                    </div>                    
                </div>
            );
        }

        return(            
            <div className={"container books"}>
                {
                    this.props.best[0]
                    ? this.props.best[0].map(this.renderBest) 
                    : null
                }
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBest }, dispatch);
}

const mapStateToProps = (state) => {
    return { 
        best: state.best, 
        isError: state.error, 
        isLoading: state.loading 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Best);