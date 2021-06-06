import React from 'react';
import styles from './Form.module.css'


const Form = () => {
    return (
        <div className={styles.formStyle}>
            <h2>Login</h2>
            
            <span className={styles.label}>Email</span>
            <br />
            <input type="email" placeholder='Email' className={styles.inputCustom}/>
            <br />

            <span className={styles.label}>Password</span>
            <br />
            <input type="password" name="" id="" placeholder='Password' className={styles.inputCustom}/> <span>Forget Password</span>
            <br />

            <button className={styles.customBtn}>Login</button>

            <p>Don’t have an account yet? <a  href="/#"><strong>Signup</strong></a> </p>
        </div>
    );
};

export default Form;