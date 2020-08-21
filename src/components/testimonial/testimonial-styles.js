import styled from 'styled-components'

export const StyledTestimonials = styled.div`
  position: relative;
  padding: 4rem 5rem 8rem 5rem;
  margin-top: 3rem;

  @media screen and (max-width: 420px) {
    padding: 4rem 0;
  }
`

export const InnerTestimonial = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  padding: 3rem 0;
`

export const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  max-width: 800px;

  @media screen and (max-width: 420px) {
    padding: 0 2rem;
  }
`

export const Feedback = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
    opacity: 87%;
  }

  @media screen and (max-width: 768px) {
    padding: 0 3.5rem;
  }

  @media screen and (max-width: 420px) {
    max-width: 100%;
    width: 100%;

    p {
      font-size: 1.5rem;
    }
  }
`

export const PersonDetails = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  padding: 1rem 3.5rem;

  img {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    padding: 1rem;
  }
`

export const Name = styled.p`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.2;
  margin: 0 0 8px 0;
  opacity: 87%;
`

export const Profession = styled.p`
  font-size: 1rem;
  margin: 0;
  opacity: 87%;
`
