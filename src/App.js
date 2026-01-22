import Header from './Components/Header';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Listcourses from './Components/Listcourses';
import Listselection from './Components/Listselection';
import { useState, useEffect } from 'react';

function App() {

  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [view, setView] = useState('courses'); // 'selection' | 'courses'

  const fetchCourses = () => {
    fetch('http://192.168.1.24:8088/api/courses')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(console.error);
  };

    const fetchAll = () => {
    fetch('http://192.168.1.24:8088/api/allcourses')
      .then(res => res.json())
      .then(data => setAllArticles(data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchCourses();
    fetchAll();

    const interval = setInterval(() => {
    fetchCourses();
    fetchAll();
  }, 3000); // toutes les 3 secondes

  return () => clearInterval(interval); // n    
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: "'Dancing Script', cursive",
    },
  });

const checkArticle = (id) => {
  fetch(`http://192.168.1.24:8088/api/courses/${id}/check`, {
    method: 'PUT'
  })
  .then(() => {
    fetchAll();
    setArticles(prev =>
      prev.filter(article => article.id !== id)
    );
  })
  .catch(err => console.error(err));
};

  const uncheckArticle = (id) => {
    fetch(`http://192.168.1.24:8088/api/courses/${id}/uncheck`, { method: 'PUT' })
      .then(fetchCourses);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Header view={view} setView={setView} />

        {view === 'selection' && (
          <Listselection articles={allArticles} onCheck={checkArticle} />
        )}

        {view === 'courses' && (
          <Listcourses articles={articles} onUncheck={uncheckArticle} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
