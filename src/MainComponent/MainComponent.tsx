import {
  Coachmark,
  DirectionalHint,
  IconButton,
  TeachingBubbleContent,
  TooltipHost,
} from "@fluentui/react";
import * as React from "react";

export function MainComponent(): React.ReactElement {
  const [showCoachmark, setShowCoachmark] = React.useState(false);
  const targetButton = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    setTimeout(() => {
      setShowCoachmark(true);
    }, 1000);
  }, []);
  return (
    <div className="MainComponent">
      <TooltipHost content="Tips">
        <div ref={targetButton} className="buttonTarget">
          <IconButton
            className="helpIcon"
            iconProps={{ iconName: "AddPhone" }}
          />
        </div>
      </TooltipHost>
      {showCoachmark && (
        <Coachmark
          target={targetButton.current}
          positioningContainerProps={{
            directionalHint: DirectionalHint.bottomAutoEdge,
            doNotLayer: false,
          }}
        >
          <TeachingBubbleContent
            headline="Hei"
            hasCloseButton
            onDismiss={() => setShowCoachmark(false)}
          >
            Husk å ta kontakt hvis du har spørsmål eller står fast!
          </TeachingBubbleContent>
        </Coachmark>
      )}
    </div>
  );
}
