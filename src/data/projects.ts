export interface Project{
  title:string;
  link:string
  techs:string[];
  img:string;
}

export const projects:Project[] = [
  {
    title:'Rick and Morty APP',
    link:'https://github.com/jom3/rick-and-morty-app',
    techs:['angular','typescript','javascript','tailwind'],
    img:'rickandmorty.jpg'
  },
  {
    title:'MovieDB APP',
    link:'https://github.com/jom3/moviedbApp',
    techs:['angular','typescript','javascript','tailwind'],
    img:'moviedb.svg'
  },
  {
    title:'TODO APP',
    link:'https://github.com/jom3/todo-app',
    techs:['angular','typescript','tailwind','json'],
    img:'todo.jpg'
  },
  {
    title:'Portfolio',
    link:'https://github.com/jom3/portfolio',
    techs:['nextjs','typescript','tailwind','zustand'],
    img:'portfolio.png'
  }
]