import { useEffect, useState } from "react";
import useConvertStringToObject from "../hooks/useConvertStringToObject"
import RecursiveListDisplay from "./RecursiveListDisplay";


export default function StringDisplay() {
    const inputString = "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";
    const convertString = useConvertStringToObject;
    const [stringAsObject, setStringAsObject] = useState<any>({});

    useEffect(() => {
        setStringAsObject(convertString(inputString));
    }, [])
    return (
        <>
            <RecursiveListDisplay nestedList={stringAsObject} />

            <ul className="dash">
                <li>Item 1</li>
                <ul className="dash">
                    <li>indentedAgain</li>
                </ul>

            </ul>
        </>
    )
}