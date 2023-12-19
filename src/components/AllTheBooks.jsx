import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import React from 'react'
import { Row ,Col,Card} from 'react-bootstrap'



class Libri extends React.Component{
    
    
    state={
        libroFantasy:fantasy,
        /*libroHistory:history[0],
        libroHorror:horror[0],
        libroRomance:romance[0],
        libroScifi:scifi[0],*/
    };
    
    render(){
        
    return (
        <Row>
            {this.state.libroFantasy.slice(0,15).map(libro=>{
                
                return(
                    
                        <Col md={4} key={libro.asin}>
                            <Card>
                                <Card.Img variant="top" src={libro.img}/>
                                <Card.Body>
                                    <Card.Text>
                                        {libro.title}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                )
            })}
             
        </Row>
    )
}

}
export default Libri