import Post from './components/Post';
import './components/estilo.css'



function App() {
  return (
    <div className='App'>
      <h1>Post</h1>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </div>
  );
};

export default App;
