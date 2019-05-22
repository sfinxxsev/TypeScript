class Dictionary <KeyType, ValueType> {
    // @ts-ignore
    private readonly itemMap: { [key in KeyType]?: ValueType };

    constructor() {
        this.itemMap = {};
    }

    public put(key: KeyType, value: ValueType): void {
        this.itemMap[key] = value;
    }

    public get(key: KeyType) {
        const value = this.itemMap[key];
        return this.isExists(value) ? value : null;
    }

    public getKeys() {
        let keys: KeyType[] = [];
        for(let key in this.itemMap) {
            keys.push(key);
        }

        return keys;
    }

    public getValues() {
        let values: ValueType[] = [];

        for(let key in this.itemMap) {
            let currentValue = this.itemMap[key];
            if(this.isExists(currentValue)) {
                values.push(currentValue);
            }
        }

        return values;
    }

    private isExists(value: ValueType | undefined): value is ValueType {
        return ( (value != null) && (typeof value !== 'undefined') );
    }
}

export { Dictionary };
