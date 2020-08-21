import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { RiFocus2Line, RiSpeedLine, RiGroupLine } from 'react-icons/ri'
import Container from 'components/container/container'
import { ReactComponent as BlobComplex2 } from 'images/blob_complex2.svg'
import { StyledSect, Items, Item, ItemIcon } from './feats-styles'

const Sect = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      description: `Students are taught the right skills for the right scenario with varying levels of difficulty. `,
      icon: <RiFocus2Line size="2.2rem" />,
    },
    {
      id: 2,
      description: `Our system is smart enough to adapt to your needs and match whatever pace you are on.`,
      icon: <RiSpeedLine size="2.2rem" />,
    },
    {
      id: 3,
      description: `We have the best and capable instructors that are ready to share knowledge and guide you.`,
      icon: <RiGroupLine size="2.2rem" />,
    },
  ])
  return (
    <Container>
      <StyledSect>
        <div
          css={`
            position: absolute;
            bottom: -50%;
            right: -65%;
            display: block;
            width: 1800px;
            height: 1000px;
            z-index: -1;
          `}
        >
          <BlobComplex2 width="100%" height="auto" />
        </div>
        <h2>Learn efficiently and effectively.</h2>
        <Items>
          {items.map(item => (
            <Item key={item.id}>
              <ItemIcon>{item.icon}</ItemIcon>
              <p>{item.description}</p>
            </Item>
          ))}
        </Items>
      </StyledSect>
    </Container>
  )
}

export default Sect
