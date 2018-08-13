import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';
class UserData extends Component {
    
    render(){

        const {userData} = this.props;
        return(
            
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                    <Image src={userData.avatar_url} circle />
                    </Col>

                    <Col xs={6} md={4}>
                    User Name : {userData.login}
                    </Col>

                    <Col xs={6} md={4}>
                    User URL : {userData.html_url}
                    </Col>
                </Row>
            </Grid>
            
            
        )
    }
}

export default UserData;
