import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CheckBox from '../assets/images/check-box.svg'; 
import Book from '../assets/images/book.svg'; 
import Time from '../assets/images/time.svg'; 

export default class Landing extends Component {

  componentDidMount() {
    const landing =  document.querySelector('.landing');
    landing.style.minHeight = `calc(100vh - ${landing.offsetTop}px)`;
    window.addEventListener('resize', () => {
      landing.style.minHeight = `calc(100vh - ${landing.offsetTop}px)`;
    })
  }


  render() {
    return (
      <div>
        <main className="landing">
          <div className="landing--bg"></div>
          <section className="box">
            <Link to="/best" className="box__item">
              <Book className="box__svg"/>
              <h3>
                {/* Browse the New York Times Best-Sellers. <br/> Click a book to buy it on Amazon. */}
                NYT Best Sellers
              </h3>
              <p>
              Browse the New York Times Best-Sellers. Click a book to buy it on Amazon.
              </p>
            </Link>
            <Link to="/archives" className="box__item">
              <Time className="box__svg" />
              <h3>Explore History</h3>
              <p>Read articles dating back to the year 1900.</p>
            </Link>
            <Link to="/popular" className="box__item">
              <CheckBox className="box__svg" />
              <h3>Check out the news that's causing a buzz.</h3>
            </Link>                                    
          </section>          
        </main>        
      </div>
    )
  }
}