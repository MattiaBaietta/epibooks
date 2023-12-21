
import React from "react";
import { Card } from "react-bootstrap";
import {Col} from "react-bootstrap";

class ListaCommenti extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = {
      arrayCommenti: [],
      isLoading: true,
      isError: false,
    };
  }

  prendiCommenti = async () => {
    try {
      const commenti = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        headers: {
          "method": "GET",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDE5Y2I1MjViYjAwMThlZDA3ZjEiLCJpYXQiOjE3MDMxNjYzNjQsImV4cCI6MTcwNDM3NTk2NH0.LSqijv9bYVkG0dwQdnI1PUmrn7uVwIw3oCH8lvMmIrA"
        }
      });

      if (commenti.ok) {
        console.log("fetch fatta");
        const data = await commenti.json();
        this.setState({
          arrayCommenti: data,
          isLoading: false,
        });
      } else {
        console.log("errore nel fetch");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.prendiCommenti();
  }

  render() {
    return (
      this.state.arrayCommenti.map(commento => {
        return(

          <div key={commento.asin}>
            <div>
              <label htmlFor="">Commento: {commento.comment}</label>
            </div>
            <div>
              <label htmlFor="">Rating: {commento.rate}</label>
            </div>
          </div>
          )
        }
      )
    );
  }
}



class SingleBook extends React.Component {
  state = {
    selected: false
  };

  clickaCard = () => {
    if (!this.state.selected) {
      this.setState({ListaCommenti})
      this.setState({ selected: true });
      console.log(this.state.selected);
    } else {
      this.setState({ selected: false });
      console.log(this.state.selected);
    }
  };

  render() {
    const { librocorrente } = this.props;
    const cardClassName = this.state.selected ? 'bordorosso' : '';

    return (
      <Col md={4}>
        <Card className={cardClassName}>
          <Card.Img onClick={this.clickaCard} variant="top" src={librocorrente.img} />
          <Card.Body>
            <Card.Text>{librocorrente.title}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
