import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Destination } from '../class/Destination';

const List = () => {
    const params = useParams();
    const Des=params.Destination;
    const listDes:Array<Destination>= useSelector((k:any)=>k.currDestination)
    const currDes= (listDes.find(k=>k.destination==Des))
    debugger
    return (
        <div>
            <div>More details:</div>
            <img src={`http://localhost:7777/pic/${currDes?.pic}.jpg`} /><br />
            <div>{currDes?.destination}</div>
            <div>{currDes?.location}</div>
            <div>{currDes?.stars}</div>
            <div>{currDes?.weather}</div>
            <div>{currDes?.description}</div>
            <div>{currDes?.duration}</div>
            <div>{currDes?.password}</div>
            <div>
                <div>Attractions:</div>  
                {currDes?.attractions?.map((k:any)=>(
                    <div>{k.name} -- {k.cost}</div>
                ))}
               
            </div>
            <div>
                <div>Stuff:</div>
                {currDes?.stuff?.map((l:any)=>(
                    <div>{l}</div>
                ))}
               
            </div>
        </div>
    );
}

export default List;
