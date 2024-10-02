import { useEffect, useState } from "react";
import parseKeyValuePairsRecursively from "../helpers/parseKeyValuePairsRecursively"
import RecursiveListDisplay from "./RecursiveListDisplay";

interface StringToListContainerProps {
    inputString: string;
}

export default function StringToListContainer(props: StringToListContainerProps) {
    const mapString = parseKeyValuePairsRecursively;
    const [mappedString, setMappedString] = useState<Map<string, any>>(new Map());
    const [shouldSortAlphabetically, setShouldSortAlphabetically] = useState<boolean>(false);

    useEffect(() => {
        setMappedString(mapString(props.inputString));
    }, [])
    return (
        <div className={"grid-container"}>
            <div className={"center-div"}>
                <p style={{ fontSize: "1.35rem", display: "inline" }}>STRING PARSER</p>
                <button className="toggleButton" onClick={() => setShouldSortAlphabetically(!shouldSortAlphabetically)}>{shouldSortAlphabetically ? ('View Default') : ('View Alphabetically')}</button>
                <p style={{ fontSize: ".9rem" }}><b>Original String:</b> {props.inputString}</p>
                <hr />
                <p style={{ fontSize: ".9rem" }}><b>{shouldSortAlphabetically ? 'Alphabetical ' : 'Default '}Parsed Output:</b></p>
                <RecursiveListDisplay nestedList={mappedString} shouldSortAlphabetically={shouldSortAlphabetically} />
            </div>
        </div>
    )
}