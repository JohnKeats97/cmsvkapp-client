import React from 'react'

import Fetch from "../../../utils/fetch";
import debounce from "../../../utils/debounce";

import './style.css';


export default class AddressWindow extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeInputDebounce = debounce(this.onChangeInput, 300);
        this.state = {
            suggests: {}
        };

        this.listStyle = {
            background: props.pageConfig.inputAddress.style.background,
            color: props.pageConfig.inputAddress.style.color,
            borderRadius: props.pageConfig.inputAddress.style.borderRadius,
            width: props.pageConfig.inputAddress.style.width,
            left: props.pageConfig.inputAddress.style.left,
            top: `${parseInt(props.pageConfig.inputAddress.style.top) + parseInt(props.pageConfig.inputAddress.style.height) + 10}px`,
            fontSize: props.pageConfig.inputAddress.style.fontSize,
            borderWidth: props.pageConfig.inputAddress.style.borderWidth
        };
    }

    onChangeInput(value) {
        Fetch.Get(`/suggest/?q=${value}`)
            .then(({response})=>{
                this.setState((state) => (state.suggests = response.suggests, state));
            });
    }

    onClick() {
        const input = document.querySelector('.components-RightPanel-BodyRight-WindowApp-AddressWindow-inputAddress');
        const userAddress = input.value;
        if (userAddress === '') {
            alert('Введите валидный адрес');
            return;
        }
        this.props.onOpenNewPage('loadingPage', {userAddress});
    }

    onChange(e) {
        this.onChangeInputDebounce(e.target.value);
    }

    onClictItem(e) {
        const input = document.querySelector('.components-RightPanel-BodyRight-WindowApp-AddressWindow-inputAddress');
        input.value = e.target.innerHTML;
    }

    getSuggests() {
        const {state} = this;
        const {suggests} = state;
        let list = [];
        const {length: suggestsLen} = Object.keys(suggests);
        if (!suggestsLen) {
            return list;
        }
        for (let i = 0; i < suggestsLen; i++) {
            if (i > 3) {
                break;
            }
            list.push(<div
                onClick={this.onClictItem.bind(this)}
                className={'components-RightPanel-BodyRight-WindowApp-AddressWindow-itemStyle'}
            >
                {`${suggests[i].city}, ${suggests[i].location}`}
            </div>);
        }

        return list;
    }


    render() {
        const {props, state} = this;
        const {length: suggestsLen} = Object.keys(state.suggests);
        let addressList = this.getSuggests();

        return <div
            className="components-RightPanel-BodyRight-WindowApp-AddressWindow-root"
            style={props.pageConfig.background.style}>
            <div
                className="components-RightPanel-BodyRight-WindowApp-AddressWindow-title"
                style={props.pageConfig.title.style}
            >
                {props.pageConfig.title.text}
            </div>
            <input
                className="components-RightPanel-BodyRight-WindowApp-AddressWindow-inputAddress"
                style={props.pageConfig.inputAddress.style}
                placeholder={props.pageConfig.inputAddress.placeholder}
                onChange={this.onChange.bind(this)}
            />
            <button
                className="components-RightPanel-BodyRight-WindowApp-AddressWindow-buttonOk"
                style={props.pageConfig.buttonOK.style}
                onClick={this.onClick.bind(this)}
            >
                {props.pageConfig.buttonOK.text}
            </button>
            {suggestsLen > 0 ? <div
                className="components-RightPanel-BodyRight-WindowApp-AddressWindow-listStyle"
                style={this.listStyle}
            >
                {addressList}
            </div> : ''}
        </div>
    }
};
