import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'

function MenuItem(props) {
    return ( 
        <div>
            {props? <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg  width='100%' alt={props.plants.name} src={props.plants.image}/>
                    <CardImgOverlay>
                        {props? <CardTitle onClick={props.onPlantSelect} style={{color: 'white', cursor: 'pointer'}}>{props.plants.name}</CardTitle> : null}
                    </CardImgOverlay>
                </CardBody>
            </Card>
            : null}
        </div>
     );
}

export default MenuItem;