import { TextField, Button } from '@mui/material';
import styles from '../VerifyEmail/VerifyEmail.module.css';
import Router from 'next/router';

import { useRef, useState } from 'react';

export default function VerifyEmail() {
  // Input Variables: updated by user input
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [code5, setCode5] = useState('');
  const [code6, setCode6] = useState('');
  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();
  const ref5 = useRef<any>();
  const ref6 = useRef<any>();
  //Mutation : use the codegen hook: which return a function (Login),
  //           and the lifecycle of the request
  //   const [Login, { data, loading, error }] = useLoginMutation();

  // Check if all fields are correct, and send the form to create User

  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.codeInput}
        value={code1}
        maxLength={1}
        ref={ref1}
        onChange={(e) => {
          setCode1(e.target.value);
          if (ref2 && ref2.current && e.target.value != '') {
            ref2.current.focus();
          }
        }}
      />
      <input
        type="text"
        className={styles.codeInput}
        maxLength={1}
        value={code2}
        onChange={(e) => {
          setCode2(e.target.value);
          if (ref3 && ref3.current) {
            ref3.current.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key == 'Backspace') {
            e.preventDefault();
            setCode2('');
            ref1.current.focus();
          }
        }}
        ref={ref2}
      />
      <input
        type="text"
        className={styles.codeInput}
        maxLength={1}
        value={code3}
        onChange={(e) => {
          setCode3(e.target.value);
          if (ref4 && ref4.current) {
            ref4.current.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key == 'Backspace') {
            e.preventDefault();
            setCode3('');
            ref2.current.focus();
          }
        }}
        ref={ref3}
      />
      <input
        type="text"
        className={styles.codeInput}
        maxLength={1}
        value={code4}
        onChange={(e) => {
          setCode4(e.target.value);
          if (ref5 && ref5.current) {
            ref5.current.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key == 'Backspace') {
            e.preventDefault();
            setCode4('');
            ref3.current.focus();
          }
        }}
        ref={ref4}
      />
      <input
        type="text"
        className={styles.codeInput}
        maxLength={1}
        value={code5}
        onChange={(e) => {
          setCode5(e.target.value);
          if (ref6 && ref6.current) {
            ref6.current.focus();
          }
        }}
        onKeyDown={(e) => {
          if (e.key == 'Backspace') {
            e.preventDefault();
            setCode5('');
            ref4.current.focus();
          }
        }}
        ref={ref5}
      />
      <input
        type="text"
        className={styles.codeInput}
        maxLength={1}
        value={code6}
        onChange={(e) => {
          setCode6(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == 'Backspace') {
            e.preventDefault();
            setCode6('');
            ref5.current.focus();
          }
        }}
        ref={ref6}
      />
    </form>
  );
}
