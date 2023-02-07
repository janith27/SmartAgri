

class AppURL {
  
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostAnyUserMsg = this.BaseURL+"/postanyusermsg"
    static UserLogin = this.BaseURL+"/login"
    static UserData = this.BaseURL+"/user"
    static UserForgetPassword = this.BaseURL+"/forgetpassword"
    static UserResetPassword = this.BaseURL+"/resetpassword"
    static FarmerRegister = this.BaseURL+"/fregister"
    static SupplierRegister = this.BaseURL+"/sregister"
    static InstructorRegister = this.BaseURL+"/insregister"
    static ProductData = this.BaseURL+"/productlist"
    static JournalData = this.BaseURL+"/addjournal"
    static JournalDatas = this.BaseURL+"/addjournals"
    static InputCropLog = this.BaseURL+"/inputcroplog"
    static CreateAppointment = this.BaseURL+"/appointmentcreate"

    static InstructorData(keycity){
        return this.BaseURL+"/instructordetails/"+keycity;
    }

    static FarmerData(keyemail){
        return this.BaseURL+"/farmerdetails/"+keyemail;
    }

    static CropLogData(keyemail){
        return this.BaseURL+"/croplog/"+keyemail;
    }

    static InstructorDetailEmail(keyemail){
        return this.BaseURL+"/appointmentform/"+keyemail;
    }

}

export default AppURL