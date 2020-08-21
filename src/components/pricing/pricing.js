import React, { useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import Button from 'components/button/button'
import Container from 'components/container/container'
import {
  StyledPricing,
  PricingHeader,
  Prices,
  PriceItem,
  PriceTitle,
  PriceTag,
  Description,
  FeatureList,
} from './pricing-styles'

const Pricing = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Starter',
      price: 3000,
      description:
        'Perfect for new Learnkit students. Access your courses on the go and download course materials/videos to view later.',
      features: [
        'Access to enrolled courses',
        'Download files/videos',
        '24/7 customer support',
      ],
      btnText: 'Subscribe',
    },
    {
      id: 2,
      title: 'Pro',
      price: 8000,
      description:
        'Pro paths help you level up your skills to mirror that of a professional. 1on1 sessions helps you gain extra insights, tips, and so much more from our instructors.',
      features: ['All starter quirks', 'Pro paths', '1 on 1 sessions'],
      btnText: 'Get Pro',
    },
  ])

  return (
    <Container>
      <StyledPricing>
        <PricingHeader>
          <h1>Flexible plans.</h1>
        </PricingHeader>
        <Prices>
          {items.map(item => (
            <PriceItem key={item.id}>
              <div>
                <PriceTitle>{item.title}</PriceTitle>
                <PriceTag>
                  <span>P{item.price}</span>/month
                </PriceTag>
                <Description>
                  <p>{item.description}</p>
                </Description>
                <FeatureList>
                  <ul>
                    {item.features.map((feature, i) => (
                      <>
                        <li key={i}>
                          <FiCheck />
                          <span>
                            <strong>{feature}</strong>
                          </span>
                        </li>
                      </>
                    ))}
                  </ul>
                </FeatureList>
              </div>
              <Button inverse w={250}>
                {item.btnText}
              </Button>
            </PriceItem>
          ))}
        </Prices>
      </StyledPricing>
    </Container>
  )
}

export default Pricing
