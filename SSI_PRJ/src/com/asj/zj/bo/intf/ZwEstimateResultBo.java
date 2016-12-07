/**
 * 
 */
package com.asj.zj.bo.intf;

import java.io.Serializable;

/**
 * @author feihu
 *
 */
public class ZwEstimateResultBo implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String problem_id;
	
	private String choice_item;

	/**
	 * @return the problem_id
	 */
	public String getProblem_id() {
		return problem_id;
	}

	/**
	 * @param problem_id the problem_id to set
	 */
	public void setProblem_id(String problem_id) {
		this.problem_id = problem_id;
	}

	/**
	 * @return the choice_item
	 */
	public String getChoice_item() {
		return choice_item;
	}

	/**
	 * @param choice_item the choice_item to set
	 */
	public void setChoice_item(String choice_item) {
		this.choice_item = choice_item;
	}
	
	

}
