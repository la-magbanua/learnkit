import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as BlobSM } from 'images/blob_sm.svg'
import { ReactComponent as BlobMD } from 'images/blob_md.svg'
import { ReactComponent as BlobLG } from 'images/blob_lg.svg'
import Container from 'components/container/container'
import Button from 'components/button/button'
import { StyledCTA, InnerCTA } from './cta-styles'

const CTA = () => {
  return (
    <StyledCTA>
      <div
        css={`
          position: absolute;
          top: -15%;
          left: 20%;
          width: 120px;
          height: 120px;

          @media screen and (max-width: 420px) {
            width: 80px;
            height: 80px;
            top: -25%;
            left: 0;
          }
        `}
      >
        <BlobMD width="100%" height="auto" />
      </div>
      <div
        css={`
          position: absolute;
          bottom: 15%;
          left: 22%;
          width: 80px;
          height: 80px;

          @media screen and (max-width: 768px) {
            width: 100px;
            height: 100px;
            bottom: 5%;
            left: 5%;
          }

          @media screen and (max-width: 420px) {
            width: 100px;
            height: 100px;
            bottom: -15%;
            left: -15%;
          }
        `}
      >
        <BlobLG width="100%" height="auto" />
      </div>

      <div
        css={`
          position: absolute;
          bottom: 15%;
          right: 10%;
          width: 400px;
          height: 400px;

          @media screen and (max-width: 768px) {
            width: 200px;
            height: 200px;
            bottom: 10%;
            right: -10%;
          }

          @media screen and (max-width: 420px) {
            width: 150px;
            height: 150px;
            bottom: 10%;
            right: -8%;
          }
        `}
      >
        <BlobSM width="100%" height="auto" />
      </div>
      <Container>
        <InnerCTA>
          <h3>Start gaining skills.</h3>
          <Button w={200} huge primary>
            Sign up
          </Button>
        </InnerCTA>
      </Container>
    </StyledCTA>
  )
}

export default CTA
