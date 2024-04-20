import { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Destination } from "../class/Destination";

const AddDestination = () => {
    const [des, setDes] = useState<Destination>({});
    const myDispatch = useDispatch();

    const refName: any = useRef(null);
    const refPassword: any = useRef(null);
    const refWeather: any = useRef(null);
    const refDescription: any = useRef(null);
    const refStars: any = useRef(null);
    const refDuration: any = useRef(null);
    const refImage: any = useRef(null);
    const refLocation: any = useRef(null);


    const saveDes = () => {
        debugger;
        const currName: any = refName.current;
        const currPass: any = refPassword.current;
        const currWeather: any = refWeather.current;
        const currDescription: any = refDescription.current;
        const currStars: any = refStars.current;
        const currDuration: any = refDuration.current;
        const currImage: any = refImage.current;
        const currLocation: any = refLocation.current;

        if (!currName.value) {
            currName.style.borderColor = "red";
            refName.current.placeholder = "Enter Name";
        }
        if (!currPass.value) {
            currPass.style.borderColor = "red";
            refPassword.current.placeholder = "Enter Name";
        }
        if (!currWeather.value) {
            currWeather.style.borderColor = "red";
            refWeather.current.placeholder = "Enter Name";
        }
        if (!currDescription.value) {
            currDescription.style.borderColor = "red";
            refDescription.current.placeholder = "Enter Name";
        }
        if (!currStars.value) {
            currStars.style.borderColor = "red";
            refStars.current.placeholder = "Enter Name";
        }
        if (!currDuration.value) {
            currDuration.style.borderColor = "red";
            refDuration.current.placeholder = "Enter Name";
        }
        if (!currLocation.value) {
            currLocation.style.borderColor = "red";
            refLocation.current.placeholder = "Enter Name";
        }
        if (!currImage.value) {
            return;
        }


        if (currName.value && currPass.value && currWeather.value && currDescription.value && currStars.value && currDuration.value && currLocation.value){            
           axios.put('http://localhost:7777/myDestination/addDes', des).then(( )=>{
           alert(des.pic)
             myDispatch({type:'PUT', payload:des})
           }).catch((err:Error)=>{console.log(err)})
      }
    }

    const imageMap: { [key: string]: string } = 
    {
        "vina": "pic1.jpg",
        "sinai": "pic2.jpg",
        "moi": "pic3.jpg"
    }
    return (
        <> 
            <h1> add destination</h1>
            <h3>Enter the destination details</h3>

            <label>the name:</label>
            <input type="text" ref={refName} onChange={(e) => setDes({...des, destination: e.target.value})} />
            <br />

            <label>enter your password:</label>
            <input type="text" ref={refPassword} onChange={(e) => setDes({...des, password: e.target.value})} />
            <br />

            <label>the weather:</label>
            <input type="text" ref={refWeather} onChange={(e) => setDes({...des, weather: e.target.value})} />
            <br />

            <label>the lacation:</label>
            <input type="text" ref={refLocation} onChange={(e) => setDes({...des, location: e.target.value})} />
            <br />

            <label>the description:</label>
            <input type="text" ref={refDescription} onChange={(e) => setDes({...des, description: e.target.value})} />
            <br />

            <label>the stars:</label>
            <input type="text" ref={refStars} onChange={(e) => setDes({...des, stars: e.target.value})} />
            <br />

            <label>the duration:</label>
            <input type="text" ref={refDuration} onChange={(e) => setDes({...des, duration: e.target.value})} />
            <br />

            <label>Choose the image name:</label>
            <select ref={refImage} onChange={(e) => setDes({...des, pic: imageMap[e.target.value] })}>
                <option value=" "></option>
                <option value="vina">vina</option>
                <option value="sinai">sinai</option>
                <option value="moi">moi</option>
            </select>
            <br />

            <label>Enter the attractions available in this destination and their prices:</label>
            <input type="text" onChange={(e) => 
            {
                var arr:Array<string> = e.target.value.split(",");
                var arrAtt:Array<string>;
                var temp:Array<Object>=[]

                for(let i=0; i<arr.length; i++)
                {
                    arrAtt=arr[i].split(' '); 
                    temp.push({name:arrAtt[0], cost:parseInt(arrAtt[1])})
                }
               setDes({...des,attractions:temp})
            }}/>
            <br />

            <label>Insert the objects required for this destination:</label>
            <input type="text" onChange={(e) => setDes({...des, stuff: e.target.value.split(" ")})} />
            <br />

            <input type="submit" onClick={saveDes} />
        </>
    );
}

export default AddDestination;
