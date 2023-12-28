import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const StartGame = ({toggle}) => {
  return (
    <div>
      <Container>
        <div className='img'>
        <img src="https://images.unsplash.com/photo-1614767629805-3bbcf6e26c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpY2V8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </div>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .img img{
        border-radius: 10px;
    }

    .content{
        margin-left: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 96px;
            white-space: nowrap;
        }

    }
`

const Button = styled.button`
display: flex;
width: 220px;
font-size: 16px;
padding: 10px 18px;
flex-direction: column;
color:white;
background-color: black;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
border: 1px solid transparent;
cursor: pointer;


&:hover{
    background-color: white;
    border:1px solid black ;
    color: black;
    transition: 0ms.3s background ease-in;
}
`;
