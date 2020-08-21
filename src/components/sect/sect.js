import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { IoMdArrowForward } from 'react-icons/io'
import styled from 'styled-components/macro'
import Button from 'components/button/button'
import FeaturePng from 'images/072.png'
import { ReactComponent as BlobBCopy } from 'images/blob_b_copy.svg'
import { StyledSect, SectBlock, SectDetails, SectImg } from './sect-styles'

const Sect = () => {
  const isMobile = useMediaQuery({ maxWidth: 420 })

  return (
    <StyledSect>
      <div
        css={`
          position: absolute;
          bottom: 0;
          left: -10%;
          display: block;
          width: 700px;
          height: 700px;
          z-index: -1;

          @media screen and (min-width: 2500px) {
            left: 15%;
            bottom: -4%;
          }

          @media screen and (max-width: 768px) {
            width: 600px;
            height: 600px;
            left: -35%;
            bottom: -8%;
          }

          @media screen and (max-width: 420px) {
            width: 400px;
            height: 400px;
            left: -25%;
            bottom: 25%;
          }
        `}
      >
        <BlobBCopy width="100%" height="auto" />
      </div>
      <SectBlock>
        <SectImg>
          <img src={FeaturePng} alt="person illustration" />
        </SectImg>
        <SectDetails>
          <h1>
            Your pace. <br /> Your way.
          </h1>
          <p>
            Each student has their own learning style and preferences. Our
            learning system is smart enough to adapt to your needs and match
            whatever pace you are on.
          </p>
          <Button link>
            <span style={{ marginRight: '8px' }}>Check out our courses</span>{' '}
            <IoMdArrowForward size="1.5rem" />
          </Button>
        </SectDetails>
      </SectBlock>
    </StyledSect>
  )
}

export default Sect
