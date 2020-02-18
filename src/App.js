import React, { useState } from "react";
import styled from "styled-components";
import saveImage from "./DomToImage";

import Box from "./stphils-ds/box";
import useThemeColour from "./stphils-ds/colour";
import { MdEvent, MdAccessTime, MdPlace } from "react-icons/md";

const shadowStyles = `
  box-shadow: 0px 6px 16px rgba(27, 61, 107, 0.2),
  12px 8px 64px rgba(27, 61, 107, 0.15)
`;

const Heading = styled.h1`
  margin-bottom: 32px;
  color: ${useThemeColour("grey").light.heading};
`;

const Content = styled.div`
  background-color: ${useThemeColour("grey").light.background};
  display: flex;
  align-items: center;
  font-family: sans-serif;
  margin: auto;
`;

const Controls = styled.div`
  font-family: "Linotte", sans-serif;
  background-color: white;
  overflow: auto;
  height: 100vh;
  width: 420px;
  padding: 48px;
  color: ${useThemeColour("blue").white.text};
  ${shadowStyles};
`;

const Design = styled.div`
  font-family: "Linotte";
  background-color: ${props => props.colour};
  display: flex;
  justify-content: center;
  width: 640px;
  height: 360px;
  min-width: 640px;
  min-height: 360px;
  padding: 32px 48px;
  line-height: 150%;
  margin: 0 auto;
`;

const ContentArea = styled.div`
  overflow: hidden;
  max-height: 100%;
  align-self: center;
  max-width: 70%;
`;

const ImageArea = styled.div`
  margin-left: 48px;
  border-radius: 16px;
  min-width: 250px;
  height: 300px;
  overflow: hidden;
  img {
    position: relative;
    left: 50%;
    margin-left: -50%;
    height: 100%;
    min-width: 250px;
    width: auto;
  }
`;

const DesignHeading = styled.h2`
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.5px;
  margin: 0px;
  color: ${props => props.colour};
`;

const DesignText = styled.p`
  font-size: 18px;
  margin: 0px;
  color: ${props => props.colour};
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin: 0px;
`;

const InputStyles = `
  width: 100%;
  display: block;
  font-family: sans-serif;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${useThemeColour("grey").light.background};
  font-size: small;
  resize: none;
`;

const InputArea = styled.textarea`
  ${InputStyles}
  width: 100%;
  height: 64px;
`;

const Input = styled.input`
  ${InputStyles}
`;

const Select = styled.select`
  ${InputStyles}
  padding-right: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='grey' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
`;

const Button = styled.button`
  font-family: "Linotte", sans-serif;
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 16px;
  background-color: ${useThemeColour("blue").dark.background};
  border: none;
  ${shadowStyles};
`;

const DescriptionArea = styled.div`
  white-space: pre-wrap;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: flex-start;
  label {
    margin: 0px;
    margin-right: 8px;
  }
`;

const IconGroup = styled.div`
  margin: 0px;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    margin-left: 8px;
    padding-top: 3px;
  }
`;

