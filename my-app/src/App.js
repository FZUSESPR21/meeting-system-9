import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Meeting from './Meeting';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

const headerJSON = {
    "user_id": "Freeman",
    "password": "909090"
}

class App extends React.Component {


    render() {
        // return (
        //     <div>
        //       <Post url="http://zhenglinxuan.top:666/api/v1/login" data= {headerJSON}>
        //         {(error, response, isLoading, onReload) => {
        //           if(error) {
        //             return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ 
        //                 // params: { reload: true } 
        //                 })}>Retry</button></div>)
        //           }
        //           else if(isLoading) {
        //             return (<div>Loading...</div>)
        //           }
        //           else if(response !== null) {
        //             return (<div>{response.data.message} <button onClick={() => onReload(
        //                 // { params: { refresh: true } }
        //                 )}>Refresh</button></div>)
        //           }
        //           return (<div>Default message before request is made.</div>)
        //         }}
        //       </Post>
        //     </div>
        //   )
        return (
            <Router>
                <Route exact path="/" component={Meeting} />
                <Route path="/:id" component={Meeting} />
            </Router>
        )
    }
}
export default App;