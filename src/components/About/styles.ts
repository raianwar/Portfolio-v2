import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: block;

  .hard-skills{
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    align-items: start;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .skill-group{
    padding: 1.8rem;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 1.6rem;
    background: rgba(255,255,255,0.02);

    h4{
      margin: 0 0 1.4rem;
      font-size: 1.7rem;
      color: var(--white);
    }
  }

  .skill-list{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill-card{
    min-height: 9rem;
    min-width: 9rem;
    padding: 1rem 1.2rem;
    border-radius: 1.2rem;
    background: rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    text-align: center;

    img{
      width: 3.4rem;
    }

    span{
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.4;
    }
  }

  .skill-badge{
    min-height: 3.4rem;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    background: rgba(35, 211, 107, 0.14);
    color: var(--green);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .hard-skills{
      grid-template-columns: 1fr;
    }

    .skill-list{
      justify-content: center;
    }
  }
`
