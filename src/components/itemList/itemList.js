import React, {Component} from 'react';
import GotService from '../../services/gotServices';
import Spinner from '../spinner';
import './itemList.css';
export default class ItemList extends Component {

    gotServices = new GotService();
    
    state = {
        charList: null
    }

    componentDidMount() {
        this.gotServices.getAllCharacter()
            .then( (charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li>
            )
        });
    }

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}