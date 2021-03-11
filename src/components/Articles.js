import React, { Component } from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

class Articles extends Component {
    render() {
        const detailsArticleProps = this.props.allState;
        // const imgArticle = "./"
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.props.allState.image} />
                                <Card.Body className={this.props.allState.stock === 1 ? "bg-warning": this.props.allState.stock === 0 ? "bg-danger" : ""}>
                                    <Card.Title>{detailsArticleProps.nom}</Card.Title>
                                    <Card.Text>
                                    <p>Prix : {detailsArticleProps.prix}</p>
                                    <br/>
                                    <p>Stock : {detailsArticleProps.stock}</p>
                                    </Card.Text>
                                    <Button variant="primary" onClick={this.props.maj}>Acheter</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Articles;