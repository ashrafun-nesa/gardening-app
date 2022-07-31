import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'
import LoadComments from './LoadComments';

function PlantDetail(props) {
    return ( 
        <div>
            <Card style={{margin: '10px'}}>
                <CardImg src={props.plant.image} alt={props.plant.name}/>
                <CardBody style={{textAlign: 'start'}} >
                    <CardTitle>{props.plant.name}</CardTitle>
                    <CardText>
                        <p>{props.plant.description}</p>
                        <p>{props.plant.price}/-</p>
                        <LoadComments comment= {props.plant.comments}/>
                    </CardText>

                </CardBody>
            </Card>
        </div>
     );
}

export default PlantDetail;