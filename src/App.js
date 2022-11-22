// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.js'
import { Todo } from './components/Todo.js'
import { Footer } from './components/Footer.js';

function App() {
  
  const onDelete = (todo) => {
    console.log('nice');
    // let index = arr.indexOf(todo);
    // setState(arr.splice(index, 1))
  }

  let arr = [
    {
      id: 1,
      title: 'cleaning room',
      desc: 'clean every thing in the room',
    },
    {
      id: 2,
      title: 'Update C.V/Resume',
      desc: "Update resume and add React, Java and other techs under 'familiar with categories'.",
    },
    {
      id: 3,
      title: 'Check about CNCF',
      desc: 'doesnt need description'
    }
  ]

  return (
    <>
      <Header title='My Todo-List'></Header>
        <Todo todos={arr} onDelete={onDelete}></Todo>
      <Footer></Footer>
    </>

  );
}

export default App;
