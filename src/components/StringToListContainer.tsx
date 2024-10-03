import { useEffect, useState } from "react";
import parseKeyValueStringRecursively from "../helpers/parseKeyValueStringRecursively"
import RecursiveListDisplay from "./RecursiveListDisplay";

interface StringToListContainerProps {
    inputString: string;
}

export default function StringToListContainer(props: StringToListContainerProps) {
    const mapString = parseKeyValueStringRecursively;
    const [mappedString, setMappedString] = useState<Map<string, any>>(new Map());
    const [shouldSortAlphabetically, setShouldSortAlphabetically] = useState<boolean>(false);

    useEffect(() => {
        setMappedString(mapString(props.inputString));
    }, [])
    return (
        <div className={"grid-container"}>
            <div className={"center-div"}>
                <div style={{ marginBottom: "2rem", paddingTop: "1rem" }}>
                    <p style={{ fontSize: "1.35rem", display: "inline", marginTop: "1rem" }}>String Parser</p>
                    <button className="toggleButton" onClick={() => setShouldSortAlphabetically(!shouldSortAlphabetically)}>{shouldSortAlphabetically ? ('View Default') : ('View Alphabetically')}</button>
                </div>
                <p style={{ fontSize: ".9rem", marginTop: ".4rem" }}><b>Input String:</b> {props.inputString}</p>
                <hr />
                <p style={{ fontSize: ".9rem" }}><b>{shouldSortAlphabetically ? 'Alphabetical ' : 'Default '}Parsed Output:</b></p>
                <RecursiveListDisplay nestedList={mappedString} shouldSortAlphabetically={shouldSortAlphabetically} />
            </div>
        </div>
    )
}