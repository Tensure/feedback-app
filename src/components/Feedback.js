import {useEffect} from 'react';
import { useParams } from 'react-router-dom'


export default function Feedback() {

    const {company, level} = useParams();

    // useEffect(() => {
    //         fetch('https://web-service-3eugyejtka-uc.a.run.app/feedback/?company='+company+'&level='+level, {  // Enter your IP address here
    //             method: 'GET',
    //             mode: 'cors',
    //         }).then((data) => {
    //             console.log("Feedback successful");
    //         }).catch((error) => {
    //             console.log('error: ' + error);
    //         })
    //     },[])


    return (
        <div className="container grid grid-cols-3 gap-8 place-content-center mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <div></div>
        {/*<form className="text-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">*/}
        {/*    /!* Labels and inputs for form data *!/*/}
        {/*    <div className="mb-4">*/}
        {/*        <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>*/}
        {/*        <input onChange={handleCompany}*/}
        {/*               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
        {/*               value={company} type="text"/>*/}
        {/*    </div>*/}
        {/*    <div className="mb-4">*/}
        {/*        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>*/}
        {/*        <input onChange={handleName}*/}
        {/*               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
        {/*               value={name} type="text"/>*/}
        {/*    </div>*/}

        {/*    <div className="mb-4">*/}
        {/*        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>*/}
        {/*        <input onChange={handleEmail}*/}
        {/*               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
        {/*               value={email} type="email"/>*/}

        {/*    </div>*/}
        {/*    <div className="mb-4">*/}
        {/*        <label className="block text-gray-700 text-sm font-bold mb-2">Position</label>*/}
        {/*        <input onChange={handlePosition}*/}
        {/*               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
        {/*               value={position} type="text"/>*/}
        {/*    </div>*/}

        {/*    <button onClick={handleSubmit}*/}
        {/*            className="text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"*/}
        {/*            type="submit">*/}
        {/*        Submit*/}
        {/*    </button>*/}
        {/*</form>*/}
        <div className="text-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">Thank you representative of <strong>{company.toUpperCase()}</strong> for your feedback.</div>
        {level == 0 && <div className="block text-gray-700 text-sm font-bold mb-2">Sorry we couldn't meet expectations</div>}
        {level == 1 && <div className="block text-gray-700 text-sm font-bold mb-2">Medium Level, please update these copies</div>}
        {level == 2 && <div className="block text-gray-700 text-sm font-bold mb-2">Thank you for the positive feedback!</div>}
        </div>
        <div></div>
</div>
    )
}