import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faTiktok,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <img
            src="/image/sublogo.jpg"
            width="100"
            height="100"
            alt="Culminoサブ"
          />
          <div className={styles.sns}>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <ul className={styles.list}>
          <a href="#">
            <li>利用規約</li>
          </a>
          <a href="#">
            <li>プライバシーポリシー</li>
          </a>
          <a href="#">
            <li>特定商取引法</li>
          </a>
          <a href="#">
            <li>資産決済法</li>
          </a>
          <a href="#">
            <li>ガイドライン</li>
          </a>
          <a href="#">
            <li>よくあるお問合せ</li>
          </a>
          <a href="#">
            <li>企業情報</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
