package com.asj.zj.bo.estimate;

import java.io.Serializable;
/**
 * @author feihu
 * 手机型号和参数映射关系
 */
public class PhoneTypeParamRelBo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int rel_id;
	
	private int phone_type_id;
	
	private int param_id;
	
	private int sts;

	/**
	 * @return the rel_id
	 */
	public int getRel_id() {
		return rel_id;
	}

	/**
	 * @param rel_id the rel_id to set
	 */
	public void setRel_id(int rel_id) {
		this.rel_id = rel_id;
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
	 * @return the param_id
	 */
	public int getParam_id() {
		return param_id;
	}

	/**
	 * @param param_id the param_id to set
	 */
	public void setParam_id(int param_id) {
		this.param_id = param_id;
	}

	/**
	 * @return the sts
	 */
	public int getSts() {
		return sts;
	}

	/**
	 * @param sts the sts to set
	 */
	public void setSts(int sts) {
		this.sts = sts;
	}
	
	

}
