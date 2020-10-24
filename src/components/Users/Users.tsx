import React, { useEffect } from 'react'
import { Card, Alert, Badge } from 'react-bootstrap';
import { getUserDetail } from '../../services/Users/UserService';
import { convertToUpperCase } from '../../Utils/Utils';
import { IUsersPage } from './Users.interface';

function Users(props: IUsersPage) {
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
            <div className="d-flex flex-wrap">
                {props.users.map((user: any) => (
                    <React.Fragment key={user.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="text-uppercase">{convertToUpperCase(user.title)}</Card.Title>
                                <Card.Text>
                                    Status {user.completed ? 
                                    <Badge variant="success">Completed</Badge> : <Badge variant="danger">Completed</Badge>}
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
