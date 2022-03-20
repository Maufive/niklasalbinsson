import Image from 'next/image';
import ProfileImage from '../../public/profile-min.png';

const Profile = () => (
  <div className="relative flex h-fit">
    <div className="branded-gradient relative h-20 w-20 overflow-hidden rounded-full border-2 border-secondary p-2">
      <Image
        alt="Profile picture"
        src={ProfileImage}
        layout="fill"
        placeholder="blur"
      />
    </div>
    <div className="absolute inset-0 h-20 w-20 rounded-full opacity-10" />
  </div>
);

export default Profile;
