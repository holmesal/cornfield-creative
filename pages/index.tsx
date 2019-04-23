import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import styles from './index.scss';
// const styles = require('./index.scss');

console.info(styles);

const Home = () => (
  <div>
    <h1 className={styles.title}>🌽 Cornfield Creative 🌽</h1>
  </div>
);

export default Home;
