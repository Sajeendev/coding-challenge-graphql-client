import { Skeleton } from '@mui/material';

interface SkeletonProps {
  height: number;
}

/**
 * standard  height for textfield : 50
 */
export const RectangularSkeletonComponent = ({ height }: SkeletonProps) => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="100%"
      height={height}
      sx={{ borderRadius: '5px' }}
    />
  );
};

export const CircularSkeletonComponent = ({ height }: SkeletonProps) => {
  return <Skeleton variant="circular" width={height} height={height} />;
};
