import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Post = ({ id, title, description, author, pictureUrl }) => {
    return (
        <div className="Post">
            <Card border="secondary" className="text-center" style={{ width: '19rem' , height:"10px" }}>
                <Card.Img variant="top" img src={pictureUrl} className="card-image"/>
                <Card.Body>
                    <Card.Title style={{ textAlign:"center", fontWeight:"bold", marginTop:"10px" }}>{title}</Card.Title>
                    <Card.Text className="fixText">
                        {description}
                    </Card.Text>
                    <Link to={`/post/${id}`}> <Button variant="primary">Full Post</Button> </Link>
                </Card.Body>
                <Card.Footer className="text-muted">Author: <strong>{author}</strong></Card.Footer>
            </Card>
        </div>
    );
};

export default Post;