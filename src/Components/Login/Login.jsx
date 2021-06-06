import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Login.module.css'
import loginLaptop from '../../Assets/Login.png';
import Form from '../Form/Form';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));


const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <div className={styles.topBubble}>
                        <h1 className={styles.DoofText}>DOOF</h1>
                        <Form/>
                    </div>
                    <div className={styles.bottomBubble}>
                        
                    </div>
                    <div className={styles.leftParagraph}>
                        <p className={styles.singleParagraph}>Terms of Service </p>
                        <p className={styles.singleParagraph}>Privacy Policy</p>
                    </div>
                </Grid>
    
                <Grid item xs={12} sm={6}>
                    <div className={styles.YellowBubble}>
                          
                            <div className=''>
                                <p className={styles.titleText}>Test</p>
                            </div>

                            <div className={styles.rightContent}>
                                <p className={styles.rightContentTitle}>Unlock your stuck revenue.</p>
                                <p className={styles.rightContentParagraph}>We help you unlock the true potential connect with your customers to understand the rights and wrongs with your product.</p>
                            </div>

                            <div className={styles.loginImg}>
                                <img src={loginLaptop} alt="login laptop" />
                            </div>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;