class AuthControoler{
    static userRegistration=async(req,res)=>{
        res.send("user registration");
    };
    static userlogin=async(req,res)=>{
        res.send("user login");
    };
}
export default AuthControoler;