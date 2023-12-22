"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import styles from './sass/GoogleButton.module.scss'

const GoogleButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';

  return (
    <button onClick={() =>signIn('google', { callbackUrl })} className={styles.google}>
      <FontAwesomeIcon icon={faG} className={styles.icon}/>
      Sign in with Google
    </button>
  );
};

export { GoogleButton };