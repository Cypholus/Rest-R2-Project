package com.example.demo.modelproject;

import java.sql.Date;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="resrvationdetails")
public class ModelSeat {
	@Id
		private int bookingid;
	private int servcharge;
		private String bookingname;
		private long custnumber;
		private String modname;
	private String prodname;
	private String desp;
		private String solution;
		private Date servdate;
		//one to one
		@OneToMany(cascade = CascadeType.ALL)
		@JoinColumn(name="fk")
		private List<SeatModel> bookingdetails;
		public List<SeatModel> getbookingdetails(){
			return bookingdetails;
		}
		public void setbookingdetails (List<SeatModel>bookingdetails) {
			this.bookingdetails=bookingdetails;
		}
		
		
		public int getBookingid() {
			return bookingid;
		}
		public void setBookingid(int bookingid) {
			this.bookingid = bookingid;
		}
		public String getBookingname() {
			return bookingname;
		}
		public void setBookingname(String bookingname) {
			this.bookingname = bookingname;
		}
		public long getCustnumber() {
			return custnumber;
		}
		public void setCustnumber(long custnumber) {
			this.custnumber = custnumber;
		}
		
	
	
		public ModelSeat(int bookingid, String bookingname, int servcharge, long custnumber, String solution, String prodname,String modname, String desp, Date servdate) {
			super();
			this.bookingid = bookingid;
			this.bookingname = bookingname;
			this.custnumber = custnumber;
	        this.servcharge= servcharge;
		    this.prodname=prodname;
		    this.modname=modname;
	     	this.desp=desp;
	    	this.servdate=servdate;
			this.solution = solution;
		}
		public ModelSeat() {
			super();
			// TODO Auto-generated constructor stub
		}
		public int getservsharge() {
			return servcharge;
		}
		public void setservcharge(int servcharge) {
			this.servcharge = servcharge;
		}
		public String getsolution() {
			return solution;
		}
		public void setsolution(String solution) {
			this.solution = solution;
		}
		public String getprodname() {
			return prodname;
		}
		public void setprodname(String prodname) {
			this.prodname = prodname;
		}
		public String getmodname() {
			return modname;
		}
		public void setmodname(String modname) {
			this.modname = modname;
		}
		public String getdesp() {
			return desp;
		}
		public void setdesp(String desp) {
			this.desp = desp;
		}
		public Date getservdate() {
			return servdate;
		}
		public void setservdate(Date servdate) {
			this.servdate = servdate;
		}
		
}

