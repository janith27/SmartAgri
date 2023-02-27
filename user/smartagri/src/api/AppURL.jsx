class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseURL + "/getvisitor";
  static PostAnyUserMsg = this.BaseURL + "/postanyusermsg";
  static UserLogin = this.BaseURL + "/login";
  static UserData = this.BaseURL + "/user";
  static UserForgetPassword = this.BaseURL + "/forgetpassword";
  static UserResetPassword = this.BaseURL + "/resetpassword";
  static FarmerRegister = this.BaseURL + "/fregister";
  static SupplierRegister = this.BaseURL + "/sregister";
  static InstructorRegister = this.BaseURL + "/insregister";
  static ProductData = this.BaseURL + "/productlist";
  static JournalData = this.BaseURL + "/addjournal";
  static JournalView = this.BaseURL + "/viewjournal";
  static InputCropLog = this.BaseURL + "/inputcroplog";
  static CreateAppointment = this.BaseURL + "/appointmentcreate";
  static ProductDatas = this.BaseURL + "/addsupply";
  static PlaceOrder = this.BaseURL + "/placeorder";

  static SupplyView = this.BaseURL + "/supplyview";
  
  static MySupply(keyemail) {
    return this.BaseURL + "/mysellingitems/" + keyemail;
  }

  
  static GetInstructorData(keycity) {
    return this.BaseURL + "/instructordetails/" + keycity;
  }

  static FarmerData(keyemail) {
    return this.BaseURL + "/farmerdetails/" + keyemail;
  }

  static CropLogData(keyemail) {
    return this.BaseURL + "/croplog/" + keyemail;
  }

  static DeleteCropLog(keyid) {
    return this.BaseURL + "/deletecroplog/" + keyid;
  }

  static DeleteAppointment(keyid) {
    return this.BaseURL + "/deleteappointment/" + keyid;
  }

  static AppointmentView(keyemail) {
    return this.BaseURL + "/appointmentview/" + keyemail;
  }


  static JournalDetailView(keyid) {
    return this.BaseURL + "/journaldetailview/" + keyid;
  }

  static DeleteJournal(keyid) {
    return this.BaseURL + "/deletejournal/" + keyid;
  }

  static DeleteItem(keyid) {
    return this.BaseURL + "/deleteitem/" + keyid;
  }
  
  static InstructorGetMyAppointment(keyemail) {
    return this.BaseURL + "/instructorgetmyappointment/" + keyemail;
  }

  static AppointmentStatusUpdate(keyid) {
    return this.BaseURL + "/appointmentstatusupdate/" + keyid;
  }

  instructorgetmyappointment;

  static InstructorDetailEmail(keyemail) {
    return this.BaseURL + "/appointmentform/" + keyemail;
  }

  static SupplierGetOrders(keyemail) {
    return this.BaseURL + "/myorders/" + keyemail;
  }

 
  // admin api
  //Farmer
  static AllFarmerData = this.BaseURL + "/allfarmersdetails";
  static DeleteFarmer(keyemail) {
    return this.BaseURL + "/deletefarmer/" + keyemail;
  }
  static UpdateFarmer(keyemail) {
    return this.BaseURL + "/farmerupdate/" + keyemail;
  }

  //Instructor
  static InstructorData = this.BaseURL + "/allinstructordetails";
  static DeleteFarmer(keyemail) {
    return this.BaseURL + "/deleteinstructor/" + keyemail;
  }

  //Supplier
  static SupplierData = this.BaseURL + "/allsupplierdetails";
  static DeleteSupplier(keyemail) {
    return this.BaseURL + "/deletesupplier/" + keyemail;
  }

  //any user message
  static AnyUserMessage = this.BaseURL + "/anyusermessage";
  static DeleteAnyUserMessage(keyid) {
    return this.BaseURL + "/deleteanyusermessage/" + keyid;
  }

  //Pie Chart Data
  static UserPieChartData = this.BaseURL + "/userpiechart";
  static UserAreaChartData = this.BaseURL + "/newuserchart";

  //Admin Register
  static AdminRegister = this.BaseURL + "/adminregister";
  static AdminData = this.BaseURL + "/admindetails";
  static AdminDelete(keyid) {
    return this.BaseURL + "/admindelete/" + keyid;
  }

  //Get Visitor details
  static VisitorData = this.BaseURL + "/visitordetails";
}

export default AppURL;
