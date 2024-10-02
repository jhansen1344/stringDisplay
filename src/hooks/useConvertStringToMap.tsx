
const useConvertStringToMap = (rawString: string) => {


    let customFieldsMap = new Map();
    customFieldsMap.set("c1", null);
    customFieldsMap.set("c2", null);
    customFieldsMap.set("c3", null);

    let typeMap = new Map();
    typeMap.set("id", null);
    typeMap.set("name", null);
    typeMap.set("customFields", customFieldsMap);

    let map = new Map();
    map.set("id", null);
    map.set("name", null);
    map.set("email", null);
    map.set("type", typeMap);
    map.set("externalId", null);
    return map;
}

export default useConvertStringToMap 