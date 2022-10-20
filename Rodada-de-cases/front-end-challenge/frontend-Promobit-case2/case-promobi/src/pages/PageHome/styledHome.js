import styled from "styled-components"

export const Imagemfilme = styled.img`
    width: 220px;
    height: 300px;
    box-sizing: border-box;
    &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`
export const CardFilmes = styled.div`
   width: 300px;
   margin: 10px;
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items:center;
   text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);

`
export const MainConteiner = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;

`
export const Title = styled.p`
    color: #FFFFFF;
    font-family:'Arial Narrow Bold', sans-serif;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
`
export const Body = styled.div`
  background-image: radial-gradient(circle at 52.88% 52.88%, #8f87d9 0, #5e5e97 25%, #323556 50%, #0e0e1c 75%, #000000 100%);
`

export const Text = styled.h1`
 color: white;
 font-family: sans-serif;
 text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 40px;


@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`

export const ConjuntoText = styled.div`
 padding: 5rem;
 
`