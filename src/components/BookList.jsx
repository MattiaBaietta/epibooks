import React from "react";
import SingleBook from './SingleBook';
import { Row } from "react-bootstrap";


class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ricerca: '',
        };
    }
    leggiTextbox = (event) => {
        this.setState({ ricerca: event.target.value });
        console.log(event.target.value)
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.leggiTextbox} />

                <Row>
                    {this.props.arraylibri.map(libro => {
                        if (libro.title.toLowerCase().includes(this.state.ricerca.toLowerCase())) {
                            
                            return (
                                <SingleBook key={libro.asin} librocorrente={libro} />
                            )
                        }
                    })}
                </Row>
            </div>
        );
    }
}


export default BookList;

