import { Card, Typography, Box, IconButton, Avatar } from '@mui/material';
function ArticleCard({ image, title, actionLabel, onAction }) {
    
    
  return (
    <Card sx={{ backgroundColor: '#f5f0c8',display: 'flex', maxWidth: 300, alignItems: 'center', justifyContent: 'space-between', padding:1, margin: 1, boxShadow: 3 }}>
      
      {/* Image à gauche */}
      <Avatar
    //src={`http://192.168.1.24:8088/images/${image}`}
    src={`${process.env.REACT_APP_API_URL}/images/${image}`}
    alt={title}
    sx={{
      width: 64,
      height: 64,
      mr: 2
    }}
  />

      {/* Texte à droite */}
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h4" sx={{ alignSelf: 'center', marginRight: 3 }}>
            {title}
        </Typography>
        <IconButton onClick={onAction} color="success">
            {actionLabel}
        </IconButton>        
      </Box>

 
    </Card>
  );
}
export default ArticleCard;
