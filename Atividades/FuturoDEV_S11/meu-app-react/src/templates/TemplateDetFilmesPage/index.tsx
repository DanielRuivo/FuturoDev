import React from 'react';
import { useParams } from 'react-router-dom';
import TemplateBase from '../TemplateBase';
import MovieDetails from '../../organisms/MovieDetails';

// Reutilizando o mock de dados com sinopse da DetalhesFilmePage original
const mockMoviesWithSynopsis = [
  {
    id: 1,
    title: 'A Origem',
    posterUrl: 'https://via.placeholder.com/300x450/0000FF/FFFFFF?text=A+Origem',
    genre: 'Ficção Científica, Ação',
    ageRating: '14',
    synopsis: 'Dom Cobb é um ladrão habilidoso, o melhor na perigosa arte da extração, roubando segredos valiosos das profundezas do subconsciente durante o estado de sonho, quando a mente está mais vulnerável. A rara habilidade de Cobb o tornou um jogador cobiçado neste novo mundo traiçoeiro de espionagem corporativa, mas também o tornou um fugitivo internacional e custou tudo o que ele já amou. Agora, Cobb recebe uma chance de redenção.'
  },
  {
    id: 2,
    title: 'Interestelar',
    posterUrl: 'https://via.placeholder.com/300x450/FF0000/FFFFFF?text=Interestelar',
    genre: 'Ficção Científica, Drama',
    ageRating: '12',
    synopsis: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.'
  },
  {
    id: 3,
    title: 'O Poderoso Chefão',
    posterUrl: 'https://via.placeholder.com/300x450/008000/FFFFFF?text=Poderoso+Chefão',
    genre: 'Drama, Crime',
    ageRating: '16',
    synopsis: 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.'
  },
  {
    id: 4,
    title: 'Batman: O Cavaleiro das Trevas',
    posterUrl: 'https://via.placeholder.com/300x450/FFFF00/000000?text=Cavaleiro+Trevas',
    genre: 'Ação, Crime, Drama',
    ageRating: '12',
    synopsis: 'Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal.'
  },
  {
    id: 5,
    title: 'Pulp Fiction: Tempo de Violência',
    posterUrl: 'https://via.placeholder.com/300x450/FFA500/000000?text=Pulp+Fiction',
    genre: 'Crime, Drama',
    ageRating: '18',
    synopsis: 'Vincent Vega e Jules Winnfield são dois assassinos profissionais que trabalham para Marsellus Wallace. Vega é forçado a sair com a garota do chefe, temendo passar dos limites; enquanto isso, o pugilista Butch Coolidge se mete em apuros por ganhar uma luta que deveria perder.'
  },
  {
    id: 6,
    title: 'Clube da Luta',
    posterUrl: 'https://via.placeholder.com/300x450/800080/FFFFFF?text=Clube+da+Luta',
    genre: 'Drama',
    ageRating: '18',
    synopsis: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor de sabonetes chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla Singer, atrai a atenção de Tyler.'
  },
];

const TemplateDetFilmesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = parseInt(id || '0', 10);
  const movie = mockMoviesWithSynopsis.find((m) => m.id === movieId);

  return (
    <TemplateBase>
      {movie ? (
        <MovieDetails movie={movie} />
      ) : (
        <div>Filme não encontrado!</div>
      )}
    </TemplateBase>
  );
};

export default TemplateDetFilmesPage;
