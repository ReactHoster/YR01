import React, {Component} from 'react';
import Home from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch, withRouter} from 'react-router-dom';
import Watch from './containers/Watch/Watch';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';
import Trending from './containers/Trending/Trending';
import Search from './containers/Search/Search';

//AntiLag MultiCore
let API_KEY = ["AIzaSyAiwF2ZLV1i0-84miky5n4bqZKMTxBI2pg","AIzaSyCtZBX4uwe3T6m0MTOGkqMylO0h0oizgLk","AIzaSyDUqWkc5W3VioxP6GZfUc_thXovFORYe8k","AIzaSyDgYDHmDumLvfDNRxiwATOS0YieWG62370","AIzaSyBLeXvQ4M-sJN-8mKt6mD-OcfY_mhLILY4","AIzaSyDIkAb-apCuu_CtYsjtslFoaXK5Q6ITJ08","AIzaSyBURUV789DjEpSVpQ_Bv8zorAYFXvltcjQ","AIzaSyBdWsRkf9eeOySIwlvHErTw12Nt568n87o","AIzaSyA4Zrl7Q79Oag2uIVB0xcvqHhTKOMbGkhA"];

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/feed/trending" component={Trending}/>
          <Route path="/results" render={() => <Search key={this.props.location.key}/>}/>
          <Route path="/watch" render={() => <Watch key={this.props.location.key}/>}/>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    );
  }
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY[Math.floor(Math.random()*API_KEY.length)]);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
