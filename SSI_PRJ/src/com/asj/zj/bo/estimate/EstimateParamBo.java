package com.asj.zj.bo.estimate;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * @author feihu
 * 评估参数
 */
public class EstimateParamBo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int param_id;
	
	private String param_name;
	
	private int sts;
	
	private String other_id;
	
	private int is_checkbox;
	
	private  int is_global;
	
	private  int show_seq;
	
	private ArrayList<EstimateParamAttrBo> attrList;

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
	 * @return the param_name
	 */
	public String getParam_name() {
		return param_name;
	}

	/**
	 * @param param_name the param_name to set
	 */
	public void setParam_name(String param_name) {
		this.param_name = param_name;
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

	/**
	 * @return the is_checkbox
	 */
	public int getIs_checkbox() {
		return is_checkbox;
	}

	/**
	 * @param is_checkbox the is_checkbox to set
	 */
	public void setIs_checkbox(int is_checkbox) {
		this.is_checkbox = is_checkbox;
	}

	
	/**
	 * @return the is_global
	 */
	public int getIs_global() {
		return is_global;
	}

	/**
	 * @param is_global the is_global to set
	 */
	public void setIs_global(int is_global) {
		this.is_global = is_global;
	}

	/**
	 * @return the attrList
	 */
	public ArrayList<EstimateParamAttrBo> getAttrList() {
		return attrList;
	}

	/**
	 * @param attrList the attrList to set
	 */
	public void setAttrList(ArrayList<EstimateParamAttrBo> attrList) {
		this.attrList = attrList;
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
	
	

}
