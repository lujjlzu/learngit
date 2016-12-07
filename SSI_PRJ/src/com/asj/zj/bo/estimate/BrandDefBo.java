package com.asj.zj.bo.estimate;

import java.io.Serializable;
/**
 * @author feihu
 * 手机品牌
 */

public class BrandDefBo implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int brand_id;
	
	private String brand_name;
	
	private int show_num;
	
	private  String  remark ;
	
    private String other_id;
    
    private int sts;
    
    private String pic;

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
	 * @return the brand_name
	 */
	public String getBrand_name() {
		return brand_name;
	}

	/**
	 * @param brand_name the brand_name to set
	 */
	public void setBrand_name(String brand_name) {
		this.brand_name = brand_name;
	}

	/**
	 * @return the show_num
	 */
	public int getShow_num() {
		return show_num;
	}

	/**
	 * @param show_num the show_num to set
	 */
	public void setShow_num(int show_num) {
		this.show_num = show_num;
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

	public String getPic() {
		return pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}
	
	
    
    
}
