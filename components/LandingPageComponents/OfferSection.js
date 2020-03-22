import React from 'react'
import styled from 'styled-components'
// import Link from 'next/link'
import { Button } from 'antd'

const OfferContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0 4rem 0;
  @media screen and (min-width: 1026px) and (max-width: 1289px) {
    grid-template-columns: 1fr 1fr ;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    
    grid-template-columns: 1fr ;
    margin: 2rem 0 ;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 2rem 0 ;
  }
`

const OfferCard = styled.div`

  padding: 3rem;
display: grid;
gap:1.5rem;
grid-template-columns: 1fr;
width: 100%;
  background: #ffffff;
  box-shadow: 2px 2px 16px 0 rgba(118, 118, 118, 0.5);
  border-radius: 8px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;


  h3 {
    bottom: 0;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.38px;
    line-height: 1.5;

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
  }

 

  :hover {
    transform: scale(1.01);
    h3 {
      color: #653cad;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    min-height: initial;
   }

  /* Mobile */
  @media screen and (max-width: 768px) {
    min-height: initial;
  }

`

const OfferSection = () => (
  <div>

    <OfferContainer>

      {/* <Link href='/search'> */}

      <a rel='noopener noreferrer' target='_blank' href='https://blog.voluntarily.nz/pre-register'>

        <OfferCard>
          <figcaption>
            <h3>Can you help out?</h3>
            <p>
            Want to volunteer your time, or resources to help out someone in need? See what is needed and offer your skills.
            </p><Button size='large' shape='round' type='primary' style={{ marginTop: '1rem' }}>See how you can help</Button>
          </figcaption>
        </OfferCard>
      </a>
      {/* </Link> */}
      {/* <Link href='/act'> */}
      <a rel='noopener noreferrer' target='_blank' href='https://blog.voluntarily.nz/pre-register'>
        <OfferCard>

          <figcaption>
            <h3>Do you need a hand?</h3>
            <p>It’s okay to ask. We make it easy with templates that will help you communicate exactly what you need.
            </p>
            <Button size='large' shape='round' type='primary' style={{ marginTop: '1rem' }}>See what help is available</Button>
          </figcaption>
        </OfferCard>
      </a>
      {/* </Link> */}

    </OfferContainer>
  </div>
)

export default OfferSection
