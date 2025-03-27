import { Card, CardMedia, CardContent, Typography } from '@mui/material'

interface PostProps {
  title: string;
  mediaUrl: string;
  description: string;
}

const PostBox = ({ title, mediaUrl, description }: PostProps) => {
  return (
    <Card sx={{ maxWidth: 600, mb: 4 }}>
      <CardMedia
        component="img"
        height="300"
        image={mediaUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostBox;