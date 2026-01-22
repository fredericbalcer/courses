import ArticleCard from './ArticleCard'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Listcourses({ articles, onUncheck }) {

      
  const articlesByCategorie = articles
  .filter(article => article.checked) // courses à faire
  .reduce((acc, article) => {
    const cat = article.categorie;

    if (!acc[cat]) {
      acc[cat] = [];
    }

    acc[cat].push(article);
    return acc;
  }, {});

 
  return (


<div>
{Object.entries(articlesByCategorie).map(([categorie, articles]) => (
  <Accordion key={categorie} sx={{ backgroundColor: '#ece9cf', margin: 2 }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h4">{categorie}</Typography>
    </AccordionSummary>

    <AccordionDetails>
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          image={article.image}
          title={article.title}
          checked={article.checked}
          actionLabel="✅"
          onAction={() => onUncheck(article.id)}          
        />
      ))}
    </AccordionDetails>
  </Accordion>
))}
</div>

    
  )
}

export default Listcourses
