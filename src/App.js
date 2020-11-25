import React from 'react'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />

        <ul id="breadcrumb">
          <li><a href="#"><span className="icon icon-home"> </span></a></li>
          <li><a href="#"><span className="icon icon-beaker"> </span> Projects</a></li>
          <li><a href="#"><span className="icon icon-double-angle-right" /> Breadcrumb</a></li>
          <li><a href="#"><span className="icon icon-rocket"> </span> Getting started</a></li>
          <li><a href="#"><span className="icon icon-arrow-down"> </span> Download</a></li>
        </ul>

        <section className="container">

          <div className="questionBox">

            <div className="questionContainer">

              <header>
                <h1 className="title">ReactJS Quiz</h1>
                <div className="progressContainer">
                  <progress className="progress" />
                  <p>0% complete</p>
                </div>
              </header>

              <h2 className="titleContainer title">What is the full form of HTTP?</h2>

              <div className="optionContainer">
                <div className="option">
                  a. Hyper text transfer package
              </div>
                <div className="option">
                  b. Hyper text transfer protocol
              </div>
                <div className="option">
                  c. Hyphenation text test program
              </div>
                <div className="option">
                  d. None of the above
              </div>
              </div>

              <footer className="questionFooter">
                <nav className="action">
                  <a className="button">
                    Back
                </a>
                  <a className="button">
                    Next
                </a>
                </nav>
              </footer>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
