import { SimpleTrack as TrackType } from 'lib/types';
import styles from './top-tracks.module.scss';

interface TrackProps extends TrackType {
  ranking: number;
}

const Track: React.FC<TrackProps> = ({ ranking, songUrl, title, artist }) => (
  <div className={styles.track}>
    <p className={styles.ranking}>{ranking}</p>
    <div className={styles.trackNameWrapper}>
      <a
        className={styles.title}
        href={songUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p className={styles.artist}>{artist}</p>
    </div>
  </div>
);

export default Track;
