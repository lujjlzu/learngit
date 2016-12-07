/**
 * 
 */
package com.asj.zj.bo.estimate;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * @author feihu
 * 手机型号评估参数属性
 */
public class PhoneTypeParamAttrBo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
    private int brand_id;
	
	private int phone_type_id;
	
	private ArrayList<EstimateParamBo> paramList;
	
	private String other_brand_id;
	
	private String other_type_id;

	/**
	 * @return the brand_id
	 */
	public int getBrand_id() {
		return brand_id;
	}

	/**
	 * @param brand_id the brand_id to set
	 */
	public void setBrand_id(int brand_id) {
		this.brand_id = brand_id;
	}

	/**
	 * @return the phone_type_id
	 */
	public int getPhone_type_id() {
		return phone_type_id;
	}

	/**
	 * @param phone_type_id the phone_type_id to set
	 */
	public void setPhone_type_id(int phone_type_id) {
		this.phone_type_id = phone_type_id;
	}

	/**
	 * @return the paramList
	 */
	public ArrayList<EstimateParamBo> getParamList() {
		return paramList;
	}

	/**
	 * @param paramList the paramList to set
	 */
	public void setParamList(ArrayList<EstimateParamBo> paramList) {
		this.paramList = paramList;
	}

	/**
	 * @return the other_brand_id
	 */
	public String getOther_brand_id() {
		return other_brand_id;
	}

	/**
	 * @param other_brand_id the other_brand_id to set
	 */
	public void setOther_brand_id(String other_brand_id) {
		this.other_brand_id = other_brand_id;
	}

	/**
	 * @return the other_type_id
	 */
	public String getOther_type_id() {
		return other_type_id;
	}

	/**
	 * @param other_type_id the other_type_id to set
	 */
	public void setOther_type_id(String other_type_id) {
		this.other_type_id = other_type_id;
	}
	
	
	
	

}
