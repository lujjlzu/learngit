package com.asj.zj.bo.intf;

import java.io.Serializable;
import java.util.ArrayList;

public class ZwEstimateBo  extends Object implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String tokenid;
	
	private String uuid;
	
	private String protection;
	
	private String phone_count;
	
	private ArrayList<ZwEstimateDeviceBo> estimate_info;

	/**
	 * @return the tokenid
	 */
	public String getTokenid() {
		return tokenid;
	}

	/**
	 * @param tokenid the tokenid to set
	 */
	public void setTokenid(String tokenid) {
		this.tokenid = tokenid;
	}

	/**
	 * @return the uuid
	 */
	public String getUuid() {
		return uuid;
	}

	/**
	 * @param uuid the uuid to set
	 */
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	/**
	 * @return the protection
	 */
	public String getProtection() {
		return protection;
	}

	/**
	 * @param protection the protection to set
	 */
	public void setProtection(String protection) {
		this.protection = protection;
	}

	/**
	 * @return the phone_count
	 */
	public String getPhone_count() {
		return phone_count;
	}

	/**
	 * @param phone_count the phone_count to set
	 */
	public void setPhone_count(String phone_count) {
		this.phone_count = phone_count;
	}

	/**
	 * @return the estimate_info
	 */
	public ArrayList<ZwEstimateDeviceBo> getEstimate_info() {
		return estimate_info;
	}

	/**
	 * @param estimate_info the estimate_info to set
	 */
	public void setEstimate_info(ArrayList<ZwEstimateDeviceBo> estimate_info) {
		this.estimate_info = estimate_info;
	}
	
	

}
