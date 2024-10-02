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
        <>
            <RecursiveListDisplay nestedList={mappedString} shouldSortAlphabetically={shouldSortAlphabetically} />
            <button onClick={() => setShouldSortAlphabetically(!shouldSortAlphabetically)}>{shouldSortAlphabetically ? ('Sort By Default') : ('Sort Alphabetically')}</button>
        </>
    )
}