/**
 * 
 */
package com.asj.zj.bo.estimate;

import java.io.Serializable;

/**
 * @author feihu
 *
 */
/**
 * @author Administrator
 *
 */
public class OdEstimateBo implements Serializable{
	private float order_id         ;
	private int protection         ;
	private int brand              ;
	private int phone_type         ;
	private String imei               ;
	private String estimate_info1     ;
	private String estimate_info2     ;
	private String estimate_info3     ;
	private int  sts                ;
	private String sts_time           ;
	private String estimate_id        ;
	private int estimate_price     ;
	private String expires_in         ;
	private String exchange_method    ;
	private String exchange_method_des;
	private int op_id              ;
	private int org_id             ;
	private int county_code        ;
	private int region_code        ;
	private int prov_code          ;
	private String create_date        ;
	public float getOrder_id() {
		return order_id;
	}
	public void setOrder_id(float order_id) {
		this.order_id = order_id;
	}
	public int getProtection() {
		return protection;
	}
	public void setProtection(int protection) {
		this.protection = protection;
	}
	public int getBrand() {
		return brand;
	}
	public void setBrand(int brand) {
		this.brand = brand;
	}
	public int getPhone_type() {
		return phone_type;
	}
	public void setPhone_type(int phone_type) {
		this.phone_type = phone_type;
	}
	public String getImei() {
		return imei;
	}
	public void setImei(String imei) {
		this.imei = imei;
	}
	public String getEstimate_info1() {
		return estimate_info1;
	}
	public void setEstimate_info1(String estimate_info1) {
		this.estimate_info1 = estimate_info1;
	}
	public String getEstimate_info2() {
		return estimate_info2;
	}
	public void setEstimate_info2(String estimate_info2) {
		this.estimate_info2 = estimate_info2;
	}
	public String getEstimate_info3() {
		return estimate_info3;
	}
	public void setEstimate_info3(String estimate_info3) {
		this.estimate_info3 = estimate_info3;
	}
	public int getSts() {
		return sts;
	}
	public void setSts(int sts) {
		this.sts = sts;
	}
	public String getSts_time() {
		return sts_time;
	}
	public void setSts_time(String sts_time) {
		this.sts_time = sts_time;
	}
	public String getEstimate_id() {
		return estimate_id;
	}
	public void setEstimate_id(String estimate_id) {
		this.estimate_id = estimate_id;
	}
	public int getEstimate_price() {
		return estimate_price;
	}
	public void setEstimate_price(int estimate_price) {
		this.estimate_price = estimate_price;
	}
	public String getExpires_in() {
		return expires_in;
	}
	public void setExpires_in(String expires_in) {
		this.expires_in = expires_in;
	}
	public String getExchange_method() {
		return exchange_method;
	}
	public void setExchange_method(String exchange_method) {
		this.exchange_method = exchange_method;
	}
	public String getExchange_method_des() {
		return exchange_method_des;
	}
	public void setExchange_method_des(String exchange_method_des) {
		this.exchange_method_des = exchange_method_des;
	}
	public int getOp_id() {
		return op_id;
	}
	public void setOp_id(int op_id) {
		this.op_id = op_id;
	}
	public int getOrg_id() {
		return org_id;
	}
	public void setOrg_id(int org_id) {
		this.org_id = org_id;
	}
	public int getCounty_code() {
		return county_code;
	}
	public void setCounty_code(int county_code) {
		this.county_code = county_code;
	}
	public int getRegion_code() {
		return region_code;
	}
	public void setRegion_code(int region_code) {
		this.region_code = region_code;
	}
	public int getProv_code() {
		return prov_code;
	}
	public void setProv_code(int prov_code) {
		this.prov_code = prov_code;
	}
	public String getCreate_date() {
		return create_date;
	}
	public void setCreate_date(String create_date) {
		this.create_date = create_date;
	}

    
}
