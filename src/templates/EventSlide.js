import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  MdEvent,
  MdAccessTime,
  MdPlace,
  MdClear,
  MdFileDownload,
  MdCached,
} from "react-icons/md";

import saveImage from "../utils/saveImage";
import Box from "../stphils-ds/box";
import { useThemeColours, colours } from "../stphils-ds/colour";
import {
  Label,
  Select,
  InputArea,
  Input,
  StrokeButton,
  ControlGroup,
  Button,
} from "../stphils-ds/Forms";

import { ControlsArea } from "../components/ControlsArea";
import { Page } from "../components/Page";
import { Artboard } from "../components/Artboard";
import { TextWithIcon } from "../components/design/TextWithIcon";
import { IconButton } from "../components/IconButton";
import { DesignHeading, DesignText } from "../components/DesignCopy";
import { ControlHeading, Small } from "../components/ControlsCopy";

const ContentArea = styled.div`
  overflow: hidden;
  max-height: 100%;
  align-self: center;
  max-width: 70%;
`;

const ImageArea = styled.div`
  margin-left: 36px;
  border-radius: 16px;
  width: auto;
  height: 300px;
  max-width: 250px;
  flex-shrink: 0;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function EventSlide() {
  const [theme, setTheme] = useState("white");
  const [hue, setHue] = useState("blue");
  const themeColours = useThemeColours(hue);
  const blueColours = useThemeColours("blue");
  const hues = Object.keys(colours);

  const [heading, setHeading] = useState("Event Name");
  const [description, setDescription] = useState(
    "A brief description that describes the event. Should be kept short!",
  );
  const [language, setLanguage] = useState("en-UK");
  const [date, setDate] = useState("2020-01-01");
  const [time, setTime] = useState("01:01:00");
  const [location, setLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

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

  function handleFileUpload(event) {
    event.preventDefault();
    const imagePath = URL.createObjectURL(event.target.files[0]);
    setUploadedImage(imagePath);
    setTheme("white");
  }

  return (
    <Page className="App">
      <ControlsArea>
        <ControlHeading>Event Slides</ControlHeading>
        <Box paddingV={2} />
        <form>
          <Label>
            <p>Language</p>
            <Box paddingV={0.5} />
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
          <Box paddingV={2} />
          <Label>
            <p>Heading</p>
            <Box paddingV={0.5} />
            <InputArea
              value={heading}
              onChange={event => setHeading(event.target.value)}
            />
          </Label>
          <Box paddingV={2} />
          <Label>
            <p>Description</p>
            <Box paddingV={0.5} />
            <InputArea
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </Label>
          <Box paddingV={2} />
          <Label>
            <p>Image file</p>
            <Box paddingV={0.5} />
            <Input
              type="file"
              accept="image/x-png,image/jpeg"
              onChange={e => handleFileUpload(e)}
            />
            <Box paddingV={1} />
            {!uploadedImage && (
              <Small>
                Images can be found on{" "}
                <a href="https://unsplash.com">Unsplash</a>
              </Small>
            )}
            {uploadedImage && (
              <StrokeButton onClick={() => setUploadedImage("")}>
                <IconButton
                  text={"Clear Image"}
                  icon={<MdClear size={18} color={blueColours.white.accent} />}
                />
              </StrokeButton>
            )}
          </Label>
          <Box paddingV={2} />
          <ControlGroup>
            <Label>
              <p>Date</p>
              <Box paddingV={0.5} />
              <Input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </Label>
            <Label>
              <p>Time</p>
              <Box paddingV={0.5} />
              <Input
                type="time"
                value={time}
                onChange={event => setTime(event.target.value)}
              />
            </Label>
          </ControlGroup>
          <Box paddingV={2} />
          <Label>
            <p>Location</p>
            <Box paddingV={0.5} />
            <Input
              value={location}
              onChange={event => setLocation(event.target.value)}
            />
          </Label>
          <Box paddingV={2} />
          <ControlGroup>
            <Label>
              <p>Theme</p>
              <Box paddingV={0.5} />
              <Select
                value={theme}
                onChange={event => setTheme(event.target.value)}
              >
                <option value="white">White</option>
                <option value="light" disabled={uploadedImage}>
                  Light
                </option>
                <option value="dark" disabled={uploadedImage}>
                  Dark
                </option>
              </Select>
            </Label>
            <Label>
              <p>Hue</p>
              <Box paddingV={0.5} />
              <Select
                value={hue}
                onChange={event => setHue(event.target.value)}
              >
                {hues.map(hue => {
                  return (
                    <option key={hue} value={hue}>
                      {hue.charAt(0).toUpperCase() + hue.slice(1)}
                    </option>
                  );
                })}
              </Select>
            </Label>
          </ControlGroup>
          {uploadedImage && (
            <>
              <Box paddingV={1} />
              <Small>Other themes are only available without an image</Small>
            </>
          )}
          <Box paddingV={2} />
          <Button onClick={e => handleSave(e, "design")}>
            {!isSaving ? (
              <IconButton
                text={"Save as PNG"}
                icon={
                  <MdFileDownload size={18} color={blueColours.dark.accent} />
                }
              />
            ) : (
              <IconButton
                text={"Saving"}
                icon={<MdCached size={18} color={blueColours.dark.accent} />}
              />
            )}
          </Button>
        </form>
      </ControlsArea>
      <Artboard id="design" colour={themeColours[theme].background}>
        <ContentArea>
          {heading && (
            <>
              <DesignHeading colour={themeColours[theme].heading}>
                {heading}
              </DesignHeading>
              <Box paddingV={1} />
            </>
          )}
          {description && (
            <>
              <DesignText colour={themeColours[theme].text}>
                {description}
              </DesignText>
              <Box paddingV={1} />
            </>
          )}
          {date && (
            <>
              <TextWithIcon
                icon={<MdEvent size={18} color={themeColours[theme].accent} />}
                text={
                  <DesignText colour={themeColours[theme].text}>
                    {dateString}
                  </DesignText>
                }
              />
              <Box paddingV={0.5} />
            </>
          )}
          {time && (
            <>
              <TextWithIcon
                icon={
                  <MdAccessTime size={18} color={themeColours[theme].accent} />
                }
                text={
                  <DesignText colour={themeColours[theme].text}>
                    {timeString}
                  </DesignText>
                }
              />
              <Box paddingV={0.5} />
            </>
          )}
          {location && (
            <>
              <TextWithIcon
                icon={<MdPlace size={18} color={themeColours[theme].accent} />}
                text={
                  <DesignText colour={themeColours[theme].text}>
                    {location}
                  </DesignText>
                }
              />
              <Box paddingV={0.5} />
            </>
          )}
        </ContentArea>
        {uploadedImage && (
          <ImageArea>
            <img src={uploadedImage} alt="Random" draggable="false" />
          </ImageArea>
        )}
      </Artboard>
    </Page>
  );
}
