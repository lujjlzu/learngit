/**
 * 
 */
package com.asj.zj.bo.intf;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * @author feihu
 *
 */
public class ZwEstimateDeviceBo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	public ZwEstimateDeviceBo() {
		// TODO Auto-generated constructor stub
	}
	
	
	private String device_id;
	
	private String imei;
	
	private ArrayList<ZwEstimateResultBo> estimate_result;
	


	/**
	 * @return the device_id
	 */
	public String getDevice_id() {
		return device_id;
	}

	/**
	 * @param device_id the device_id to set
	 */
	public void setDevice_id(String device_id) {
		this.device_id = device_id;
	}

	/**
	 * @return the imei
	 */
	public String getImei() {
		return imei;
	}

	/**
	 * @param imei the imei to set
	 */
	public void setImei(String imei) {
		this.imei = imei;
	}

	/**
	 * @return the estimate_result
	 */
	public ArrayList<ZwEstimateResultBo> getEstimate_result() {
		return estimate_result;
	}

	/**
	 * @param estimate_result the estimate_result to set
	 */
	public void setEstimate_result(ArrayList<ZwEstimateResultBo> estimate_result) {
		this.estimate_result = estimate_result;
	}


	

}