export default function App() {
  const [theme, setTheme] = useState("white");
  const [hue, setHue] = useState("blue");
  const colours = useThemeColour(hue);
  const [heading, setHeading] = useState("Event Name");
  const [description, setDescription] = useState(
    "A brief description that describes the event. Should be kept short!",
  );
  const [language, setLanguage] = useState("en-UK");

  const defaultImageUrl = `https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80`;
  const [imageUrl, setImageUrl] = useState(defaultImageUrl);
  const [date, setDate] = useState("2020-01-01");
  const [time, setTime] = useState("01:01:00");
  const [location, setLocation] = useState("");
  const [isSaving, setSaving] = useState(false);
  const dateObject = new Date(`${date || "2020/01/01"}${time && ` ${time}`}`);
  const dateString = dateObject.toLocaleDateString(language, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const timeString = dateObject
    .toLocaleTimeString(language, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toLowerCase();

  function handleSave(e, id) {
    e.preventDefault();
    setSaving(true);
    saveImage(id, () => setSaving(false));
  }

  function handleImageUrlChange(event) {
    if (event.target.value) {
      setTheme("white");
    }
    return setImageUrl(event.target.value);
  }

  return (
    <Content className="App">
      <Controls>
        <Heading>Event Slide Maker</Heading>
        <form>
          <Label>
            <p>Language</p>
            <Select
              value={language}
              onChange={event => setLanguage(event.target.value)}
            >
              <option value="en-UK">English</option>
              <option value="zh-HANT">Chinese Traditional</option>
              <option value="zh-HANS">Chinese Simplified</option>
              <option value="ko">Korean</option>
            </Select>
          </Label>
          <Label>
            <p>Heading</p>
            <InputArea
              value={heading}
              onChange={event => setHeading(event.target.value)}
            />
          </Label>
          <Label>
            <p>Description</p>
            <InputArea
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </Label>
          <Label>
            <p>Image URL</p>
            <Input
              value={imageUrl}
              onChange={event => handleImageUrlChange(event)}
            />
            <small>
              Images can be found on <a href="https://unsplash.com">Unsplash</a>
            </small>
          </Label>
          <ControlGroup>
            <Label>
              <p>Date</p>
              <Input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </Label>
            <Label>
              <p>Time</p>
              <Input
                type="time"
                value={time}
                onChange={event => setTime(event.target.value)}
              />
            </Label>
          </ControlGroup>
          <Label>
            <p>Location</p>
            <Input
              value={location}
              onChange={event => setLocation(event.target.value)}
            />
          </Label>
          <ControlGroup>
            <Label>
              <p>Theme</p>
              <Select
                value={theme}
                onChange={event => setTheme(event.target.value)}
              >
                <option value="white">White</option>
                <option value="light" disabled={imageUrl}>
                  Light
                </option>
                <option value="dark" disabled={imageUrl}>
                  Dark
                </option>
              </Select>
            </Label>
            <Label>
              <p>Hue</p>
              <Select
                value={hue}
                onChange={event => setHue(event.target.value)}
              >
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="aqua">Aqua</option>
                <option value="teal">Teal</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
              </Select>
            </Label>
          </ControlGroup>
          {imageUrl && (
            <small>(Other themes are only available without an image)</small>
          )}
          <Button onClick={e => handleSave(e, "design")}>
            {isSaving ? "Saving..." : "Save as PNG"}
          </Button>
        </form>
      </Controls>
      <Design id="design" colour={colours[theme].background}>
        <ContentArea>
          <Box paddingV={1}>
            <DesignHeading colour={colours[theme].heading}>
              {heading}
            </DesignHeading>
          </Box>
          <Box paddingV={1}>
            <DescriptionArea>
              <DesignText colour={colours[theme].text}>
                {description}
              </DesignText>
            </DescriptionArea>
          </Box>
          {date && (
            <Box paddingV={0.5}>
              <IconGroup>
                <MdEvent size={18} color={colours[theme].accent} />
                <DesignText colour={colours[theme].text}>
                  {dateString}
                </DesignText>
              </IconGroup>
            </Box>
          )}
          {time && (
            <Box paddingV={0.5}>
              <IconGroup>
                <MdAccessTime size={18} color={colours[theme].accent} />
                <DesignText colour={colours[theme].text}>
                  {timeString}
                </DesignText>
              </IconGroup>
            </Box>
          )}
          {location && (
            <Box paddingV={0.5}>
              <IconGroup>
                <MdPlace size={18} color={colours[theme].accent} />
                <DesignText colour={colours[theme].text}>{location}</DesignText>
              </IconGroup>
            </Box>
          )}
        </ContentArea>
        {imageUrl && (
          <ImageArea>
            <img src={imageUrl} alt="Random" draggable="false" />
          </ImageArea>
        )}
      </Design>
    </Content>
  );
}
