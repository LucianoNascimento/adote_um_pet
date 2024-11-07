function titulo() {
    return (
        
        
        <div className="container ">

            <div className="container-login">

                <div className="wrap-login">

                    <form className="login-from">

                        <h1 className="login-form-title ">Bem Vindos </h1>

                            <div className="warp-input">
                                <input className="input" type="email" /> 
                             <span className="focus-input" data-placeholder="email" ></span>
                            </div>

                            <div className="warp-input">
                                <input className="input" type="password" />
                             <span className="focus-input" data-placeholder="password" alt="senha "> </span>
                            </div>
 
                            <div className="container-login-for-btn">
                                <button className="login-for-btn ">Login</button>
                            </div>

                            <div className="text-center">
                                <span className="text1">
                                
                        </span>
                            </div>
                        
                    </form>
                </div>
            </div>
        </div>


    )
}
export default titulo;