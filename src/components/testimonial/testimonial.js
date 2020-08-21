import React from 'react'
import styled from 'styled-components/macro'
import Container from 'components/container/container'
import person1 from 'images/person1.png'
import { ReactComponent as DotGridBlueSm } from 'images/dot_grid_sm_blue.svg'
import {
  StyledTestimonials,
  InnerTestimonial,
  TestimonialItem,
  Feedback,
  PersonDetails,
  Name,
  Profession,
} from './testimonial-styles'

const Testimonials = () => {
  return (
    <StyledTestimonials>
      <div
        css={`
          position: absolute;
          bottom: 12%;
          left: 5%;
          z-index: -1;
          width: 100px;
          height: 100px;

          @media screen and (min-width: 2500px) {
            left: 25%;
          }
        `}
      >
        <DotGridBlueSm width="100%" height="auto" />
      </div>
      <Container>
        <InnerTestimonial>
          <TestimonialItem>
            <Feedback>
              <p>
                "Excellent platform to build up and hone skills in whatever
                field you are in."
              </p>
            </Feedback>
            <PersonDetails>
              <img src={person1} alt="person" />
              <div>
                <Name>John Doe</Name>
                <Profession>Software Engineer at Airbnb</Profession>
              </div>
            </PersonDetails>
          </TestimonialItem>
        </InnerTestimonial>
      </Container>
    </StyledTestimonials>
  )
}

export default Testimonials
