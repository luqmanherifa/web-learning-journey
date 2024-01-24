import Link from 'next/link';
import React from 'react';
import styles from './Register.module.scss';

const RegisterView = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register Page</h1>
      <p>
        Sudah punya akun? Login <Link href={'/auth/login'}>di sini</Link>
      </p>
      <div className={styles.register__form}>
        <form action="">
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className={styles.register__form__item__input}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
