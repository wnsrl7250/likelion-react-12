import { HomeSmile } from '@mynaui/icons-react';
import { Link } from 'react-router';

function HomeLink() {
  return (
    <Link to="/" aria-label="홈" className="translate-x-4 translate-y-4">
      <HomeSmile size={48} className="text-white" />
    </Link>
  );
}

export default HomeLink;
