import React from "react";








class CreaCommenti extends React.Component{
    constructor(props) {
        super(props);
        console.log('Constructor');
        // Inseriamo nello state tutto quello che, quando si aggiorna, deve far avvenire qualcosa, quindi l'array delle prenotazioni, un booleano per il loader e un booleano per gestire messaggi di errore (queste ultime due cose rappresentano migliorie dell'esperienza utente - UX)
    }
    inserisciCommenti = async () => {
        try {
            const commentoCreato = await fetch(`https://striveschool-api.herokuapp.com/api/books/${this.props.id}/comments`, {
                headers: {
                    "method": "POST",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDE5Y2I1MjViYjAwMThlZDA3ZjEiLCJpYXQiOjE3MDMxNjYzNjQsImV4cCI6MTcwNDM3NTk2NH0.LSqijv9bYVkG0dwQdnI1PUmrn7uVwIw3oCH8lvMmIrA"
                },
                body:JSON.stringify(this.props.recensione)//recensione è il nome della props
            })
            if (commentoCreato.ok) {
                alert("commento inserito correttamente")
            } else {
                console.log("errore nel fetch")

            }
        } catch (e) {
            console.log(e)
        }
    }
}

export default CreaCommenti