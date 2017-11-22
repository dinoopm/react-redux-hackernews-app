import React from "react";
import {connect} from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";


import { getNewsList} from "../actions/HackerNewsListActions";

import HackerNewsList from "../components/HackerNewsList";

class App extends React.Component {

    componentDidMount(){
       this.props.init();
    }
    render() {
        return (
            <div className="container">
              <Header />
              <main className="mdl-layout__content">
                <div className="page-content">
                  <HackerNewsList stories={this.props.stories} />
                </div>
              </main>
              <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      stories: state.stories
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
          dispatch(getNewsList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
