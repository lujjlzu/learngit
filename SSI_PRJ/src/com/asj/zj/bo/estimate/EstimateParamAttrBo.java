package com.asj.zj.bo.estimate;

import java.io.Serializable;
/**
 * @author feihu
 * 手机评估参数属性
 */
public class EstimateParamAttrBo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int param_attr_id;
	
	private int param_id;
	
	private String param_attr;
	
	private int sts;
	
	private int show_seq;
	
	private String other_id;

	/**
	 * @return the param_attr_id
	 */
	public int getParam_attr_id() {
		return param_attr_id;
	}

	/**
	 * @param param_attr_id the param_attr_id to set
	 */
	public void setParam_attr_id(int param_attr_id) {
		this.param_attr_id = param_attr_id;
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
	 * @return the param_attr
	 */
	public String getParam_attr() {
		return param_attr;
	}

	/**
	 * @param param_attr the param_attr to set
	 */
	public void setParam_attr(String param_attr) {
		this.param_attr = param_attr;
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

	/**
	 * @return the show_seq
	 */
	public int getShow_seq() {
		return show_seq;
	}

	/**
	 * @param show_seq the show_seq to set
	 */
	public void setShow_seq(int show_seq) {
		this.show_seq = show_seq;
	}

	/**
	 * @return the other_id
	 */
	public String getOther_id() {
		return other_id;
	}

	/**
	 * @param other_id the other_id to set
	 */
	public void setOther_id(String other_id) {
		this.other_id = other_id;
	}
	
	

}
