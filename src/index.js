import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './index.less';
import { message } from 'antd'

class App extends React.PureComponent {
    fn = () => {
        message.success('antd 可以使用...')
    }
    render() {
        return (
            <div className='app' onClick={() => this.fn()}>11111</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))