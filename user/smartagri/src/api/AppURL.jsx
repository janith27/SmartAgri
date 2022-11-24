

class AppURL {
  
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostAnyUserMsg = this.BaseURL+"/postanyusermsg"
    static UserLogin = this.BaseURL+"/login"
}

export default AppURL