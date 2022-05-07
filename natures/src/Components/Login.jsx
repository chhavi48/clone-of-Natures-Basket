import { LoginContainer } from "./stlyed";
import { LoginContent } from "./stlyed";
import styles from './style.module.css';
// import { FillEnvelopeFill } from "react-icons/bs";

export const Login=()=>{
    return(
        <>
        <LoginContainer >
            <button>back</button>
            <LoginContent>
            <form className={styles.loginform}>
                <input type={"email"} placeholder='Email Address' />
                <input type={"text"} placeholder='Password' />
                <input type="submit" value='Login' />
            </form>
            <button className={styles.loginform}>Login via otp</button>
            </LoginContent>
        </LoginContainer>
        </>
    )
}