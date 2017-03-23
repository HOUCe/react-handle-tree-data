//ES6
import React from 'react';

class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    toggle() {
        this.setState({visible: !this.state.visible});
    };

    render() {
        var childNodes;

        if (this.props.node.childNodes != null) {
            childNodes = this.props.node.childNodes.map(function(node, index){
                return <li key={index}><Component1 node={node}/></li>
            })

            let className1 = 'togglable';
            let className2 = this.state.visible ? 'togglable-down' : 'togglable-up';
            var classNameFinal = className1 + ' ' + className2;
        }

        var style;

        if (!this.state.visible) {
            style = {display: "none"};
        } 

        return (
            <div>
                <h5 onClick={()=>{this.toggle()}} className={classNameFinal}>
                    {this.props.node.title}
                </h5>
                <ul style={style}>
                    {childNodes}
                </ul>
            </div>
        )
    }
}

//导出组件
export default Component1;