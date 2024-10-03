
interface RecursiveListProps {
    nestedList: Map<string, any>
    shouldSortAlphabetically: boolean
}

export default function RecursiveListDisplay(props: RecursiveListProps) {
    let arrayFromMap = Array.from(props.nestedList);
    if (props.shouldSortAlphabetically) {
        arrayFromMap = arrayFromMap.sort();
    }
    return (
        <ul className="dash">
            {arrayFromMap
                .map(([key, nestedList]) => {
                    return nestedList !== null
                        ? <>
                            <li>{key} </li>
                            <RecursiveListDisplay nestedList={nestedList} shouldSortAlphabetically={props.shouldSortAlphabetically} />
                        </>
                        : <li>{key} </li>
                })}
        </ul >
    )
}