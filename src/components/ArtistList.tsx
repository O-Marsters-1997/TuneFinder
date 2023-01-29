import type { Component } from "solid-js";
import { For } from "solid-js";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";
import Text from "@common/Text";
import Button from "@common/Button";
import View from "@common/View";
import useLogger from "@hooks/useLogger";
import styled from "@emotion/styled";
import { ViewOther } from "./lib/variants/view";

const ArtistList: Component = () => {
  const logger = useLogger();

  return (
    <>
      <For each={artists()} fallback={<div>Artists are loading</div>}>
        {(artist) => (
          <>
            <ArtistItem artist={artist} />
          </>
        )}
      </For>
      <Text text=" what are you talking about" />
      <Button
        text="please click me boy"
        onClick={() => {
          logger.log("testing this pattern");
        }}
        variant="rounded"
        colorVariant="green"
      />
      <Button
        text="please click me boy"
        onClick={() => {
          logger.log("testing this pattern");
        }}
        variant="rounded"
        colorVariant="green"
      />
      <View height="500px" width="500px" as="div" />
    </>
  );
};

export default ArtistList;
