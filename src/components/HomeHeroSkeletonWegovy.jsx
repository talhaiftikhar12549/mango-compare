import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeHeroSkeletonWegovy = () => {
  return (
    <div className="space-y-2">
      {[1, 2,3].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 rounded-xl bg-gray-100"
        >
          <div className="w-3/5">
            <Skeleton height={16} width="100%" />
          </div>
          <div className="w-1/5 text-right">
            <Skeleton height={16} width="80%" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeHeroSkeletonWegovy;
