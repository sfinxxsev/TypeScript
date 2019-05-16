package dto.java;

import java.util.Date;

public class ContainerDTO
{
	private java.lang.String _receiverName;
	private java.util.Date _receiptDate;
	private java.lang.String _receivedDiscrepInd;
	private java.lang.String _containerTypeCode;
	private java.lang.Integer _itemQty;
	private java.util.Date _txnDate;
	private java.lang.Integer _containerCount;
	private java.lang.String _regionCode;
	private java.lang.String _fillDcId;
	private java.lang.String _receivedStatusCode;
	private java.lang.String _containerNumber;
	private java.lang.String _uid;
	private java.lang.String _entity;


	public ContainerDTO()
	{

	}

	public Integer getContainerCount()
	{
		return this._containerCount;
	}

	public String getContainerNumber()
	{
		return this._containerNumber;
	}

	public String getContainerTypeCode()
	{
		return this._containerTypeCode;
	}

	public String getFillDcId()
	{
		return this._fillDcId;
	}

	public Integer getItemQty()
	{
		return this._itemQty;
	}

	public Date getReceiptDate()
	{
		return this._receiptDate;
	}

	public String getReceivedDiscrepInd()
	{
		return this._receivedDiscrepInd;
	}

	public String getReceivedStatusCode()
	{
		return this._receivedStatusCode;
	}

	public String getReceiverName()
	{
		return this._receiverName;
	}

	public String getRegionCode()
	{
		return this._regionCode;
	}

	public Date getTxnDate()
	{
		return this._txnDate;
	}

	public String getUid()
	{
		return this._uid;
	}

	public Entity getEntity()
	{
		return _entity;
	}

	public void setContainerCount(final Integer value)
	{
		this._containerCount = value;
	}

	public void setContainerNumber(final String value)
	{
		this._containerNumber = value;
	}

	public void setContainerTypeCode(final String value)
	{
		this._containerTypeCode = value;
	}

	public void setFillDcId(final String value)
	{
		this._fillDcId = value;
	}

	public void setItemQty(final Integer value)
	{
		this._itemQty = value;
	}

	public void setReceiptDate(final Date value)
	{
		this._receiptDate = value;
	}

	public void setReceivedDiscrepInd(final String value)
	{
		this._receivedDiscrepInd = value;
	}

	public void setReceivedStatusCode(final String value)
	{
		this._receivedStatusCode = value;
	}

	public void setReceiverName(final String value)
	{
		this._receiverName = value;
	}

	public void setRegionCode(final String value)
	{
		this._regionCode = value;
	}

	public void setTxnDate(final Date value)
	{
		this._txnDate = value;
	}

	public void setUid(final String value)
	{
		this._uid = value;
	}

	public void setEntity(final Entity value)
	{
		this._entity = value;
	}

}
