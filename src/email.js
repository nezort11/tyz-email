import React from "react";

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText,
  MjmlDivider,
  MjmlFont,
  MjmlSocialElement,
  MjmlSocial,
} from "mjml-react";

const COLOR_BLACK_BLUE = "#191836";

const COLOR_DARK_BLUE = "#454295";

const textStyles = {
  fontSize: 16,
  lineHeight: 24,
  fontWeight: 400,
  fontFamily: "Inter",
};

export const generate = () => {
  return (
    <Mjml lang="en">
      <MjmlHead>
        <MjmlTitle>TYZ Ecosystem Email Verification</MjmlTitle>
        <MjmlPreview>TYZ Ecosystem Email Verification..</MjmlPreview>
        <MjmlFont
          name="Inter"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor={COLOR_BLACK_BLUE}>
          <MjmlColumn>
            <MjmlImage
              src="https://www.dropbox.com/s/lylk6bgeo4g1d3t/tyz-logo.png?dl=1"
              width={112}
              height="auto"
            />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              {...textStyles}
              color="#333333"
              fontSize={24}
              fontWeight={700}
            >
              Login Verification
            </MjmlText>
            <MjmlText {...textStyles}>Your verification code:</MjmlText>
            <MjmlText
              {...textStyles}
              color={COLOR_DARK_BLUE}
              fontSize={24}
              fontWeight={700}
              paddingBottom={30}
            >
              623465
            </MjmlText>
            <MjmlText {...textStyles} paddingBottom={20}>
              The verification code will be valid for 30 minutes. Please do not
              share this code with anyone.
            </MjmlText>
            <MjmlText {...textStyles}>
              This is an automated message, please do not reply.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingTop={0} paddingBottom={0}>
          <MjmlColumn>
            <MjmlDivider
              borderWidth={1}
              borderColor="#BFBFBF"
              paddingTop={0}
              paddingBottom={0}
            />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              color={COLOR_DARK_BLUE}
              fontSize={16}
              lineHeight={24}
              fontWeight={700}
              align="center"
              paddingBottom={0}
            >
              Stay connected!
            </MjmlText>

            <MjmlSocial mode="horizontal" innerPadding="10px 10px">
              <MjmlSocialElement
                src="https://www.dropbox.com/s/p12ywmknlx9jnpn/reddit.png?dl=1"
                href="https://www.reddit.com/user/22SPB"
              />
              <MjmlSocialElement
                src="https://www.dropbox.com/s/zgreaf0lj3t4djh/twitter.png?dl=1"
                href="https://twitter.com/22xgame"
              />
              <MjmlSocialElement
                src="https://www.dropbox.com/s/kpg231c7wbyymbq/telegram.png?dl=1"
                href="https://t.me/SPB22xgame_news"
              />
              <MjmlSocialElement
                src="https://www.dropbox.com/s/ozss739di24gyst/discord.png?dl=1"
                href="https://discord.gg/haveQFFS73"
              />
              <MjmlSocialElement
                src="https://www.dropbox.com/s/h04041cwng2gehp/vk.png?dl=1"
                href="https://vk.com/22xgame"
              />
            </MjmlSocial>

            <MjmlText
              {...textStyles}
              fontSize={12}
              align="center"
              paddingTop={0}
            >
              © 2017 - 2023{" "}
              <a href="https://tyz.network/" style={{ color: "#000000" }}>
                tyz.network
              </a>
              , All Rights Reserved.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};
