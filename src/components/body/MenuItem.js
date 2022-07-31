import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'

function MenuItem(props) {
    console.log(props)
    return ( 
        <div>
            <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg  width='100%' alt={props.plants.name} src={props.plants.image}/>
                    <CardImgOverlay>
                        <CardTitle style={{color: 'white'}}>{props.plants.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
     );
}

export default MenuItem;