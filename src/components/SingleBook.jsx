import React from 'react';
import { Col, Card } from 'react-bootstrap';

class SingleBook extends React.Component {
    state={
        selected:false
    }
    clickaCard = ()=>{
        if(this.state.selected==false)
        {
        this.setState({selected:true})
        console.log(this.state.selected)
        }
        else{
            this.setState({selected:false})
            console.log(this.state.selected)
        }
    }
    render() {
    const { librocorrente } = this.props;
    const cardClassName = this.state.selected ? 'bordorosso' : '';


    return (
      <Col md={4} onClick={this.clickaCard}>
        <Card class="bordorosso">
          <Card.Img variant="top" src={librocorrente.img} />
          <Card.Body>
            <Card.Text>{librocorrente.title}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
