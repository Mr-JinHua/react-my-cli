import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            transitionJud: false
        }
    }
    render() {
        return (
            <div>
				react 测试组件环境
			</div>
        )
    }
}

export default App;
