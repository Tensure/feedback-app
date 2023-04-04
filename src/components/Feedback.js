import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'


export default function Feedback() {

    const {company, level} = useParams();

    useEffect(() => {
            fetch('https://web-service-3eugyejtka-uc.a.run.app/feedback/?company='+company+'&level='+level, {  // Enter your IP address here
                method: 'GET',
                mode: 'cors',
            }).then((data) => {
                console.log("Feedback successful");
            }).catch((error) => {
                console.log('error: ' + error);
            })
        },[])


    return (<div>
        <div>Company: {company} </div>
        {level == 0 && <div>Sorry we couldn't meet expectations</div>}
        {level == 1 && <div>Medium Level, thank you</div>}
        {level == 2 && <div>Thank you for the positive feedback!</div>}
        </div>
    )
}