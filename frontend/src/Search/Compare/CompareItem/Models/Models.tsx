import React, { useState } from "react";
import Button from "../../../../components/Button";
import Flex from "../../../../components/Flex";
import { Model } from "../../../../interfaces";
import { kFormatter, trimPrice } from "../../../../shared/utils/utils";
import { DescriptionTitle, SectionTitle } from "../CompareItem.styles";
import { ModelItem, Title } from "./Models.styles";

interface Props {
  models: Model[];
}

const Models = ({ models }: Props) => {
  const [isModelsHidden, setIsModelsHidden] = useState(false);
  if (models.length <= 1) {
    return <div />;
  }

  return (
    <div style={{ marginTop: "10px", width: "100%" }}>
      <SectionTitle>
        <DescriptionTitle>Variations</DescriptionTitle>
        {/*//@ts-ignore */}
        <Button
          variant='secondary'
          onClick={() => setIsModelsHidden(!isModelsHidden)}
        >
          <span>{isModelsHidden ? "Hide" : "Show"}</span>
        </Button>
      </SectionTitle>
      {!isModelsHidden && (
        <Flex dir='row' align='flex-start' justify='flex-start' wrap='wrap'>
          {models.map((m) => (
            <ModelItem>
              <Title style={{ textTransform: "capitalize" }}>
                {m.name.replace(/\s/gi, " ")}
              </Title>
              <Flex justify='space-around' align='center'>
                <div>₱{trimPrice(m.price)}</div>
                <div style={{ fontSize: "12px" }}>
                  <div>{kFormatter(m.stock)} left</div>
                  <div>{kFormatter(m.sold)} sold</div>
                </div>
              </Flex>
            </ModelItem>
          ))}
        </Flex>
      )}
    </div>
  );
};

export default Models;
