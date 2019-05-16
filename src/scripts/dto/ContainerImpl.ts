class ContainerImpl implements Container {
    private containerCount:number;
    private containerNumber:string;
    private containerTypeCode:string;
    private entity:Entity;
    private fillDcId:string;
    private itemQty:number;
    private receiptDate:Date;
    private receivedDiscrepInd:string;
    private receivedStatusCode:string;
    private receiverName:string;
    private regionCode:string;
    private txnDate:Date;
    private uid:string;

    getContainerCount(): number {
        return this.containerCount;
    }

    getContainerNumber(): string {
        return this.containerNumber;
    }

    getContainerTypeCode(): string {
        return this.containerTypeCode;
    }

    getEntity(): Entity {
        return this.entity;
    }

    getFillDcId(): string {
        return this.fillDcId;
    }

    getItemQty(): number {
        return this.itemQty;
    }

    getReceiptDate(): Date {
        return this.receiptDate;
    }

    getReceivedDiscrepInd(): string {
        return this.receivedDiscrepInd;
    }

    getReceivedStatusCode(): string {
        return this.receivedStatusCode;
    }

    getReceiverName(): string {
        return this.receiverName;
    }

    getRegionCode(): string {
        return this.regionCode;
    }

    getTxnDate(): Date {
        return this.txnDate;
    }

    getUid(): string {
        return this.uid;
    }

    setContainerCount(value: number): void {
        this.containerCount = value;
    }

    setContainerNumber(value: string): void {
        this.containerNumber = value;
    }

    setContainerTypeCode(value: string): void {
        this.containerTypeCode = value;
    }

    setEntity(value: Entity): void {
        this.entity = value;
    }

    setFillDcId(value: string): void {
        this.fillDcId = value;
    }

    setItemQty(value: number): void {
        this.itemQty = value;
    }

    setReceiptDate(value: Date): void {
        this.receiptDate = value;
    }

    setReceivedDiscrepInd(value: string): void {
        this.receivedDiscrepInd = value;
    }

    setReceivedStatusCode(value: string): void {
        this.receivedStatusCode = value;
    }

    setReceiverName(value: string): void {
        this.receiverName = value;
    }

    setRegionCode(value: string): void {
        this.regionCode = value;
    }

    setTxnDate(value: Date): void {
        this.txnDate = value;
    }

    setUid(value: string): void {
        this.uid = value;
    }

}
