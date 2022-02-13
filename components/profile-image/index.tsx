import Image from 'next/image';
import ProfileImage from '../../public/profile-min.png';
import styles from './profile-image.module.scss';

const Profile = () => (
  <div className={styles.profileWrapper}>
    <div className={styles.imageWrapper}>
      <Image alt="Profile picture" src={ProfileImage} layout="fill" />
    </div>
    <span className={styles.profileOverlay} />
  </div>
);

export default Profile;
