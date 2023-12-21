
import React from "react";
// import { Container } from "react-bootstrap";
// {/*Aggiungi un componente CommentArea alla fine di SingleBook. Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true), i commenti dovranno apparire (suggerimento: short-circuit operator!).
// CommentArea dovrà fare il fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.
// CommentsList mostrerà le recensioni del libro in un elenco; l'array di recensioni gli verrà passato come prop dal componente CommentArea. La singola recensione verrà visualizzata utilizzando un altro componente, chiamato SingleComment. */}




class ListaCommenti extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
        // Inseriamo nello state tutto quello che, quando si aggiorna, deve far avvenire qualcosa, quindi l'array delle prenotazioni, un booleano per il loader e un booleano per gestire messaggi di errore (queste ultime due cose rappresentano migliorie dell'esperienza utente - UX)
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
            })
            if (commenti.ok) {
                const data = await commenti.json()
                this.setState({
                    arrayCommenti: data,
                    isLoading: false,
                })
            } else {
                console.log("errore nel fetch")
                this.setState({
                    isLoading: false,
                    isError: true,
                });
            }
        } catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.prendiCommenti();
    }
    render() {
        return (
            console.log(this.state.arrayCommenti)
            //.map(commento => {
            //     return (
                    
            //         <div key={commento.asin}>
            //             <div>
            //                 <label htmlFor="">Commento: {commento.comment}</label>
            //             </div>
            //             <div>
            //                 <label htmlFor="">Rating: {commento.rate}</label>
            //             </div>
            //         </div>)
            // })
        )
    }
  
  }
  




 export default ListaCommenti
