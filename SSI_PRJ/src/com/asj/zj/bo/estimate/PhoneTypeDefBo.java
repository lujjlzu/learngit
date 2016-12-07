package com.asj.zj.bo.estimate;

import java.io.Serializable;
/**
 * @author feihu
 * 手机类型
 */

public class PhoneTypeDefBo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int type_id;
	
	private int brand_id;
	
	private String type_name;
	
	private String phone_desc;
	
	private String remark;
	
	private int  show_seq;
	
	private int sts;
	
	private String other_id;
	
	private String pic;

	/**
	 * @return the type_id
	 */
	public int getType_id() {
		return type_id;
	}

	/**
	 * @param type_id the type_id to set
	 */
	public void setType_id(int type_id) {
		this.type_id = type_id;
	}

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
	 * @return the type_name
	 */
	public String getType_name() {
		return type_name;
	}

	/**
	 * @param type_name the type_name to set
	 */
	public void setType_name(String type_name) {
		this.type_name = type_name;
	}

	/**
	 * @return the phone_desc
	 */
	public String getPhone_desc() {
		return phone_desc;
	}

	/**
	 * @param phone_desc the phone_desc to set
	 */
	public void setPhone_desc(String phone_desc) {
		this.phone_desc = phone_desc;
	}

	/**
	 * @return the remark
	 */
	public String getRemark() {
		return remark;
	}

	/**
	 * @param remark the remark to set
	 */
	public void setRemark(String remark) {
		this.remark = remark;
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

	public String getPic() {
		return pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}
	
	

	
}
