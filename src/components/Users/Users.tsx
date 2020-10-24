import React, { useEffect } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { getUserDetail } from '../../services/Users/UserService';

function Users(props: any) {
    useEffect(() => {
        getUserDetail();
    }, [])
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="d-flex justify-content-center">
                <div>
                    <Alert variant={'danger'}>
                        {props.subTitle}
                    </Alert>
                </div>
            </div>
            <div>
                {props.users.map((user: any) => (
                    <React.Fragment key={user.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{user.title}</Card.Title>
                                <Card.Text>
                                    Status: {user.completed ? 'Completed' : 'Not Completed'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Users;
