import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface PropTypes {
  title: string;
  imageUrl: string;
  testId: string;
}

const HottestDealCardComponent = ({ title, imageUrl, testId }: PropTypes) => {
  return (
    <Card sx={{ maxWidth: 345 }} data-testid={testId}>
      <CardActionArea>
        <CardMedia component="img" height="120" image={imageUrl} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HottestDealCardComponent;
