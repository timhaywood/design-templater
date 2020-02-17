import React, { useState } from "react";
import styled from "styled-components";
import saveImage from "./DomToImage";

import Box from "./stphils-ds/box";
import useThemeColour from "./stphils-ds/colour";
import { MdEvent, MdAccessTime, MdPlace } from "react-icons/md";

const Heading = styled.h1`
  margin-bottom: 32px;
`;

const Content = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  margin: auto;
`;

const Controls = styled.div`
  background-color: white;
  height: 100vh;
  width: 420px;
  padding: 48px;
`;

const Design = styled.div`
  font-family: "Linotte";
  background-color: ${props => props.colour};
  display: flex;
  justify-content: space-between;
  width: 640px;
  height: 360px;
  min-width: 640px;
  min-height: 360px;
  padding: 32px 48px;
  line-height: 150%;
  margin: 0 auto;
`;

const ContentArea = styled.div`
  width: 46%;
`;
const ImageArea = styled.div`
  border-radius: 16px;
  width: 250px;
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
`;

const InputStyles = `
  display: block;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: sans-serif;
  padding: 8px;
  border: 2px solid black;
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
`;

const Button = styled.button`
  color: white;
  padding: 8px;
  font-weight: bold;
  background-color: black;
  margin-top: 12px;
  border: none;
`;

const DescriptionArea = styled.div`
  white-space: pre-wrap;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: flex-start;

  label {
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

  const defaultImageUrl = `https://source.unsplash.com/random/600x800/?church`;
  const [imageUrl, setImageUrl] = useState(defaultImageUrl);
  const [date, setDate] = useState("2020-01-01");
  const [time, setTime] = useState("01:01:00");
  const [location, setLocation] = useState("");
  const [isSaving, setSaving] = useState(false);
  const dateObject = new Date(`${date}${time && ` ${time}`}`);
  const dateString = dateObject.toLocaleDateString("en-UK", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const timeString = dateObject.toLocaleTimeString("en-UK", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  function handleSave(e, id) {
    e.preventDefault();
    setSaving(true);
    saveImage(id, () => setSaving(false));
  }

  return (
    <Content className="App">
      <Controls>
        <Heading>Event Slide Maker</Heading>
        <form>
          <Label>
            Heading
            <InputArea
              value={heading}
              onChange={event => setHeading(event.target.value)}
            />
          </Label>
          <Label>
            Description{" "}
            <InputArea
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </Label>
          <Label>
            Image URL
            <Input
              value={imageUrl}
              onChange={event => setImageUrl(event.target.value)}
            />
          </Label>
          <ControlGroup>
            <Label>
              Date
              <Input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </Label>
            <Label>
              Time
              <Input
                type="time"
                value={time}
                onChange={event => setTime(event.target.value)}
              />
            </Label>
          </ControlGroup>
          <Label>
            Location
            <Input
              value={location}
              onChange={event => setLocation(event.target.value)}
            />
          </Label>
          <ControlGroup>
            <Label>
              Theme
              <Select
                value={theme}
                onChange={event => setTheme(event.target.value)}
              >
                <option value="white">White</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </Select>
            </Label>
            <Label>
              Hue
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
          {date && (
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
