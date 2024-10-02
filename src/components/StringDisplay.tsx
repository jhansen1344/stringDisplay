import { useEffect, useState } from "react";
import parseKeyValuePairsRecursively from "../helpers/parseKeyValuePairsRecursively"
import RecursiveListDisplay from "./RecursiveListDisplay";


export default function StringDisplay() {
    const inputString = "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";
    const mapString = parseKeyValuePairsRecursively;
    const [mappedString, setMappedString] = useState<Map<string, any>>(new Map());
    const [shouldSortAlphabetically, setShouldSortAlphabetically] = useState<boolean>(true);

    useEffect(() => {
        setMappedString(mapString(inputString));
    }, [])
    return (
        <>
            <RecursiveListDisplay nestedList={mappedString} shouldSortAlphabetically={shouldSortAlphabetically} />
            <button onClick={() => setShouldSortAlphabetically(!shouldSortAlphabetically)}>{shouldSortAlphabetically ? ('Sort By Default') : ('Sort Alphabetically')}</button>
        </>
    )
}