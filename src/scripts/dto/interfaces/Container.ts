interface Container {

    getContainerCount():number;

    getContainerNumber():string;

    getContainerTypeCode():string;

    getFillDcId():string;

    getItemQty():number;

    getReceiptDate():Date;

    getReceivedDiscrepInd():string;

    getReceivedStatusCode():string;

    getReceiverName():string;

    getRegionCode():string;

    getTxnDate():Date;

    getUid():string;

    getEntity():Entity;


    setContainerCount(value:number):void;

    setContainerNumber(value:string):void;

    setContainerTypeCode(value:string):void;

    setFillDcId(value:string):void;

    setItemQty(value:number):void;

    setReceiptDate(value:Date):void;

    setReceivedDiscrepInd(value:string):void;

    setReceivedStatusCode(value:string):void;

    setReceiverName(value:string):void;

    setRegionCode(value:string):void;

    setTxnDate(value:Date):void;

    setUid(value:string):void;

    setEntity(value:Entity):void;
}
