import Image from 'next/image';
import hairNadya from '@public/nadya.jpg';
import styles from './Team.module.css';

export default function Team() {
  return (
    <div className={styles.teamSection}>
      <div className='container'>
        <div className={styles.teamContainer}>
          <div className={styles.myPhoto}>
            <Image src={hairNadya} alt='' />
          </div>
          <div className={styles.teamText}>
            <p>
              Привіт! Мене звуть Надія, я професійний перукар з більш ніж 7-річним досвідом
              створення приголомшливих образів для клієнтів. Моя пристрасть полягає в тому, щоб
              допомогти моїм клієнтам почуватися впевненими та красивими у будь-який день. Незалежно
              від того, чи то весілля, чи то якась подія, чи вам просто потрібно виглядати красиво
              кожен день! В нашому салоні працює чудова команда! Рекомендую!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
