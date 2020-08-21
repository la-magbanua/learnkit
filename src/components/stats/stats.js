import React from 'react'
import styled from 'styled-components/macro'
import Container from 'components/container/container'
import { StyledStats, InnerStats, StatsList, StatItem } from './stats-styles'

const Stats = () => {
  return (
    <StyledStats>
      <Container>
        <InnerStats>
          <h3>You are in good hands.</h3>
          <StatsList>
            <StatItem>
              <h2>450k+</h2>
              <p>Students enrolled in Learnkit.</p>
            </StatItem>
            <StatItem>
              <h2>150</h2>
              <p>Professional instructors</p>
            </StatItem>
            <StatItem>
              <h2>70</h2>
              <p>Courses offered</p>
            </StatItem>
          </StatsList>
        </InnerStats>
      </Container>
    </StyledStats>
  )
}

export default Stats
