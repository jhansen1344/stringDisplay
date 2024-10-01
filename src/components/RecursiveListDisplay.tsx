interface RecursiveListProps {
    nestedList: any
}

export default function RecursiveListDisplay(props: RecursiveListProps) {
    console.log(props.nestedList);
    return (
        <ul className="dash">
            {Object.keys(props.nestedList)
                .map((key) => {
                    return !!props.nestedList[key]
                        ? <RecursiveListDisplay nestedList={props.nestedList[key]} />
                        : <li>{key} </li>
                })}
        </ul >
    )
}