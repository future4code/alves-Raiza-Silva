import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'mag'}
          fotoUsuario={'https://www.correio24horas.com.br/fileadmin/_processed_/9/7/csm_Eva_Laco_a2df9085b8.jpg'}
          fotoPost={'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
        />

        <Post
          nomeUsuario={'Athena'}
          fotoUsuario={'https://www.petlove.com.br/images/breeds/193080/profile/original/border_collie-p.jpg?1532538415'}
          fotoPost={'https://picsum.photos/id/1012/3973/2639/'}
        />
      </MainContainer>
    );
  }
}

export default App;
