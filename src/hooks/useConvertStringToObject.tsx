
const useConvertStringToObject = (rawString: string) => {

    return {
        "id": null,
        "name": null,
        "email": null,
        "type": {
            "id": null,
            "name": null,
            "customFields": {
                "c1": null,
                "c2": null,
                "c3": null
            },
        },
        "externalId": null
    }
}

export default useConvertStringToObject 