import React from 'react';
const styles = require('./index.scss');

console.info(styles);

const Home = () => (
  <div>
    <h1 className={styles.title}>🌽 Cornfield Creative 🌽</h1>
  </div>
);

export default Home;
